import React from 'react'
import Title from './Title'
import Skill from './Skill'

const Skills = () => {
    return (
        <div className='bg-red-700'>
            <Title title="COMPETENCES TECHNIQUES" />
            <table className="mt-2">
                <tbody>
                    <Skill />
                </tbody>
            </table>
        </div>
    )
}

export default Skills