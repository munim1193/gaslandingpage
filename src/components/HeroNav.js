import React from 'react';
import video1 from '../assects/video1.mp4'; // Corrected path
import NavBar from './NavBar';
import HeroSection from './HeroSection';

const HeroNav = () => {
    return (
        <div className="relative md:h-screen w-full border-[#FF0000] border-b-[15px]">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
            >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
            <div className="relative z-10 h-auto flex flex-col">
                <NavBar />
                <HeroSection />
            </div>
        </div>
    );
};

export default HeroNav;
