import React from 'react'

export const Button = ({text, onClick}) => {
  return (
    <button className='bg-black py-1 px-5 mt-3 text-white font-bold text-xl rounded-2xl' onClick={onClick}>{text}</button>
  )
}
