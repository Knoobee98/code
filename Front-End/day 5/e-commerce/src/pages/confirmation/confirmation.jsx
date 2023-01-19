import axios from 'axios'
import { useEffect } from 'react'

let Confirm = () => {

    const confirm = async() => {

        await axios.patch('http://localhost:5002/users/activation/:id')

        alert('account activated')

    }

    useEffect(() => {
        confirm()
    }, [])

    return (
        <>
        <div className='container flex justify-center align-center items-center'>
            <div className='flex flex-col justify-center items-center h-[500px] w-[600px] border border-black'>
                <div className='my-5'>
                    <h1 className='font-bold text-lg'>Confirmation Account</h1>
                </div>
                <div className='my-4'>
                    <h2 className='text-md'>Account Activated</h2>
                </div>
                {/* <div>
                    <h2 className='text-md my-4'>enter your verification here:</h2>
                </div>
                <div>
                    <input type='number'className='w-[300px] border border-slate-300 rounded-md' />
                </div>
                <div>
                    <button className='h-[70px] w-[100px] border rounded-md bg-green-400 my-5'>Confirm</button>
                </div>
                <div>
                    <h2 className='text-md my-3'>If you didn't get the code,<br /> resend codes here</h2>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Confirm