import React from 'react';

export default class UserComment extends React.Component {
    render() {
        let {id, name, img, comment, days} = this.props
        return (
            <div className='flex items-center px-8 mb-10'>

                <div className='flex justify-center items-center mr-2'>
                    <img src={img} className="w-12 h-12 rounded-full" />
                </div>

                <ul className='capitalize text-sm'>
                    <li><a href='#' className="font-bold">{name}</a><span className='text-xs lowercase text-gray-500'> . {days} days ago</span></li>
                    <li>{comment}</li>
                </ul>

            </div>
        )
    }
}
