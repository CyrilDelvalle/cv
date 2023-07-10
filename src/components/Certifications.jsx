import React from 'react'

function Certifications() {
    return (
        <div className="w-full pl-2">
            <h3 className="text-xl mb-4 text-center font-bold dark:text-white">
                CERTIFICATIONS
            </h3>
            <div className='flex'>
                <div className='flex flex-col gap-2 items-center'>
                    <img
                        className="w-16 h-16"
                        src={require("../assets/certif-scrum.png")}
                        alt="profile"
                    />
                    <p className='className="mb-1 text-base font-normal text-gray-500 dark:text-gray-300'>SCRUM</p>
                </div>
            </div>
        </div>
    )
}

export default Certifications