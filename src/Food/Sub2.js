import React from 'react';
import { GrFormLocation } from 'react-icons/gr'
import Profile from './Profile'
import { IoMdArrowDropup } from 'react-icons/io';

import './Food.css'

export default class Sub extends React.Component {

    constructor() {
        super()

        this.state = {
            Profile: [
                { id: 1, img1: 'images/cover-1.jpg', img2: 'images/cover-2.jpg', img3: 'images/cover-3.jpg', imgP: 'images/m-2.jpg', name: "Dmitry Krivonosov", location: "Khmelnytskyi, Ukrain", app: 263, followers: 5.5, view: 2 },
                
            ]
        }
    }

    render() {
        let { id, title, img, location } = this.props
        return (
            <div className='flex justify-center items-center w-full mb-4'>

                <div className='flex justify-center items-center mr-2'>
                    <img src={img} className="w-8 h-8 rounded-full" />
                </div>

                <ul>
                    <li className="capitalize font-bold text-sm">
                        <a href='#' className='multiple relative '>{title}
                            <div className="sub-multiple absolute top-7 left-10 opacity-0 invisible z-50">
                                <span className='text-3xl top-25 text-white left-1/2 absolute'><IoMdArrowDropup /></span>
                                {this.state.Profile.map(profile => (
                                    <Profile {...profile}/>
                                ))}
                            </div>
                        </a></li>
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