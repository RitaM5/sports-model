import React, { useEffect, useState } from 'react';
import sport1 from '../../assets/sport-1.jpg';
import sport2 from '../../assets/sport-2.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/games.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    return (
        <div className='my-container font-poppins text-lg'>
            <div className='text-left space-y-3 mt-8'>
                <h1 className='text-2xl  font-semibold'>Welcome back</h1>
                <p className='w-1/2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita officia qui aperiam a numquam obcaecati vitae suscipit tempora quaerat omnis, earum odit temporibus. Similique libero consequatur veritatis? Asperiores, magnam perferendis.
                </p>
            </div>
            <div className='text-left space-y-3 my-6'>
                <a href="#" target="_blank" rel="noopener noreferrer" className='underline underline-offset-8 text-2xl font-semibold'>Welcome back</a>
                <div className=''>
                    <div className='my-8 border border-spacing-2 p-2 md:flex gap-5 items-center'>
                        <img src={sport1} className='w-28 h-28 rounded-lg ' alt="" srcset="" />
                        <p className='mt-3 md:mt-0'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi necessitatibus facilis ea ducimus inventore totam sapiente quisquam. Repellendus possimus illo, consequatur corrupti earum, accusamus totam quibusdam, iure quas tempora labore!
                        </p>
                    </div>
                    <div className='my-8 border border-spacing-2 p-2 md:flex gap-5 items-center'>
                        <p className='mt-3 order-2 md:mt-0 lg:order-1 md:order-1'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi necessitatibus facilis ea ducimus inventore totam sapiente quisquam. Repellendus possimus illo, consequatur corrupti earum, accusamus totam quibusdam, iure quas tempora labore!
                        </p>
                        <img src={sport2} className='w-28 h-28 order-1 rounded-lg lg:order-2 md:order-2 mt-3 md:mt-0' alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className='text-left my-12 font-poppins'>
                <h1 className='text-2xl  font-semibold'>Games</h1>
                <div className='my-container my-8'>
                    <div className='grid grid-cols-4 text-[20px] font-semibold'>
                        <div><p className='px-3'>Time</p></div>
                        <div><p className='px-3'>Team</p></div>
                        <div><p className='px-3'>Starter</p></div>
                        <div><p className='px-3'>Analytics</p></div>
                    </div>
                </div>
                <div className='my-container'>
                    <div className=''>
                        {
                            details.map(details => (
                                <Link to={`../details/${details?.id}`}>
                                    <div className='grid grid-cols-4 mt-4 border text-lg font-semibold rounded-lg'>
                                        <div className=''>
                                            <p className='p-3'>{details?.date}</p>
                                            <p className='p-3'>{details?.time} PM</p>
                                        </div>
                                        <div>
                                            <p className='bg-gray-400 p-3'>{details?.team}</p>
                                            <p className=' bg-gray-600 text-white p-3'>{details?.SD}</p>
                                        </div>
                                        <div>
                                            <p className='bg-gray-400 p-3'><span className='text-white'>|</span><span className='ps-3'>{details?.SP}</span></p>
                                            <p className=' bg-gray-600 text-white p-3'><span className='text-white'>|</span><span className='ps-3'>{details?.Sd_name}</span></p>
                                        </div>
                                        <div>
                                            <p className='bg-gray-400 p-3'><span className='text-white'>|</span><span className='ps-3 inline-flex gap-4 items-center'>
                                                <img src="https://img.icons8.com/emoji/16/red-square-emoji.png" alt="red-square-emoji" />
                                                <img src="https://img.icons8.com/fluency/20/circled.png" alt="circled" />
                                                <img src="https://img.icons8.com/plasticine/20/triangle.png" alt="triangle" />
                                            </span></p>
                                            <p className=' bg-gray-600 text-white p-3'>
                                                <span className='text-white'>|</span><span className='ps-3 inline-flex gap-4 items-center'>
                                                    <img src="https://img.icons8.com/color-glass/20/christmas-star.png" alt="christmas-star" />
                                                    <img src="https://img.icons8.com/plasticine/20/triangle.png" alt="triangle" />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;