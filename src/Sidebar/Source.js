import React from 'react';
import { FiLink } from 'react-icons/fi';


class Source extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h1 className='uppercase text-xs text-gray-500 font-bold mb-2'>SOURCE FILES</h1>
                    <a className='p-2 border border-gray-300 flex items-center text-gray-500 rounded-md mb-2' href='#'>
                        <div className='bg-gray-100 rounded-md text-center p-2 cursor-pointer mr-3'>
                            <span><FiLink /></span>
                        </div>
                        <div className='capitalize text-xs'>
                            <h1 className='text-gray-700 font-bold'>my food</h1>
                            <a href='https://yellowimages.com/stock/my-food-ui-kit-78385' className=''>personal license - https://yellowimages.com/stoc...</a>
                        </div>
                    </a>
                </div>
            </>
        )
    }
}


export default Source;
