import React from 'react'


export default class Tools extends React.Component {
    render() {
        let { id, title, img } = this.props
        return (
            <>

                <div>
                    <a className='p-2 border flex items-center justify-center rounded-md mb-2 bg-gray-300 hover:bg-gray-400' href='#'>
                        <img src={img} className="w-5 mr-2" />
                        <h1 className='capitalize font-bold'>{title}</h1>
                    </a>
                </div>

            </>
        )
    }
}