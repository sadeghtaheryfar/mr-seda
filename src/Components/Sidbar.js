import React from 'react';
import { Link } from 'react-router-dom';

const Sidbar = () => {
    const toggleMenuMobile = () => {
        var menu = document.querySelector('#sidbar-main-mobile');
        menu.classList.toggle('active-sidbar-mobile');
    }
    return (
        <>
            <aside id='sidbar-main'>
                <section className='w-full flex flex-col'>
                    <div className='w-full p-[2.5rem] flex justify-center items-center border-b border-[#434343]'>
                        <Link>
                            <img src='https://api.mrseda.com/storage/soundtrack.png' />
                        </Link>
                    </div>

                    <div className='w-full p-[1rem] flex justify-center items-center border-b border-[#434343]'>
                        <button className='border w-full border-[#434343] hover:bg-[#4343437a] transition-[0.3s] cursor-pointer flex items-center justify-start px-[1rem] py-[0.5rem] rounded-full'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 18L22 22.5" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5C15.9706 20.5 20 16.4706 20 11.5Z" stroke="#F5F5F5" stroke-width="1.5" stroke-linejoin="round"/>
                            </svg>

                            <span className='mr-[0.5rem]'>جستجو</span>
                        </button>
                    </div>

                    <div className='p-[1rem]'>
                        <ul>
                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-start items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 9.5C7 10.8807 5.88071 12 4.5 12C3.11929 12 2 10.8807 2 9.5C2 8.11929 3.11929 7 4.5 7C5.88071 7 7 8.11929 7 9.5ZM7 9.5V2C7.33333 2.5 7.6 4.6 10 5" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="10.5" cy="19.5" r="2.5" stroke="#BFBFBF" stroke-width="1.5"/>
                                    <circle cx="20" cy="18" r="2" stroke="#BFBFBF" stroke-width="1.5"/>
                                    <path d="M13 19.5L13 11C13 10.09 13 9.63502 13.2466 9.35248C13.4932 9.06993 13.9938 9.00163 14.9949 8.86504C18.0085 8.45385 20.2013 7.19797 21.3696 6.42937C21.6498 6.24509 21.7898 6.15295 21.8949 6.20961C22 6.26627 22 6.43179 22 6.76283V17.9259" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13 13C17.8 13 21 10.6667 22 10" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span className='mr-[0.5rem]'>موزیک</span>
                                </Link>
                            </li>

                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-start items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6V18" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6 9V15" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3 10.5V13.5" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 9V15" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M18 7.5V16.5" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 10.5V13.5" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 10.5V13.5" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span className='mr-[0.5rem]'>ساند افکت</span>
                                </Link>
                            </li>

                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-start items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.84187 15.7523C13.8878 18.2143 14.5464 13.7063 14.1671 12.5793C15.8636 13.7063 17.5083 17.5593 15.7609 19.3413C14.7736 20.0926 12.0993 21.1444 9.30029 19.3413C8.43151 18.2958 8.53321 16.7476 8.84187 15.7523Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.2661 3C9.55822 4.20748 7.11642 7.82993 8.33732 12.6599C8.33732 12.6599 6.50596 12.6599 5.38381 10.2449C3.85035 13.1967 4.77873 18.6973 8.41203 19.9048C11.4365 21.0317 14.8175 21.0317 16.8681 19.9048C19.5914 17.9721 20.0602 14.0864 18.2292 11.4773C16.6428 9.21666 18.1046 6.62245 18.1046 6.62245C16.2032 6.62245 14.8721 8.27473 14.476 9.02826C12.6047 7.33473 13.3432 4.6916 14.2661 3Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span className='mr-[0.5rem]'>موزیک های داغ</span>
                                </Link>
                            </li>

                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-between items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <div className='flex items-center justify-center'>
                                        <span className='ml-[0.5rem]'>دسته بندی</span>
                                    </div>

                                    <div className='bg-[#1F1F1F] flex items-center justify-center h-[1.75rem] w-[2.5rem] rounded-full'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 6L9.70711 11.2929C9.37377 11.6262 9.20711 11.7929 9.20711 12C9.20711 12.2071 9.37377 12.3738 9.70711 12.7071L15 18" stroke="#1DB954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full p-[1rem] flex justify-center items-center border-t border-b border-[#434343]'>
                        <button className='w-full bg-[#1F1F1F] text-[#1DB954] transition-[0.3s] cursor-pointer flex items-center justify-start px-[1rem] py-[0.75rem] rounded-full'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 6.5C15.5 8.433 13.933 10 12 10C10.067 10 8.5 8.433 8.5 6.5C8.5 4.567 10.067 3 12 3C13.933 3 15.5 4.567 15.5 6.5Z" fill="#1DB954" stroke="#1DB954" stroke-width="1.5"/>
                            <path d="M22 17.5C22 19.433 20.433 21 18.5 21C16.567 21 15 19.433 15 17.5C15 15.567 16.567 14 18.5 14C20.433 14 22 15.567 22 17.5Z" stroke="#1DB954" stroke-width="1.5"/>
                            <path d="M9 17.5C9 19.433 7.433 21 5.5 21C3.567 21 2 19.433 2 17.5C2 15.567 3.567 14 5.5 14C7.433 14 9 15.567 9 17.5Z" stroke="#1DB954" stroke-width="1.5"/>
                            </svg>

                            <span className='mr-[0.5rem]'>خرید اشتراک</span>
                        </button>
                    </div>

                    <div className='p-[1rem]'>
                        <ul>
                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-start items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 15.8462C17 14.8266 17.8954 14 19 14C20.1046 14 21 14.8266 21 15.8462C21 16.2137 20.8837 16.5561 20.6831 16.8438C20.0854 17.7012 19 18.5189 19 19.5385V20M18.9902 22H18.9992" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#BFBFBF" stroke-width="1.5"/>
                                    </svg>

                                    <span className='mr-[0.5rem]'>سوالات متداول</span>
                                </Link>
                            </li>

                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-start items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8809 7.01656L17.6538 8.28825M11.8578 10.8134L14.2442 11.4492M11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.2471 11.9765 17.9664Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M12 20.9461L11.0477 21.2054C8.35403 21.9389 7.00722 22.3057 5.94619 21.6831C4.88517 21.0606 4.52429 19.6919 3.80253 16.9545L2.78182 13.0832C2.06006 10.3458 1.69918 8.97712 2.31177 7.89886C2.84167 6.96613 4 7.00009 5.5 6.99997" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>

                                    <span className='mr-[0.5rem]'>بلاگ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </aside>

            <section id='sidbar-main-mobile'>
                <section className='w-full flex flex-col'>
                    <div className='px-[2rem] py-[1rem] border-b border-[#434343]'>
                        <button onClick={toggleMenuMobile} className='bg-[#1F1F1F] p-[0.5rem] flex items-center justify-center rounded-full'>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.4223 5.49994L5.42235 19.4999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.42235 5.49994L19.4223 19.4999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className='p-[1rem]'>
                        <ul>
                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-start items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 9.5C7 10.8807 5.88071 12 4.5 12C3.11929 12 2 10.8807 2 9.5C2 8.11929 3.11929 7 4.5 7C5.88071 7 7 8.11929 7 9.5ZM7 9.5V2C7.33333 2.5 7.6 4.6 10 5" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="10.5" cy="19.5" r="2.5" stroke="#BFBFBF" stroke-width="1.5"/>
                                    <circle cx="20" cy="18" r="2" stroke="#BFBFBF" stroke-width="1.5"/>
                                    <path d="M13 19.5L13 11C13 10.09 13 9.63502 13.2466 9.35248C13.4932 9.06993 13.9938 9.00163 14.9949 8.86504C18.0085 8.45385 20.2013 7.19797 21.3696 6.42937C21.6498 6.24509 21.7898 6.15295 21.8949 6.20961C22 6.26627 22 6.43179 22 6.76283V17.9259" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13 13C17.8 13 21 10.6667 22 10" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span className='mr-[0.5rem]'>موزیک</span>
                                </Link>
                            </li>

                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-start items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6V18" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6 9V15" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3 10.5V13.5" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 9V15" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M18 7.5V16.5" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 10.5V13.5" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 10.5V13.5" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span className='mr-[0.5rem]'>ساند افکت</span>
                                </Link>
                            </li>

                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-start items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.84187 15.7523C13.8878 18.2143 14.5464 13.7063 14.1671 12.5793C15.8636 13.7063 17.5083 17.5593 15.7609 19.3413C14.7736 20.0926 12.0993 21.1444 9.30029 19.3413C8.43151 18.2958 8.53321 16.7476 8.84187 15.7523Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.2661 3C9.55822 4.20748 7.11642 7.82993 8.33732 12.6599C8.33732 12.6599 6.50596 12.6599 5.38381 10.2449C3.85035 13.1967 4.77873 18.6973 8.41203 19.9048C11.4365 21.0317 14.8175 21.0317 16.8681 19.9048C19.5914 17.9721 20.0602 14.0864 18.2292 11.4773C16.6428 9.21666 18.1046 6.62245 18.1046 6.62245C16.2032 6.62245 14.8721 8.27473 14.476 9.02826C12.6047 7.33473 13.3432 4.6916 14.2661 3Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span className='mr-[0.5rem]'>موزیک های داغ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full p-[1rem] flex justify-center items-center border-t border-b border-[#434343]'>
                        <button className='w-full bg-[#1F1F1F] text-[#1DB954] transition-[0.3s] cursor-pointer flex items-center justify-start px-[1rem] py-[0.75rem] rounded-full'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 6.5C15.5 8.433 13.933 10 12 10C10.067 10 8.5 8.433 8.5 6.5C8.5 4.567 10.067 3 12 3C13.933 3 15.5 4.567 15.5 6.5Z" fill="#1DB954" stroke="#1DB954" stroke-width="1.5"/>
                            <path d="M22 17.5C22 19.433 20.433 21 18.5 21C16.567 21 15 19.433 15 17.5C15 15.567 16.567 14 18.5 14C20.433 14 22 15.567 22 17.5Z" stroke="#1DB954" stroke-width="1.5"/>
                            <path d="M9 17.5C9 19.433 7.433 21 5.5 21C3.567 21 2 19.433 2 17.5C2 15.567 3.567 14 5.5 14C7.433 14 9 15.567 9 17.5Z" stroke="#1DB954" stroke-width="1.5"/>
                            </svg>

                            <span className='mr-[0.5rem]'>خرید اشتراک</span>
                        </button>
                    </div>

                    <div className='p-[1rem]'>
                        <ul>
                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-start items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 15.8462C17 14.8266 17.8954 14 19 14C20.1046 14 21 14.8266 21 15.8462C21 16.2137 20.8837 16.5561 20.6831 16.8438C20.0854 17.7012 19 18.5189 19 19.5385V20M18.9902 22H18.9992" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#BFBFBF" stroke-width="1.5"/>
                                    </svg>

                                    <span className='mr-[0.5rem]'>سوالات متداول</span>
                                </Link>
                            </li>

                            <li>
                                <Link className='w-full my-[0.5rem] flex justify-start items-center px-[1rem] py-[0.5rem] transition-[0.3s] text-[#BFBFBF] hover:text-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8809 7.01656L17.6538 8.28825M11.8578 10.8134L14.2442 11.4492M11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.2471 11.9765 17.9664Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M12 20.9461L11.0477 21.2054C8.35403 21.9389 7.00722 22.3057 5.94619 21.6831C4.88517 21.0606 4.52429 19.6919 3.80253 16.9545L2.78182 13.0832C2.06006 10.3458 1.69918 8.97712 2.31177 7.89886C2.84167 6.96613 4 7.00009 5.5 6.99997" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>

                                    <span className='mr-[0.5rem]'>بلاگ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Sidbar;