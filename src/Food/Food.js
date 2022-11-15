import React from 'react'
import './Food.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoImagesSharp } from 'react-icons/io5'
import { AiFillFolderOpen } from 'react-icons/ai'
import { FaLink } from 'react-icons/fa'
import { IoMdArrowDropup } from 'react-icons/io'
import { AiFillLike } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { MdModeComment } from 'react-icons/md'
import { RiCreativeCommonsNdLine } from 'react-icons/ri'
import { RiCreativeCommonsByLine } from 'react-icons/ri'
import { RiCreativeCommonsNcLine } from 'react-icons/ri'


import UserComment from './UserComment'
import Comment from './Comment'
import Cover from './Cover'
import Sub from './Sub'
import Sub2 from './Sub2'
import Tools from '../Sidebar/Tools'
import Fields from './Fields'
import ProjectMade from './ProjectMade'
import Delivery from './Delivery'
import Source from '../Sidebar/Source'
import List from './List'
import Report from '../Sidebar/Report'




export default class Food extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Sub: [
                { id: 1, title: 'demitry krivonosov', img: 'images/m-2.jpg', location: 'Khmelnytskyi, Ukrain' },
                { id: 2, title: 'alexey petrov', img: 'images/m-1.jpg', location: 'Kiev, Ukraine' },
                { id: 3, title: 'lime agency', img: 'images/m-3.jpg', location: 'Ukraine' },
                { id: 4, title: 'artem malyi', img: 'images/m-4.jpg', location: 'Kiev, Ukraine' },
                { id: 5, title: 'lime stock', img: 'images/m-5.jpg', location: 'Khmelnytskyi, Ukraine' },
            ],

            UserComment: [
                { id: 1, name: 'ala kovacs', img: 'images/user-1.jpg', comment: 'Great work', days: 4 },
                { id: 2, name: 'Olgert Lichting ', img: 'images/user-2.jpg', comment: 'Оооочень вкусный дизайн!!! Прямо смотришь и слюнки капают)', days: 14 },
                { id: 3, name: 'Tanya Gerasimovich', img: 'images/user-3.jpg', comment: 'cool work!', days: 4 },
                { id: 4, name: 'Mubashar Ali Rajput ', img: 'images/user-4.png', comment: 'Great work. I like the colours.', days: 4 },
                { id: 5, name: 'Anna Poltorakova', img: 'images/user-5.jpg', comment: 'very stylish and modern design!😍', days: 3 },
                { id: 6, name: 'Taanvir X', img: 'images/user-6.jpg', comment: 'nice work!!!!!', days: 3 },
                { id: 7, name: 'Hugo Ribeiro ', img: 'images/user-7.jpg', comment: 'Very good!', days: 2 },
            ],

            ProjectMade: [
                { id: 1, title: 'Scorp', img: 'images/p-1.png', location: 'City of London, United Kingdom' },
                { id: 2, title: 'Lime Store', img: 'images/p-2.png', location: 'Хмельницьке, Ukraine' },
                { id: 3, title: 'Spaghetti Design', img: 'images/p-3.jpeg', location: 'Rome, Italy' },
                { id: 4, title: 'UI Kit', img: 'images/p-4.png', location: 'Moscow, Russian Federation' },
                { id: 5, title: 'Figma', img: 'images/p-5.png', location: 'San Francisco, CA, USA' },
            ],

            Cover: [
                { id: 1, title: 'The Mystical Jungle', img: 'images/cover-1.jpg', like: 4.9, view: 27.4 },
                { id: 2, title: 'Good games', img: 'images/cover-2.jpg', like: 15.4, view: 133.2 },
                { id: 3, title: 'Game Global', img: 'images/cover-3.jpg', like: 11.2, view: 126.5 },
                // { id: 4, title: '', img: 'images/cover-4.jpg', like: 10.5, view: 11 },
                // { id: 5, title: '', img: 'images/cover-5.jpg', like: 10.5, view: 11 },
                // { id: 6, title: '', img: 'images/cover-6.jpg', like: 10.5, view: 11 },
                // { id: 7, title: '', img: 'images/cover-7.jpg', like: 10.5, view: 11 },
                // { id: 8, title: '', img: 'images/cover-8.jpg', like: 10.5, view: 11 },
                // { id: 9, title: '', img: 'images/cover-9.jpg', like: 10.5, view: 11 },
            ],

            Tools: [
                { id: 1, title: 'photoshop', img: 'images/photoshop.svg' },
                { id: 2, title: 'illustrator', img: 'images/illustrator.svg' },
                { id: 3, title: 'XD', img: 'images/xd.svg' },
            ],


            Fields: [
                { id: 1, title: 'web design' },
                { id: 2, title: 'interaction design' },
                { id: 3, title: 'UI/UX' },
            ],



        }
    }
    render() {
        return (
            <>
                <div className="food mx-36 my-16 ">

                    {/* My Food Delivery (pitcure top)----------------- */}

                    <div className="flex mb-5">
                        <div className='flex justify-center items-center mr-2'>
                            <div>
                                <div className="flex">
                                    <img src="images/m-2.jpg" className="w-5 h-5 rounded-tl-full" />
                                    <img src="images/m-1.jpg" className="w-5 h-5 rounded-tr-full" />
                                </div>
                                <div className="flex">
                                    <img src="images/m-3.jpg" className="w-5 h-5 rounded-bl-full" />
                                    <img src="images/m-4.jpg" className="w-5 h-5 rounded-br-full" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="capitalize font-bold text-base">my food delivery</h1>
                            <div className='flex text-sm'>
                                <ul className='flex'>
                                    <li className='capitalize mr-4 '>
                                        <a href='#' className='multiple flex justify-center items-center relative pb-1'>multiple owners <span><IoMdArrowDropdown /></span>

                                            <div className="sub-multiple absolute top-7 z-50 bg-white w-80 py-3 px-5 rounded-lg shadow-lg opacity-0 invisible">
                                                <span className='text-3xl top-25 text-white left-1/2 absolute'><IoMdArrowDropup /></span>
                                                {this.state.Sub.map(sub => (
                                                    <Sub  {...sub} />
                                                ))}

                                            </div>
                                        </a></li>

                                    <li className='mr-4'>.</li>
                                    <li className='capitalize mr-4'><a href='#'>follow all</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    {/* picture------------------ */}

                    {/* ****************************************************************************************** */}
                    <div className="catalog relative bg-[url('/images/food.jpg')]'">
                        {/* ***********************************************************************************************/}
                        <img src='images/food.jpg' className='zoom' />
                        <div className='flex absolute top-3 left-3 pic-row-hover opacity-0'>
                            <a href='#' className='flex justify-center items-center capitalize bg-gray-900 text-white rounded-3xl px-4 py-1 font-bold mr-4'>
                                <span className='mr-1'><IoImagesSharp /></span>
                                <span href='#'>more like this </span>
                            </a>

                            <a href='#' className='flex justify-center items-center capitalize bg-gray-900 text-white rounded-3xl px-4 py-1 font-bold mr-4'>
                                <span className='mr-1'><AiFillFolderOpen /></span>
                                <span href='#'>save </span>
                            </a>

                            <a href='#' className='flex justify-center items-center capitalize bg-gray-900 text-white rounded-3xl px-4 py-1 font-bold'>
                                <span className='mr-1'><FaLink /></span>
                                <span href='#'>permalink </span>
                            </a>
                        </div>


                    </div>


                    {/* My Food Delivery (pitcure bottom)----------------- */}

                    <div className='bg-black w-full flex flex-col justify-center items-center justify-between py-10'>
                        <span className='flex justify-center items-center bg-blue-600  w-16 h-16 rounded-full text-2xl text-white mb-4'><AiFillLike /></span>
                        <h1 className='text-2xl text-white font-bold tracking-tight'>My food delivery</h1>
                        <div className='flex text-gray-500 mb-4'>
                            <div className='flex justify-center items-center mr-2 '>
                                <spsn className='mr-0.5'><AiFillLike /></spsn>
                                <h1>8.1k</h1>
                            </div>
                            <div className='flex justify-center items-center mr-2 '>
                                <spsn className='mr-0.5'><AiFillEye /></spsn>
                                <h1>51.5k</h1>
                            </div>
                            <div className='flex justify-center items-center mr-2 '>
                                <spsn className='mr-0.5'><MdModeComment /></spsn>
                                <h1>868</h1>
                            </div>

                        </div>
                        <h1 className='text-gray-500 text-xs'>Published: January 10th 2019</h1>
                    </div>

                    {/* SlideShow----------- */}
                    <div className='bg-gray-900 w-full p-12'>

                        <div className='flex mb-2'>
                            <div className='flex mr-2'>
                                <div>
                                    <div className="flex">
                                        <img src="images/m-2.jpg" className="w-7 h-7 rounded-tl-full" />
                                        <img src="images/m-1.jpg" className="w-7 h-7 rounded-tr-full" />
                                    </div>
                                    <div className="flex">
                                        <img src="images/m-3.jpg" className="w-7 h-7 rounded-bl-full" />
                                        <img src="images/m-4.jpg" className="w-7 h-7 rounded-br-full" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <ul className='mb-2'>
                                    <li className='capitalize mr-4 '>
                                        <a href='#' className='multiple flex justify-center items-center relative'>
                                            <div className='flex justify-center items-center text-base text-white font-bold'>
                                                <span>multiple owners </span>
                                                <span><IoMdArrowDropdown /></span>
                                            </div>

                                            <div className="sub-multiple absolute top-7 z-50 bg-white w-80 py-3 px-5 rounded-lg shadow-lg opacity-0 invisible">
                                            <span className='text-3xl text-white top-25 left-1/2 absolute'><IoMdArrowDropup /></span>
                                                {this.state.Sub.map(sub => (
                                                    <Sub  {...sub} />
                                                ))}

                                            </div>
                                        </a></li>
                                    <li className='capitalize mr-4 text-base text-white font-bold'><a href='#'>dmitry Krivonosov</a></li>
                                </ul>
                                <button className='capitalize bg-blue-600 rounded-3xl text-center text-xs text-white font-bold hover:bg-blue-700 duration-500 ml-auto py-1 px-4'>follow all</button>
                            </div>

                        </div>

                        <div className='slideShow flex flex-wrap justify-center items-center justify-between relative'>
                            {this.state.Cover.map(cover =>
                                <Cover {...cover} />
                            )}

                            <span className="prev absolute top-50% p-1 bg-white w-8 h-8 p-5 text-2xl rounded-full flex justify-center items-center cursor-pointer">&#10094;</span>
                            <span className="next absolute top-50% p-1 bg-white w-8 h-8 p-5 text-2xl rounded-full flex justify-center items-center cursor-pointer">&#10095;</span>
                        </div>



                    </div>

                    {/* comment && boxes---------------- */}
                    <div className='border border-gray-300 py-10 px-20'>

                        <div className='bg-white border border-gray-300 mb-5' >
                            <Comment />
                            {this.state.UserComment.map(usercomment => (

                                <UserComment {...usercomment} />
                            ))}


                            <a className='capitalize text-blue-800 text-center hover:bg-gray-300 p-7 duration-500 flex justify-center items-center' href='#'>see more comment <span className='ml-1 text-xs mt-1'><AiOutlineArrowDown /></span></a>

                        </div>

                        {/* boxes----------------------------- */}
                        <div className='flex w-full'>

                            <div className='w-1/2 flex flex-col mr-4'>

                                <div className='w-full h-full bg-white border border-gray-300 p-5 mb-4'>
                                    <h1 className='uppercase text-xs hover:bg-gray-200 text-gray-500 font-bold mb-2'>
                                        Owners
                                    </h1>
                                    {this.state.Sub.map(sub => (
                                        <Sub2  {...sub} />
                                    ))}
                                    
                                </div>
                                <div className='w-full h-full bg-white border border-gray-300 p-5 mb-4'>
                                    <h1 className='uppercase text-xs text-gray-500 font-bold mb-2'>project made for</h1>
                                    {this.state.ProjectMade.map(projectmade => (
                                        <ProjectMade {...projectmade} />
                                    ))}
                                </div>
                                <div className='w-full h-full bg-white border border-gray-300 p-5'>
                                    <Delivery />
                                </div>

                            </div>


                            <div className='w-1/2 flex flex-col'>

                                <div className='bg-white border border-gray-300 p-5 mb-4'>
                                    <h1 className='uppercase text-xs text-gray-500 font-bold mb-2'>tools</h1>
                                    {this.state.Tools.map(tools => (

                                        <Tools {...tools} />
                                    ))}
                                    <h1 className='uppercase text-xs text-gray-500 font-bold mb-2 mt-7'>Creative Fields</h1>
                                    {this.state.Fields.map(fields => (

                                        <Fields {...fields} />
                                    ))}

                                </div>
                                <div className='bg-white border border-gray-300 p-5 mb-4'>
                                    <Source />
                                </div>
                                <div className='bg-white border border-gray-300 p-5 mb-4'>
                                    <List />
                                </div>
                                <div className='flex'>
                                    <ul className='flex text-gray-400 text-2xl'>
                                        <li className='mr-1'><a href='#'><RiCreativeCommonsByLine /></a></li>
                                        <li className='mr-1'><a href='#'><RiCreativeCommonsNcLine /></a></li>
                                        <li ><a href='#'><RiCreativeCommonsNdLine /></a></li>

                                    </ul>

                                    <span className='ml-auto'><Report /></span>
                                </div>



                            </div>
                        </div>


                    </div>


                </div>

            </>
        )
    }
}