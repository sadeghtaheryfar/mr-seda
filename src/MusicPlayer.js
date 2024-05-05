import React, { useRef, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import WaveSurfer from 'wavesurfer.js';

const MusicPlayer = ({ songs }) => {
  const wavesurferRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (songs.length === 0) return;

    const currentSong = songs[currentSongIndex];

    wavesurferRef.current = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#434343',
      progressColor: '#1DB954',
      barWidth: 3,
      barRadius: 100,
      cursorWidth: 0,
      height: 100,
      backend: 'MediaElement',
    });

    wavesurferRef.current.on('ready', () => {
      setDuration(wavesurferRef.current.getDuration());
    });

    wavesurferRef.current.on('audioprocess', () => {
      setCurrentTime(wavesurferRef.current.getCurrentTime());
    });

    wavesurferRef.current.on('finish', () => {
      playNextSong();
    });

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [songs, currentSongIndex]);

  const { isLoading } = useQuery(['audio', currentSongIndex], async () => {
    const currentSong = songs[currentSongIndex];
    const response = await fetch(currentSong.url);
    if (!response.ok) {
      throw new Error('Failed to fetch audio file');
    }
    const audioBlob = await response.blob();
    const objectURL = URL.createObjectURL(audioBlob);
    wavesurferRef.current.load(objectURL);
    setIsPlaying(false);
  }, {
    enabled: songs.length > 0,
    onError: (error) => setError(error.message),
  });

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  const playPreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
  };

  const togglePlay = () => {
    if (isPlaying) {
      wavesurferRef.current.pause();
    } else {
      wavesurferRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    wavesurferRef.current.setVolume(newVolume);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <div id="waveform"></div>
      
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          <div>Elapsed Time: {formatTime(currentTime)}</div>
          <div>Total Time: {formatTime(duration)}</div>
          <button onClick={playPreviousSong}>Previous</button>
          <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={playNextSong}>Next</button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </>
      )}
    </div>
  );
};

export default MusicPlayer;
