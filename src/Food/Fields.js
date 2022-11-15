import React from 'react'

export default class Fields extends React.Component {
    render() {
        let{id, title} = this.props
        return (
            <>

                <div>  
                    <a className='p-2 border flex items-center justify-center rounded-md mb-2 bg-gray-300 hover:bg-gray-400' href='#'>
                        <span className='rounded-md cursor-pointer mr-3 text-xl text-blue-900 '></span>
                        <h1 className='capitalize font-bold'>{title}</h1>
                    </a>
                    

                </div>

            </>
        )
    }
}