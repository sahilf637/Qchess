import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/UI/Button'

const SignIn = () => {
    const navigate = useNavigate()
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const onFormSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        const Email = email.current?.value
        const Password = email.current?.value

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/my/user/signIn`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({ Email, Password })
            })

            const data = await response.json()

            console.log(data)

            navigate("/")
        } catch (error) {
            
        }
    }
  return (
    <div className='flex items-center min-h-screen font-serif font-bold'>
        <div className='w-2/3 h-auto bg-purple-400 mx-auto rounded-lg'>
            <form onSubmit={onFormSubmitHandler} className='p-10 flex flex-wrap flex-col items-center'>
                <h1 className='text-2xl'>SignIn</h1>
                <Input label="Email" forLabel='Email' ref={email}/>
                <Input label="Password" forLabel='Password' ref={password}/>
                <div className='w-full text-center'>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn