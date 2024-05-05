import React from 'react';
import { useState } from 'react';
import MusicPlayer from './../../MusicPlayer';
import MusicWave from '../../Components/MusicWave';
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
    // const { data : lastFreeSound, isLoading, error } = useQuery(['data', 'lastFreeSound'], () => fetchData());
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
                    <p className='text-[#F5F5F5] text-[14px] mb-[1rem] font-[700] px-[1rem]'>اخرین رایگان ها</p>

                    {/* {lastFreeSound?.data.map(data => ( */}
                        <section>
                            <div className='flex justify-between w-full'>
                                <div className='w-[25%] flex'>
                                    <Link className='text-[#1F1F1F] w-[40%] bg-[#1DB954] flex items-center justify-center px-[1rem] py-[0.5rem] rounded-full'>
                                        <svg className='ml-[0.3rem]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0059 4.49982C13.0059 3.94753 12.5581 3.49982 12.0059 3.49982C11.4536 3.49982 11.0059 3.94753 11.0059 4.49982L11.0059 10.9999L10.4116 10.9998C10.236 10.9997 10.0203 10.9996 9.84387 11.0216L9.84053 11.022C9.71408 11.0378 9.13804 11.1096 8.86368 11.6752C8.58872 12.2421 8.89065 12.7422 8.95597 12.8504L8.95841 12.8544C9.05062 13.0075 9.18477 13.1783 9.29511 13.3189L9.31885 13.3491C9.61348 13.725 9.99545 14.2092 10.3759 14.6002C10.5657 14.7953 10.783 14.9965 11.0139 15.1554C11.2191 15.2966 11.5693 15.4999 12 15.4999C12.4307 15.4999 12.7809 15.2966 12.9861 15.1554C13.217 14.9965 13.4343 14.7953 13.6241 14.6002C14.0046 14.2092 14.3865 13.725 14.6812 13.3491L14.7049 13.3189C14.8152 13.1784 14.9494 13.0075 15.0416 12.8544L15.044 12.8504C15.1093 12.7422 15.4113 12.2421 15.1363 11.6752C14.862 11.1096 14.2859 11.0378 14.1595 11.022L14.1561 11.0216C13.9797 10.9996 13.764 10.9997 13.5884 10.9998L13.0059 10.9999L13.0059 4.49982Z" fill="#1F1F1F"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 15.5C4.55228 15.5 5 15.9477 5 16.5C5 17.0989 5.03256 17.5106 5.09643 17.8013C5.15781 18.0807 5.23372 18.181 5.27636 18.2236C5.31899 18.2663 5.41933 18.3422 5.69872 18.4036C5.98944 18.4674 6.40114 18.5 7 18.5L17 18.5C17.5989 18.5 18.0106 18.4674 18.3013 18.4036C18.5807 18.3422 18.681 18.2663 18.7236 18.2236C18.7663 18.181 18.8422 18.0807 18.9036 17.8013C18.9674 17.5106 19 17.0989 19 16.5C19 15.9477 19.4477 15.5 20 15.5C20.5523 15.5 21 15.9477 21 16.5C21 17.1421 20.9678 17.7259 20.857 18.2304C20.7437 18.7462 20.535 19.2407 20.1379 19.6379C19.7407 20.035 19.2462 20.2437 18.7304 20.357C18.2259 20.4678 17.6421 20.5 17 20.5L7 20.5C6.35786 20.5 5.77406 20.4678 5.26959 20.357C4.7538 20.2437 4.25926 20.035 3.86214 19.6379C3.46503 19.2407 3.25632 18.7462 3.14301 18.2304C3.03219 17.7259 3 17.1421 3 16.5C3 15.9477 3.44772 15.5 4 15.5Z" fill="#1F1F1F"/>
                                        </svg>

                                        <span>دانلود</span>
                                    </Link>

                                    <button>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 25.9808L12 17.7075C12 14.0742 12 12.2575 13.1716 11.1287C14.3431 10 16.2288 10 20 10C23.7712 10 25.6569 10 26.8284 11.1287C28 12.2575 28 14.0742 28 17.7075V25.9808C28 28.2867 28 29.4396 27.2272 29.8523C25.7305 30.6514 22.9232 27.9852 21.59 27.1824C20.8168 26.7168 20.4302 26.484 20 26.484C19.5698 26.484 19.1832 26.7168 18.41 27.1824C17.0768 27.9852 14.2695 30.6514 12.7728 29.8523C12 29.4396 12 28.2867 12 25.9808Z" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>

                                <div>

                                </div>

                                <div>

                                </div>

                                <div>
                                    s
                                </div>
                            </div>
                        </section>
                    {/* ))} */}
                </section>

                {/* <MusicPlayer songs={[{ url: 'https://api.mrseda.com/api/v1/sounds/thumbnail/1' }, { url: 'https://api.mrseda.com/api/v1/sounds/thumbnail/2' }]} /> */}
            </main>
        </>
    );
};

export default Home;