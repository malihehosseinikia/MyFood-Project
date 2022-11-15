import React from 'react';
import { GrFormLocation } from 'react-icons/gr';

export default class Sub extends React.Component{

    render(){
        let {id, title, img, location} = this.props
        return(
            <div className='flex justify-center items-center w-full mb-4'>

            <div className='flex justify-center items-center mr-2'>
                <img src={img} className="w-8 h-8 rounded-full" />
            </div>

            <ul>
                <li className="capitalize font-bold text-sm"><a href='#'>{title}</a></li>
                <li className="capitalize"><a href='#' className='flex'>
                    <span className='text-lg'><GrFormLocation /></span>
                    <span className='text-xs'>{location}</span>
                </a></li>
            </ul>

            <button className='capitalize bg-blue-600 rounded-3xl text-center text-xs text-white font-bold hover:bg-blue-700 duration-500 ml-auto py-1 px-4'>follow</button>

        </div> 
        )
    }
}