import React from "react";
import { AiFillEye } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai'
import './Food.css'



export default class Cover extends React.Component {

    render() {
        let {id, title, img, like, view} = this.props
        return (
            <>
                <div className="cover w-30 text-white relative bg-[url('/images/cover-1.jpg')]'">

                    <img src={img} className='rounded-xl' />
                    <div className='capitalize font-bold absolute bottom-3 w-full px-5 cover-text opacity-0 invisible'>
                        <a className='' href='#'>{title}</a>
                        <div className='text-xs flex '>
                            <h1>multiple owners</h1>
                            <ul className='flex ml-auto' >
                                <li>

                                    <a href='#' className='flex justify-center items-center mr-3'>
                                        <AiFillLike />
                                        <span>{like}k</span>
                                    </a>

                                </li>
                                <li>
                                    <a href='#' className='flex justify-center items-center '>
                                        <AiFillEye />
                                        <span>{view}k</span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

