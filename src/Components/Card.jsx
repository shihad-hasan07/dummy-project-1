import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { SlFire } from 'react-icons/sl';

const Card = ({ data }) => {
    const { id, title, author, comments, details, hashtags, img, readed_time, views, color } = data;

    return (
        <div className={`border-l-4 border-blue-400 bg-white drop-shadow-xl rounded-2xl mb-9 p-4 `}>
            <div className='flex flex-col md:flex-row items-center gap-6 md:items-start mb-5'>
                <div className='h-36 w-60'>
                    <img src={img} alt="" className='w-full h-full object-cover rounded-[12px]' />
                </div>

                <div className=''>
                    <p className='text-xl font-semibold'>{title}</p>
                    <div className='flex gap-5 text-sm mt-2'>
                        <p>By {author}</p>
                        <p>{comments} Comments</p>
                    </div>
                    <p className='mt-7'>{details.length > 120 ? details.substring(0, 120) + "..." : details}</p>
                </div>
            </div>

            <div className="border-t-2 border-dotted border-gray-300 my-4"></div>

            <div className='flex justify-between'>
                <div>{hashtags.map(tag => (<span>#{tag} </span>))}</div>
                <div className='flex gap-4'>
                    <p className='flex items-center gap-1'><SlFire />{views} views</p>

                    <p className='flex items-center gap-1'> <IoTimeOutline />{readed_time}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;