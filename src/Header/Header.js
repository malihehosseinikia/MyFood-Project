import React from 'react';
import { SiAdobe } from 'react-icons/si';
import { FiSearch } from 'react-icons/fi';
import '../Food/Food.css'

class Header extends React.Component {

    render() {
        return (
            <>
                <div className='flex justify-between bg-white py-2 px-8 border border-gray-100 shadow-md scroll fixed top-0 w-full z-50'>
                 
                    <ul className='flex py-1 menu'>
                        <li><a href='#' className='capitalize font-bold text-gray-700 mr-5 py-3'>for you</a></li>
                        <li><a href='#' className='capitalize font-bold text-gray-700 mr-5 py-3'>discover</a></li>
                        <li><a href='#' className='capitalize font-bold text-gray-700 mr-5 py-3'>livestreams</a></li>
                        <li><a href='#' className='capitalize font-bold text-gray-700 mr-5 py-3'>hire</a></li>
                        <li><a href='#' className='capitalize font-bold text-gray-700 mr-5 py-3'>jobs</a></li>
                    </ul>
                    <div className='flex relative'>
                        <input className='bg-gray-100 border-gray-200 border rounded-2xl w-96 pl-7' placeholder='Search...'></input>
                        <span className='absolute text-gray-400 top-2 left-2'><FiSearch/></span>
                    </div>
                    <div className='flex'>
                        <button className='capitalize bg-green-50 border-green-100 border rounded-3xl w-20 text-center text-sm text-blue-500 font-bold hover:bg-green-100 duration-500 mr-3'>Log in</button>
                        <button className='capitalize bg-blue-600 rounded-3xl w-24 text-center text-sm text-white font-bold hover:bg-blue-700 duration-500 mr-3'>sign up</button>
                        <a className='flex my-1.5 '>
                            <span className='text-lg font-bold mr-2'><SiAdobe /></span>
                            <span className='text-sm font-bold tracking-tight' href='#'>Adobe</span>
                        </a>

                    </div>
                </div>
            </>
        )
    }

}


export default Header;
