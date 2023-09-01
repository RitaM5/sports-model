import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import datas from './data.json';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';
import './Home.css'
ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const Details = () => {
    const [detailsData, setDetailsData] = useState({})
    const dynamicId = useParams();
    const id = dynamicId.id;
    const data = useLoaderData();
    useEffect(() => {
        if (data) {
            const gameDetailsData = data.find(detail => detail.id === id)
            setDetailsData(gameDetailsData)
        }
    }, []);
   
    const [chartData, setChartData] = useState({})

    useEffect(() => {

        setTimeout(() => {
            setChartData({
                labels: datas.map(item => item.ngay_mua),
                datasets: [
                    {
                        label: 'Data',
                        data: datas.map((item) => item.trigia),
                        fill: true,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            })
        }, 1000)

    }, [])
    return (
        <div className='my-container text-left'>
            <div className='my-12'>
                <div className='chart'>
                    {
                        chartData && chartData?.datasets && (
                            <Line
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'Data',
                                        },
                                    },
                                }}
                                data={chartData}
                            />
                        )
                    }
                </div>
            </div>
            <div>
                <h1 className='text-2xl  font-semibold'>SP States</h1>
                <div className='my-4 text-lg border px-3 py-5 rounded-lg space-y-3'>
                    <h2 className='text-[20px] font-semibold'>{detailsData?.SP}</h2>
                    <p className='text-gray-600 font-semibold'>Age: {detailsData?.Age}</p>
                    <p className='text-gray-600 font-semibold'>Weight: {detailsData?.weight}</p>
                    <p className='text-[20px] font-semibold inline-flex gap-4'>
                        <span>W/L Record: {detailsData?.winx_record}</span>
                        <span>AWX: {detailsData?.aws}</span>
                    </p>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-2xl  font-semibold'>Analytics</h1>
                <div className='my-4 text-lg border px-3 py-5 rounded-lg space-y-5'>
                    <div className='flex gap-3'>
                        <img src="https://img.icons8.com/emoji/25/red-square-emoji.png" alt="red-square-emoji" />
                        <p>{detailsData?.A_1}</p>
                    </div>
                    <div className='flex gap-3'>
                        <img src="https://img.icons8.com/color-glass/25/christmas-star.png" alt="christmas-star" />
                        <p>{detailsData?.A_2}</p>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-2xl  font-semibold'>Blurd</h1>
                <div className='text-lg my-4 border px-3 py-5 rounded-lg '>
                    <p>
                        {detailsData?.blurd}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;