import React from 'react';
import '@fontsource/zen-dots';

const HeroSection = () => {
    return (
        <div className=' w-full flex flex-col items-start justify-center text-white px-6 md:px-12 xl:px-[100px] 2xl:px-[144px] gap-6 xl:gap-8 2xl:gap-[50px] py-12 md:py-24 xl:py-[50px] 2xl:py-[150px]'>
            <div className='font-zen-dots font-normal text-4xl xl:text-6xl 2xl:text-[90px] leading-tight xl:leading-[65px] 2xl:leading-[108px]'>
                Generate with AI,<br />Scan, Mint, Sell<br />& Trade
            </div>
            <div className='font-Inter font-normal text-base xl:text-lg 2xl:text-[24px] leading-snug md:leading-6 lg:leading-[29px]'>
                Explore 3dotlink, where Web3 meets cultural legacy, and <br />AI breathes life into NFTs
            </div>
            <button className='font-semibold text-base md:text-lg lg:text-[20px] leading-5 md:leading-6 lg:leading-[24px] bg-[#ED213A] py-3 md:py-4 lg:py-[15px] px-8 md:px-10 lg:px-[40px] rounded-md hover:bg-white hover:text-[#ED213A]'>
                Buy NFT'S
            </button>
        </div>
    )
}

export default HeroSection;
