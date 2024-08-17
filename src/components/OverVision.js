import React from 'react';
import bgimg from '../assects/bgimg.png'; // Correct path to the image
import '@fontsource/zen-dots';
import video2 from '../assects/video2.mp4';

const OverVision = () => {
    return (
        <>
            <div
                className="relative bg-cover bg-center text-white py-12 px-6 md:py-24 xl:px-12 2xl:py-[144px] 2xl:px-[144px] items-center justify-center flex flex-col gap-6 md:gap-8 lg:gap-[50px]"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                {/* Overlay with shadow */}
                <div className="absolute inset-0 bg-black opacity-50 shadow-lg"></div>

                <div className="relative z-10 font-zen-dots font-normal text-4xl xl:text-6xl 2xl:text-[90px] leading-tight md:leading-[88px] lg:leading-[108px]">
                    Our Vision
                </div>
                <div className="relative z-10 flex w-full xl:w-[90%] 2xl:w-[80%] font-normal text-sm xl:text-lg 2xl:text-[24px] leading-snug md:leading-6 lg:leading-[29px] text-center">
                    The vision of 3dotlink is to be a transformative force at the intersection of culture, art, and technology within the Web3 landscape. We envision a digital realm where the rich tapestry of cultural traditions, especially the intricate artistry of masks from diverse ethnic groups, is seamlessly woven into the fabric of the digital age. Our vision extends far beyond mere NFTs; it's about the preservation and celebration of cultural heritage in a dynamic, ever-evolving digital space. We strive to empower artists and creators, offering them a unique canvas to bring their cultural art to life while harnessing the capabilities of AI technology. We see 3dotlink as a bridge between the past and the future, where ancient rituals and modern innovation converge, enriching our collective human experience and fostering a global community united by a shared appreciation for the art, history, and culture that defines us. In essence, our vision is to unlock the immense potential of cultural art within Web3, inviting the world to explore, create, and treasure the beauty of diverse traditions through the digital realm.
                </div>
                <button className="relative z-10 font-semibold text-sm md:text-base lg:text-[14px] leading-[24px] bg-[#ED213A] py-2 md:py-3 lg:py-[10px] px-6 md:px-8 lg:px-[25px] rounded-md hover:bg-white hover:text-[#ED213A] mt-8 lg:mt-[50px]">
                    Read More
                </button>
            </div>
            <video
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
            >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    );
};

export default OverVision;
