import React from 'react'

const Hobbie = ({ name, elements }) => {
    return (
        <div>
            <div className="mb-1 flex text-base text-gray-900 dark:text-white">
                <p><label className='font-bold'>{name}</label> : {elements}</p>
            </div>
        </div>
    )
}

export default Hobbie