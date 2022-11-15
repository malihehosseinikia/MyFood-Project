import { FaPlusCircle } from 'react-icons/fa'
import { ImAttachment } from 'react-icons/im'
import { SiAdobephotoshop } from 'react-icons/si'
import { AiFillFolderOpen } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'
import { IoMdArrowDropright } from 'react-icons/io'
import Report from '../Sidebar/Report';
import Source from './Source';
import Tools from './Tools';
import '../Food/Food.css'
import Sub from '../Food/Sub';
import React from 'react'


export default class Sidebar extends React.Component {

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
            Tools: [
                { id: 1, title: 'photoshop', img: 'images/photoshop.svg' },
                { id: 2, title: 'illustrator', img: 'images/illustrator.svg' },
                { id: 3, title: 'XD', img: 'images/xd.svg' },
            ],


        }
    }


    render() {
        return (
            <>
                <div className="fixed top-32 flex flex-col justify-center items-center right-16">
                    <div className='relative mb-5 multiple'>
                        <div className="sub-multiple absolute top-30 right-16 z-50 bg-white  w-80 py-3 px-5 rounded-lg shadow-lg opacity-0 invisible ">
                            <span className='text-3xl top-10 right-10 text-white absolute'><IoMdArrowDropright /></span>
                            <h1 className='uppercase text-xs mb-3 text-gray-500 font-bold'>
                                Owners
                            </h1>
                            {this.state.Sub.map(sub => (
                                <Sub {...sub} />
                            ))}

                        </div>
                        <div className="flex">
                            <img src="images/m-2.jpg" className="w-6 h-6 rounded-tl-full" />
                            <img src="images/m-1.jpg" className="w-6 h-6 rounded-tr-full" />
                        </div>
                        <div className="flex">
                            <img src="images/m-3.jpg" className="w-6 h-6 rounded-bl-full" />
                            <img src="images/m-4.jpg" className="w-6 h-6 rounded-br-full" />
                        </div>
                        <div className='absolute bottom-0 right-0 text-blue-800 bg-white hover:bg-gray-200 rounded-full'>
                            <FaPlusCircle />
                        </div>
                    </div>

                    <div className='mb-5 flex flex-col justify-center items-center multiple relative'>
                        <div className="sub-multiple absolute right-16 z-50 bg-white w-96 py-3 px-5 rounded-lg shadow-lg opacity-0 invisible">
                            <span className='text-3xl top-10 right-10 text-white absolute'><IoMdArrowDropright /></span>
                            <Source />
                            <Report />
                        </div>
                        <a className='flex justify-center items-center bg-white hover:bg-gray-200 border border-gray-200 w-12 h-12 rounded-full text-lg text-gray-600 ' href='#'>
                            <ImAttachment />
                        </a>
                        <h1 className='text-xs mt-2 font-bold text-gray-500'>Files(1)</h1>
                    </div>

                    <div className='mb-5 flex flex-col justify-center items-center multiple relative'>
                        <div className="sub-multiple absolute right-16 z-50 bg-white w-80 p-5  rounded-lg shadow-lg opacity-0 invisible">
                            <span className='text-3xl top-20 right-10 text-white absolute'> <IoMdArrowDropright /></span>
                            <h1 className='uppercase text-xs text-gray-500 font-bold mb-2'>tools</h1>
                            {this.state.Tools.map(tools => (
                                <Tools {...tools} />
                            ))}
                        </div>
                        <a className='flex justify-center items-center bg-white hover:bg-gray-200 border border-gray-200 w-12 h-12 rounded-full text-lg text-blue-900' href='#'>
                            <SiAdobephotoshop />
                        </a>
                        <h1 className='text-xs mt-2 font-bold text-gray-500'>Tools</h1>
                    </div>

                    <div className='mb-5 flex flex-col justify-center items-center multiple relative'>
                        <div className="sub-multiple absolute top-3 right-16 z-50 bg-white w-36 p-2 text-center rounded-lg shadow-lg opacity-0 invisible">
                            <span className='text-3xl top-0 right-10 text-white absolute'><IoMdArrowDropright /></span>
                            <h1 className='text-xs text-gray-600 font-bold '>Add to Moodboard</h1>
                        </div>
                        <a className='flex justify-center items-center bg-white hover:bg-gray-200 border border-gray-200 w-12 h-12 rounded-full text-lg text-gray-600' href='#'>
                            <AiFillFolderOpen />
                        </a>
                        <h1 className='text-xs mt-2 font-bold text-gray-500'>Save</h1>
                    </div>


                    <div className='mb-5 flex flex-col justify-center items-center multiple relative'>
                        <div className="sub-multiple absolute top-3 right-16 z-50 bg-white w-24 p-2 text-center rounded-lg shadow-lg opacity-0 invisible">
                            <span className='text-3xl top-0 right-10 text-white absolute'> <IoMdArrowDropright /></span>
                            <h1 className='text-xs text-gray-600 font-bold '>Appreciate</h1>
                        </div>
                        <a className='flex justify-center items-center bg-blue-600 w-12 h-12 rounded-full text-lg text-white hover:bg-blue-700' href='#'>
                            <AiFillLike />
                        </a>
                        <h1 className='text-xs mt-2 font-bold text-gray-500'>Appreciate</h1>
                    </div>
                </div>
            </>

        )
    }
}