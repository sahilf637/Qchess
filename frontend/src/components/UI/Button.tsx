import React from 'react'

type Props = {
    children: React.ReactNode
}

const Button = ({children}: Props) => {
  return (
    <button className='mt-3 p-2 px-4 ml-5 border-2 rounded-md'>{children}</button>
  )
}

export default Button