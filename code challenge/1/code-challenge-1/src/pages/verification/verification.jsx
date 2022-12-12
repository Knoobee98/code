import { useRef, useState, useEffect } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import {Navigate} from 'react-router-dom';

export default function Verification(){
    const [uniqueCode, setUniqueCode] = useState(0);
    let code = useRef();

    useEffect(() => {
        verificationCode()
    }, [])
    
    let verificationCode = () => {
        setUniqueCode(Math.floor(Math.random() * 999999))
    }

    let onSubmit = async() => {
        let inputCode = code.current.value;

        try{
            if(parseInt(inputCode) === uniqueCode){
                await axios.patch("http://localhost:5000/users", {
                    status: true
                })
                toast.success("verification success")
                return <Navigate to="/login" />
            }
        } catch(error){
            toast.error("verification failed")
            verificationCode()
        }
        console.log('submit')
    }
    return(
        <div className="verification bg-cyan-200 w-auto h-auto p-48 flex justify-center">
            {/* card verification */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col gap-4 items-center">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Verification</h5>
                    <p>
                    {uniqueCode}
                    </p>
                    <input ref={code} type="text" placeholder="your code here" />
                    <button onClick={onSubmit}>Submit</button>
                </div>
                
            </div>
        </div>
    )
}