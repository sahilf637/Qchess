import React from 'react'
import { forwardRef } from 'react'

type Props = {
    label: string,
    forLabel: string
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, forLabel }: Props, ref) => {
  return (
    <div className='p-5  md: text-center'>
        <label htmlFor={forLabel} className='p-3 pr-5'>{label}</label>
        <input type="text" className='rounded-md p-0.5 font-normal text-center focus:outline-none' ref={ref} />
    </div>
  )
})

export default Input