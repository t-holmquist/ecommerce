import React from 'react'

const Button = ({title, classname}) => {
  return (
    <button className={`${classname} font-source-sans cursor-pointer text-lg py-1 px-2 text-white bg-primary w-fit rounded-md`}>{title}</button>
  )
}

export default Button