import React, { Component } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default class Comment extends Component {



    render() {


        return (
            <>
                <div className='p-8 border border-t-0  border-l-0  border-r-0 border-gray-300 mb-5 leading-10 '>
                    <h1 className='text-3xl font-bold tracking-tighter'>Sign up to join the conversation</h1>
                    <p className='text-gray-800'>Add your feedback for Dmitry Krivonosov’s project by signing in or signing up.</p>
                    <div className='flex items-center w-full'>
                        <button className='capitalize bg-blue-600 rounded-3xl text-center text-xs text-white font-bold hover:bg-blue-700 
                            duration-500 py-2 px-4 mr-2'>sign up with email</button>
                        <ul className='flex justify-center items-center'>
                            <li><a href='#' className='mr-2 text-xm text-gray-500 font-bold'>or</a></li>
                            <li> <a className='flex justify-center items-center bg-white border border-gray-300 w-8 h-8 rounded-full text-lg text-black hover:bg-gray-300 duration-500 mr-2' href='#'>
                                <AiFillApple />
                            </a></li>
                            <li> <a className='flex justify-center items-center bg-blue-500  w-8 h-8 rounded-full text-lg text-white hover:bg-blue-600 duration-500 mr-2' href='#'>
                                <FaFacebookF />
                            </a></li>
                            <li> <a className='flex justify-center items-center bg-white border border-gray-300 w-8 h-8 rounded-full text-lg text-gray-600 hover:bg-gray-300 duration-500' href='#'>
                                <FcGoogle />
                            </a></li>

                        </ul>
                    </div>
                </div>

            </>
        )
    }
}
