import React from 'react';
import { useState } from 'react';
import BoxMusicPlayer from './../../Components/BoxMusicPlayer';
import MusicWave from './../../Components/MusicWave';
import { Swiper, SwiperSlide } from 'swiper/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import 'swiper/css';
import { Link } from 'react-router-dom';

const queryClient = new QueryClient();
const fetchData = async (postid) => {
    
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const response = await fetch('https://api.mrseda.com//api/v1/sounds?per_page=5&page=1&direction=desc', requestOptions);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const Home = () => {
    const [Musics, setMusics] = useState([]);
    const { data : lastFreeSound, isLoading, error } = useQuery(['data', 'lastFreeSound'], () => fetchData(),{
        retry: false,
        refetchOnWindowFocus: false,
    });

    const playMusic = (datas,data) => {
        const arrayOfObjects = [];
        arrayOfObjects.push({ title : data?.title , creator : data?.creator , cover : data?.cover?.thumbnail , url: 'https://api.mrseda.com/api/v1/sounds/thumbnail/' + data?.id });

        datas.forEach(url => {
            if (url.id == data.id) {
                return;
            }

            arrayOfObjects.push({ title : url?.title , creator : url?.creator , cover : url?.cover?.thumbnail , url: 'https://api.mrseda.com/api/v1/sounds/thumbnail/' + url?.id });
        });

        setMusics(arrayOfObjects);
    }

    return (
        <>
            <main id='home-main'>
                <section className='py-[2rem] px-[1rem] border-b border-[#262626]'>
                    <div>
                        <h2 className='text-[1.5rem] font-[700]'>موزیک های رایگان</h2>

                        <p className='text-[#F5F5F5] text-[14px] mt-[0.5rem] font-[700]'>موزیک های بدون مالکیت.</p>
                    </div>

                    <div className='flex text-nowrap flex-wrap flex-col lg:flex-row'>
                        <div className='flex items-center my-[0.5rem] lg:mx-[0.5rem]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" fill="#1DB954" fill-opacity="0.2"/>
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#1DB954" stroke-width="1.5"/>
                            <path d="M8 13.75C8 13.75 9.6 14.6625 10.4 16C10.4 16 12.8 10.75 16 9" stroke="#1DB954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <span className='mr-[0.5rem]'>برای هر ویدیویی</span>
                        </div>

                        <div className='flex items-center my-[0.5rem] lg:mx-[0.5rem]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" fill="#1DB954" fill-opacity="0.2"/>
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#1DB954" stroke-width="1.5"/>
                            <path d="M8 13.75C8 13.75 9.6 14.6625 10.4 16C10.4 16 12.8 10.75 16 9" stroke="#1DB954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <span className='mr-[0.5rem]'>بدون مشکل کپی رایت</span>
                        </div>

                        <div className='flex items-center my-[0.5rem] lg:mx-[0.5rem]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" fill="#1DB954" fill-opacity="0.2"/>
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#1DB954" stroke-width="1.5"/>
                            <path d="M8 13.75C8 13.75 9.6 14.6625 10.4 16C10.4 16 12.8 10.75 16 9" stroke="#1DB954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <span className='mr-[0.5rem]'>موسیقی انحصاری</span>
                        </div>
                    </div>
                </section>

                <section className='py-[2rem]'>
                    <p className='text-[#F5F5F5] text-[14px] mb-[1rem] font-[700] px-[1rem]'>بیشترین بازدید اخیر</p>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        grabCursor={true}
                        slidesOffsetAfter={16}
                        slidesOffsetBefore={16}
                    >
                        <SwiperSlide className='!w-min'>
                            <div className='w-[10rem] p-[0.5rem] rounded-[1rem] bg-[#1F1F1F]'>
                                <div>
                                    <img className='rounded-[1rem]' src='https://www.farsgamer.com/media/66279c374aa82.jpg' />
                                </div>

                                <div className='text-[14px] text-center mt-[1rem] mb-[0.5rem] text-[#F5F5F5]'>
                                    <span>ترند اینستاگرام</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide className='!w-min'>
                            <div className='w-[10rem] p-[0.5rem] rounded-[1rem] bg-[#1F1F1F]'>
                                <div>
                                    <img className='rounded-[1rem]' src='https://www.farsgamer.com/media/66279c374aa82.jpg' />
                                </div>

                                <div className='text-[14px] text-center mt-[1rem] mb-[0.5rem] text-[#F5F5F5]'>
                                    <span>ترند اینستاگرام</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide className='!w-min'>
                            <div className='w-[10rem] p-[0.5rem] rounded-[1rem] bg-[#1F1F1F]'>
                                <div>
                                    <img className='rounded-[1rem]' src='https://www.farsgamer.com/media/66279c374aa82.jpg' />
                                </div>

                                <div className='text-[14px] text-center mt-[1rem] mb-[0.5rem] text-[#F5F5F5]'>
                                    <span>ترند اینستاگرام</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide className='!w-min'>
                            <div className='w-[10rem] p-[0.5rem] rounded-[1rem] bg-[#1F1F1F]'>
                                <div>
                                    <img className='rounded-[1rem]' src='https://www.farsgamer.com/media/66279c374aa82.jpg' />
                                </div>

                                <div className='text-[14px] text-center mt-[1rem] mb-[0.5rem] text-[#F5F5F5]'>
                                    <span>ترند اینستاگرام</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide className='!w-min'>
                            <div className='w-[10rem] p-[0.5rem] rounded-[1rem] bg-[#1F1F1F]'>
                                <div>
                                    <img className='rounded-[1rem]' src='https://www.farsgamer.com/media/66279c374aa82.jpg' />
                                </div>

                                <div className='text-[14px] text-center mt-[1rem] mb-[0.5rem] text-[#F5F5F5]'>
                                    <span>ترند اینستاگرام</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide className='!w-min'>
                            <div className='w-[10rem] p-[0.5rem] rounded-[1rem] bg-[#1F1F1F]'>
                                <div>
                                    <img className='rounded-[1rem]' src='https://www.farsgamer.com/media/66279c374aa82.jpg' />
                                </div>

                                <div className='text-[14px] text-center mt-[1rem] mb-[0.5rem] text-[#F5F5F5]'>
                                    <span>ترند اینستاگرام</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide className='!w-min'>
                            <div className='w-[10rem] p-[0.5rem] rounded-[1rem] bg-[#1F1F1F]'>
                                <div>
                                    <img className='rounded-[1rem]' src='https://www.farsgamer.com/media/66279c374aa82.jpg' />
                                </div>

                                <div className='text-[14px] text-center mt-[1rem] mb-[0.5rem] text-[#F5F5F5]'>
                                    <span>ترند اینستاگرام</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className='pb-[2rem]'>
                    <p className='text-[#F5F5F5] text-[14px] mb-[0.5rem] font-[700] px-[1rem]'>اخرین رایگان ها</p>

                    {lastFreeSound?.data.map(data => (
                        <section className='px-[1rem]'>
                            <div className='flex justify-between w-full px-[1rem] my-[0.5rem] rounded-full'>
                                <div className='w-[15%] min-w-[15%] flex items-center'>
                                    <Link className='text-[#1F1F1F] w-[70%] h-min bg-[#1DB954] flex items-center justify-center px-[1rem] py-[0.5rem] rounded-full'>
                                        <svg className='ml-[0.3rem]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0059 4.49982C13.0059 3.94753 12.5581 3.49982 12.0059 3.49982C11.4536 3.49982 11.0059 3.94753 11.0059 4.49982L11.0059 10.9999L10.4116 10.9998C10.236 10.9997 10.0203 10.9996 9.84387 11.0216L9.84053 11.022C9.71408 11.0378 9.13804 11.1096 8.86368 11.6752C8.58872 12.2421 8.89065 12.7422 8.95597 12.8504L8.95841 12.8544C9.05062 13.0075 9.18477 13.1783 9.29511 13.3189L9.31885 13.3491C9.61348 13.725 9.99545 14.2092 10.3759 14.6002C10.5657 14.7953 10.783 14.9965 11.0139 15.1554C11.2191 15.2966 11.5693 15.4999 12 15.4999C12.4307 15.4999 12.7809 15.2966 12.9861 15.1554C13.217 14.9965 13.4343 14.7953 13.6241 14.6002C14.0046 14.2092 14.3865 13.725 14.6812 13.3491L14.7049 13.3189C14.8152 13.1784 14.9494 13.0075 15.0416 12.8544L15.044 12.8504C15.1093 12.7422 15.4113 12.2421 15.1363 11.6752C14.862 11.1096 14.2859 11.0378 14.1595 11.022L14.1561 11.0216C13.9797 10.9996 13.764 10.9997 13.5884 10.9998L13.0059 10.9999L13.0059 4.49982Z" fill="#1F1F1F"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 15.5C4.55228 15.5 5 15.9477 5 16.5C5 17.0989 5.03256 17.5106 5.09643 17.8013C5.15781 18.0807 5.23372 18.181 5.27636 18.2236C5.31899 18.2663 5.41933 18.3422 5.69872 18.4036C5.98944 18.4674 6.40114 18.5 7 18.5L17 18.5C17.5989 18.5 18.0106 18.4674 18.3013 18.4036C18.5807 18.3422 18.681 18.2663 18.7236 18.2236C18.7663 18.181 18.8422 18.0807 18.9036 17.8013C18.9674 17.5106 19 17.0989 19 16.5C19 15.9477 19.4477 15.5 20 15.5C20.5523 15.5 21 15.9477 21 16.5C21 17.1421 20.9678 17.7259 20.857 18.2304C20.7437 18.7462 20.535 19.2407 20.1379 19.6379C19.7407 20.035 19.2462 20.2437 18.7304 20.357C18.2259 20.4678 17.6421 20.5 17 20.5L7 20.5C6.35786 20.5 5.77406 20.4678 5.26959 20.357C4.7538 20.2437 4.25926 20.035 3.86214 19.6379C3.46503 19.2407 3.25632 18.7462 3.14301 18.2304C3.03219 17.7259 3 17.1421 3 16.5C3 15.9477 3.44772 15.5 4 15.5Z" fill="#1F1F1F"/>
                                        </svg>

                                        <span>دانلود</span>
                                    </Link>

                                    <button className='h-min'>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 25.9808L12 17.7075C12 14.0742 12 12.2575 13.1716 11.1287C14.3431 10 16.2288 10 20 10C23.7712 10 25.6569 10 26.8284 11.1287C28 12.2575 28 14.0742 28 17.7075V25.9808C28 28.2867 28 29.4396 27.2272 29.8523C25.7305 30.6514 22.9232 27.9852 21.59 27.1824C20.8168 26.7168 20.4302 26.484 20 26.484C19.5698 26.484 19.1832 26.7168 18.41 27.1824C17.0768 27.9852 14.2695 30.6514 12.7728 29.8523C12 29.4396 12 28.2867 12 25.9808Z" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>

                                <div className='w-[35%] flex items-center'>
                                    <MusicWave apiUrl={'https://api.mrseda.com/api/v1/sounds/thumbnail/' + data?.id} id={data?.id} />
                                </div>

                                <div className='w-[20%] flex items-center text-[#BFBFBF]'>
                                    <div className='flex items-center justify-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z" stroke="#BFBFBF" stroke-width="1.5"/>
                                            <path opacity="0.4" d="M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z" stroke="#BFBFBF" stroke-width="1.5"/>
                                        </svg>

                                        <span className='mr-[0.5rem] mt-[0.2rem]'>{data?.views}</span>
                                    </div>

                                    <div className='flex items-center justify-center mx-[0.5rem]'>
                                        <button>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.242 12C10.242 11.0335 11.0255 10.25 11.992 10.25H12.001C12.9675 10.25 13.751 11.0335 13.751 12C13.751 12.9665 12.9675 13.75 12.001 13.75H11.992C11.0255 13.75 10.242 12.9665 10.242 12Z" fill="white"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2342 18C10.2342 17.0335 11.0177 16.25 11.9842 16.25H11.9932C12.9597 16.25 13.7432 17.0335 13.7432 18C13.7432 18.9665 12.9597 19.75 11.9932 19.75H11.9842C11.0177 19.75 10.2342 18.9665 10.2342 18Z" fill="white"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2498 6C10.2498 5.0335 11.0333 4.25 11.9998 4.25H12.0088C12.9753 4.25 13.7588 5.0335 13.7588 6C13.7588 6.9665 12.9753 7.75 12.0088 7.75H11.9998C11.0333 7.75 10.2498 6.9665 10.2498 6Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className='flex justify-center items-center w-[50%] mr-[0.5rem]'>
                                        <div className='w-full ml-[0.5rem] bg-[#1F1F1F] px-[0.5rem] py-[0.2rem] rounded-full flex justify-center items-center'>
                                            <p>romantic</p>
                                        </div>

                                        <div className='w-full bg-[#1F1F1F] px-[0.5rem] py-[0.2rem] rounded-full flex justify-center items-center'>
                                            <p>piano</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[15%] flex items-center'>
                                    <button onClick={() => playMusic(lastFreeSound?.data,data)} className='cursor-pointer flex w-full'>
                                        <div className='w-full flex flex-col justify-center items-end ml-[1rem]'>
                                            <div className='!text-[#F5F5F5] font-bold'>
                                                <span>{data?.title}</span>
                                            </div>

                                            <div className='!text-[#FFFFFF] text-[14px]'>
                                                <span>{data?.creator}</span>
                                            </div>
                                        </div>

                                        <div className='w-[3.5rem] min-w-[3.5rem] h-[3.5rem]'>
                                            <img className='rounded-full w-full h-full' src={data?.cover?.thumbnail} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </section>
                    ))}
                </section>

                <BoxMusicPlayer songs={Musics} />
            </main>
        </>
    );
};

export default Home;