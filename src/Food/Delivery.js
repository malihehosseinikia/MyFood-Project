import React from 'react'
import { AiFillLike } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai';
import { MdModeComment } from 'react-icons/md'

export default class Delivery extends React.Component {
    render() {
        return (
            <>

                <div className='w-full'>
                    <h1 className='text-md font-bold tracking-tight mb-2 text-gray-700'>My food delivery</h1>
                    <p className='text-sm text-gray-500 tracking-tight mb-4'>My food delivery dashboard and mobile aplication</p>
                    <div className='flex text-gray-500 mb-4 text-sm'>
                        <div className='flex justify-center items-center mr-2 '>
                            <spsn className='mr-0.5'><AiFillLike /></spsn>
                            <h1>8.2k</h1>
                        </div>
                        <div className='flex justify-center items-center mr-2 '>
                            <spsn className='mr-0.5'><AiFillEye /></spsn>
                            <h1>51.9k</h1>
                        </div>
                        <div className='flex justify-center items-center mr-2 '>
                            <spsn className='mr-0.5'><MdModeComment /></spsn>
                            <h1>871</h1>
                        </div>

                    </div>
                    <h1 className='text-gray-500 text-xs'>Published: January 10th 2019</h1>
                </div>

            </>
        )
    }
}