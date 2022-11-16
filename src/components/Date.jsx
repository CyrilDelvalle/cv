import React from 'react'

const Date = ({ startDate, endDate }) => {
  return (
    <div className='bg-yellow-400 text-end'>
      <div>{startDate}</div>
      <div>{' - ' + endDate}</div>
    </div>
  )
}

export default Date