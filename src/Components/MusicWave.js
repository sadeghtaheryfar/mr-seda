import React, { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import { useQuery } from "react-query";

const fetchAudioUrl = async (apiUrl) => {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch audio file");
  }
  const audioBlob = await response.blob();
  const objectURL = URL.createObjectURL(audioBlob);
  return objectURL;
};

const MusicWave = ({ apiUrl,id }) => {
  const {
    data: audioUrl,
    error,
    isLoading,
  } = useQuery(["audioUrl", apiUrl], () => fetchAudioUrl(apiUrl),{
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (error) {
      console.error(error);
    }
    if (audioUrl) {
      createWave(audioUrl);
    }
  }, [audioUrl, error]);

  const createWave = (audioUrl) => {
    var waveform = document.getElementById("waveform" + id);
    if(!waveform.children.length > 0)
    {
      const wavesurfer = WaveSurfer.create({
        container: "#waveform" + id,
        waveColor: "#434343",
        progressColor: "#1DB954",
        barWidth: 3,
        barRadius: 100,
        cursorWidth: 0,
        height: 80,
        backend: "MediaElement",
        interact: false, // Disable user interaction
      });
  
      wavesurfer.load(audioUrl);
    }
  };

  return (
    <div className="w-full">
      <div id={"waveform" + id}></div>
    </div>
  );
};

export default MusicWave;
