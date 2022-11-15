import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { GrFormLocation } from 'react-icons/gr'
import {IoIosMail} from 'react-icons/io';


export default class Fields extends React.Component {
    render() {
   
        let{img1, img2, img3, imgP, name, location, app, followers, view} = this.props
        return (
            <>

                <div className='h-96 relative border border-gray-300 bg-white w-96'>  
                    <div className='m-1 flex justify-center items-center px-1'>
                        <img src={img1} className="w-1/3 mr-1"/>
                        <img src={img2} className="w-1/3 mr-1"/>
                        <img src={img3} className="w-1/3"/>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center mt-16 absolute top-1 px-5'>
                        <img src={imgP} className='rounded-full border-4 border-white w-24 mb-3'/>
                            <a className='font-bold text-lg text-gray-900'>{name}</a>
                        <ul className='flex justify-center items-center text-gray-500 mb-5'>
                            <li><a className='font-bold text-xl'><GrFormLocation /></a></li>
                            <li><a className='text-md'>{location}</a></li>
                        </ul>
                       
                       <ul className='flex mb-3'>
                            <li className='flex flex-col items-center  px-2  border-r border-gray-300'>
                                <span className='font-bold'>{app}k</span>
                                <span className='text-gray-500 text-sm'>Appreciations</span>
                            </li>
                            <li className='flex flex-col items-center px-2  border-r border-gray-300'>
                                <span className='font-bold'>{followers}k</span>
                                <span className='text-gray-500 text-sm'>Followers</span>
                            </li>
                            <li className='flex flex-col items-center  px-2 '>
                                <span className='font-bold'>{view}m</span>
                                <span className='text-gray-500 text-sm'>Project Views</span>
                            </li>
                       </ul>

                       <button className='flex justify-center items-center w-full bg-blue-700 hover:bg-blue-800 p-1 rounded-full text-white font-bold text-sm duration-500 mb-2'>
                        <FaPlusCircle/> <span className='ml-1'>Follow</span>
                       </button>
                       <button className='flex justify-center items-center w-full hover:bg-blue-100 p-1 rounded-full text-blue-700 font-bold text-sm border border-gray-300 hover:border-blue-200 duration-500'>
                        <span className='text-xl'> <IoIosMail/> </span>
                         <span className='ml-1'>Message</span>
                       </button>
                    </div>
                 
                </div>

            </>
        )
    }
}