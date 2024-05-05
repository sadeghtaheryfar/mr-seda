import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const toggleMenuMobile = () => {
        var menu = document.querySelector('#sidbar-main-mobile');
        menu.classList.toggle('active-sidbar-mobile');
    }
    
    return (
        <>
            <header id='main-header'>
                <section className='w-full hidden justify-between h-full px-[2rem] py-[1rem] lg:flex'>
                    <div>

                    </div>

                    <div className='flex'>
                        <Link className='border border-[#434343] flex items-center justify-center px-[1rem] py-[0.5rem] rounded-full ml-[1rem]'>
                                <svg className='ml-[0.3rem]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 3.09502C13.543 3.03241 13.0755 3 12.6 3C7.29807 3 3 7.02944 3 12C3 16.9706 7.29807 21 12.6 21C13.0755 21 13.543 20.9676 14 20.905" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M13.5 14.5C12.9943 14.0085 11 12.7002 11 12M13.5 9.5C12.9943 9.99153 11 11.2998 11 12M11 12L21 12" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>


                                <span>ورود</span>
                                <span className='mx-[0.3rem]'>/</span>
                                <span>عضویت</span>
                            </Link>

                        <Link className='bg-[#1F1F1F] flex items-center justify-center px-[1rem] py-[0.5rem] rounded-full'>
                            <svg className='ml-[0.3rem]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14.5L12 4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20 16.5C20 18.982 19.482 19.5 17 19.5L7 19.5C4.518 19.5 4 18.982 4 16.5" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <span>لیست دانلود</span>
                        </Link>
                    </div>
                </section>
                
                <section className='w-full h-full lg:px-[2rem] lg:py-[1rem] lg:hidden'>
                    <section className='w-full flex justify-between items-center px-[1rem] py-[1rem] border-b border-[#262626]'>
                        <div>
                            <button onClick={toggleMenuMobile} className='bg-[#1F1F1F] flex items-center justify-center rounded-full'>
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z" fill="#1F1F1F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13.5C11 12.9477 11.4477 12.5 12 12.5L28 12.5C28.5523 12.5 29 12.9477 29 13.5C29 14.0523 28.5523 14.5 28 14.5L12 14.5C11.4477 14.5 11 14.0523 11 13.5Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.5C11 19.9477 11.4477 19.5 12 19.5L28 19.5C28.5523 19.5 29 19.9477 29 20.5C29 21.0523 28.5523 21.5 28 21.5L12 21.5C11.4477 21.5 11 21.0523 11 20.5Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 27.5C11 26.9477 11.4477 26.5 12 26.5L28 26.5C28.5523 26.5 29 26.9477 29 27.5C29 28.0523 28.5523 28.5 28 28.5L12 28.5C11.4477 28.5 11 28.0523 11 27.5Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                        <div>
                            <img src='https://api.mrseda.com/storage/soundtrack.png' />
                        </div>
                    </section>

                    <section className='w-full flex justify-between items-center px-[1rem] py-[1rem]'>
                        <div>
                            <Link className='border border-[#434343] flex items-center justify-center px-[1rem] py-[0.5rem] rounded-full ml-[1rem]'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 18L22 22.5" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5C15.9706 20.5 20 16.4706 20 11.5Z" stroke="#F5F5F5" stroke-width="1.5" stroke-linejoin="round"/>
                                </svg>
                            </Link>
                        </div>

                        <div className='flex'>
                            <Link className='border border-[#434343] flex items-center justify-center px-[1rem] py-[0.5rem] rounded-full ml-[1rem]'>
                                <svg className='ml-[0.3rem]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 3.09502C13.543 3.03241 13.0755 3 12.6 3C7.29807 3 3 7.02944 3 12C3 16.9706 7.29807 21 12.6 21C13.0755 21 13.543 20.9676 14 20.905" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M13.5 14.5C12.9943 14.0085 11 12.7002 11 12M13.5 9.5C12.9943 9.99153 11 11.2998 11 12M11 12L21 12" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>


                                <span>ورود</span>
                            </Link>

                            <Link className='bg-[#1F1F1F] flex items-center justify-center px-[1rem] py-[0.5rem] rounded-full'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 14.5L12 4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20 16.5C20 18.982 19.482 19.5 17 19.5L7 19.5C4.518 19.5 4 18.982 4 16.5" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                    </section>
                </section>
            </header>
        </>
    );
};

export default Header;