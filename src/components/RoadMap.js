import React from 'react'
import bc from '../assects/bc.png'
import bl from '../assects/bl.png'
import d1 from '../assects/D1.png'
import d2 from '../assects/d2.png'
import d3 from '../assects/d3.png'
import d4 from '../assects/d4.png'
import d5 from '../assects/d5.png'



const RoadMap = () => {
    return (
        <div className='flex flex-col items-center gap-[20px] bg-black text-white'>
            <div className='font-zen-dots text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-6'>
                Road<span className='text-[#FD1640]'>map</span>
            </div>
            <div className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-center mb-12 px-4 md:px-8 lg:px-16'>
                Guiding the fusion of culture, AI, and Web3 innovation
            </div>
            <div className='flex flex-row justify-start w-[70%] mt-[100px] gap-[30px]'>
                <div className='flex flex-col items-center'>
                    <img src={bc} alt='asd'/>
                    <img src={bl} alt='asd'/>
                    <img src={bc} alt='asd'/>
                    <img src={bl} alt='asd'/>
                    <img src={bc} alt='asd'/>
                    <img src={bl} alt='asd'/>
                    <img src={bc} alt='asd'/>
                </div>
                <div className='flex flex-col w-full'>

                    <div className='flex flex-col gap-[50px] w-full h-[400px]'>
                        <div className='text-[#FD1640] bg-[#FD164040] md:w-[40%] py-[10px] px-[20px] font-zen-dots text-[20px]'>Phase - I</div>
                        <div className='flex flex-row bg-[#FD1640] h-[40%] w-full px-[20px] py-[20px] relative items-center rounded-md'>
                            <div>
                                <li>Goal Defining</li>
                                <li>Market Research</li>
                                <li>Whitepaper v1</li>
                                <li>Initial Funding Secured</li>
                            </div>
                            <img src={d1} alt='asd' className='absolute top-[-140px] right-0 w-auto h-[300px] hidden md:block' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-[50px] w-full h-[400px] mt-[15px]'>
                        <div className='text-[#FD1640] bg-[#FD164040] md:w-[40%] py-[10px] px-[20px] font-zen-dots text-[20px] 2xl:ml-[25%] xl:ml-[35%]'>Phase - II</div>
                        <div className='flex flex-row bg-[#FD1640] h-[40%] w-full px-[20px] py-[20px] relative items-center rounded-md'>
                            <img src={d2} alt='asd' className='absolute top-[-140px] left-0 w-auto h-[300px] hidden md:block' />
                            <ul className='2xl:ml-[25%] xl:ml-[35%]'>
                                <li>AI Generative System Development</li>
                                <li>Early AI Generative System Testing</li>
                                <li>Website launch V1</li>
                                <li>Whitelisting</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[50px] w-full h-[400px] mt-[18px]'>
                        <div className='text-[#FD1640] bg-[#FD164040] md:w-[30%] py-[10px] px-[20px] font-zen-dots text-[20px]'>Phase - III</div>
                        <div className='flex flex-row bg-[#FD1640] h-[40%] w-full px-[20px] py-[20px] relative items-center rounded-md'>
                            <ul>
                                <li>NFT Minting</li>
                                <li>Active Marketing Campaigns</li>
                                <li>Community Engagement Initiatives</li>
                                <li>3dotlink Marketplace Launch</li>
                            </ul>
                            <img src={d3} alt='asd' className='absolute top-[-140px] right-0 w-auto h-[300px] hidden md:block' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-[50px] w-full h-[400px] mt-[15px]'>
                        <div className='text-[#FD1640] bg-[#FD164040] md:w-[40%] py-[10px] px-[20px] font-zen-dots text-[20px] 2xl:ml-[25%] xl:ml-[35%]'>Phase - IV</div>
                        <div className='flex flex-row bg-[#FD1640] h-[40%] w-full px-[20px] py-[20px] relative items-center rounded-md'>
                            <img src={d4} alt='asd' className='absolute top-[-140px] left-0 w-auto h-[300px] hidden md:block' />
                            <ul className='2xl:ml-[25%] xl:ml-[35%]'>
                                <li>Goal Defining</li>
                                <li>Market Research</li>
                                <li>Whitepaper v1</li>
                                <li>Initial Funding Secured</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[full] mb-10'>
                        <img src={d5} alt='asd'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RoadMap