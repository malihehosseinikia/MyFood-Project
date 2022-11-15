import React from 'react'
import { AiOutlineWarning } from 'react-icons/ai'


class Source extends React.Component {
    render() {
        return (
            <>
                <div className='text-gray-500 flex items-center'>
                    <span><AiOutlineWarning /></span>
                    <h1 className='text-xs ml-1'>Report</h1>
                </div>
            </>
        )
    }
}


export default Source;
