import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between px-5 py-4 items-center'>

                <div className='w-24 cursor-pointer'>
                    <img src="logo.svg" alt="" />
                </div>

                <div className='flex gap-5'>
                    <button className='text-lg font-semibold cursor-pointer px-4 py-1 rounded-[5px] hover:bg-[#f5f5fa]'>Home</button>
                    <div className='text-lg font-semibold cursor-pointer px-4 py-1 rounded-[5px] hover:bg-[#f5f5fa]'>Lifestyle</div>
                    <div className='text-lg font-semibold cursor-pointer px-4 py-1 rounded-[5px] hover:bg-[#f5f5fa]'>Features</div>
                    <div className='text-lg font-semibold cursor-pointer px-4 py-1 rounded-[5px] hover:bg-[#f5f5fa]'>Contact</div>
                    <button className='text-lg font-semibold cursor-pointer px-4 py-1 rounded-[5px] flex items-center justify-center gap-2  bg-green-400
                    text-white hover:bg-green-900'> <FaRegPaperPlane size={12} /><p>Join us</p></button>
                </div>
            </div>
        </div>
    );
};

export default Header;