import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between px-5 py-4 items-center'>

                <div className='w-24'>
                    <img src="logo.svg" alt="" />
                </div>

                <div className='flex gap-10'>
                    <div className='border px-4 py-1 rounded-[5px]'>Home</div>
                    <div>Lifestyle</div>
                    <div>Features</div>
                    <div>Contact</div>
                </div>
            </div>
        </div>
    );
};

export default Header;