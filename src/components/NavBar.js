import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assects/logo.png';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='2xl:px-[144px] xl:px-[100px]  px-[20px] w-full h-[105px] flex justify-between items-center text-white mt-[10px]'>
            <img src={logo} alt='logo' className='md:w-[111px] md:h-[103px] w-[70px]'/>
            <div className='hidden md:flex flex-row justify-between w-[70%] items-center'>
                <Link className='hover:text-[#ED213A]'>Home</Link>
                <Link className='hover:text-[#ED213A]'>About</Link>
                <Link className='hover:text-[#ED213A]'>Artist</Link>
                <Link className='hover:text-[#ED213A]'>Staking</Link>
                <Link className='hover:text-[#ED213A]'>Roadmap</Link>
                <Link className='hover:text-[#ED213A]'>Team</Link>
                <Link className='hover:text-[#ED213A]'>Vesting</Link>
                <Link className='hover:text-[#ED213A]'>Marketplace</Link>
                <button className='font-semibold text-[20px] xl:text-[15px] leading-[24px] bg-[#ED213A] py-[15px] xl:py-[10px] px-[20px] xl:px-[15px] rounded-md hover:bg-white hover:text-[#ED213A]'>Connect Wallet</button>
            </div>
            <div className='flex md:hidden'>
                <button onClick={toggleMenu} className='text-[30px]'>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            {menuOpen && (
                <div className='absolute top-[105px] right-0 w-full bg-black md:hidden flex flex-col items-center p-5 space-y-4'>
                    <Link onClick={toggleMenu} className='hover:text-[#ED213A]'>Home</Link>
                    <Link onClick={toggleMenu} className='hover:text-[#ED213A]'>About</Link>
                    <Link onClick={toggleMenu} className='hover:text-[#ED213A]'>Artist</Link>
                    <Link onClick={toggleMenu} className='hover:text-[#ED213A]'>Staking</Link>
                    <Link onClick={toggleMenu} className='hover:text-[#ED213A]'>Roadmap</Link>
                    <Link onClick={toggleMenu} className='hover:text-[#ED213A]'>Team</Link>
                    <Link onClick={toggleMenu} className='hover:text-[#ED213A]'>Vesting</Link>
                    <Link onClick={toggleMenu} className='hover:text-[#ED213A]'>Marketplace</Link>
                    <button onClick={toggleMenu} className='font-semibold text-[20px] leading-[24px] bg-[#ED213A] py-[15px] px-[20px] rounded-md hover:bg-white hover:text-[#ED213A]'>Connect Wallet</button>
                </div>
            )}
        </div>
    );
};

export default NavBar;
