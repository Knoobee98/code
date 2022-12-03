/* eslint-disable no-throw-literal */
import {useRef, useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'

export default function Register(){
    const [message, setMessage] = useState('');

    const username = useRef();
    const email = useRef();
    const name = useRef();
    const password = useRef();

    let onRegister = async() => {
        let inputUsername = username.current.value;
        let inputEmail = email.current.value;
        let inputName = name.current.value;
        let inputPassword = password.current.value;

        let register = async() => {
            await axios.post('http://localhost:5000/users', {

                username: inputUsername,
                name: inputName,
                email: inputEmail,
                password: inputPassword

            });

        }

        try{
            let checkEmail = await axios.get(`http://localhost:5000/users?email=${inputEmail}`);
            let checkPassword = await axios.get(`http://localhost:5000/users?password=${inputPassword}`);

            if(
                inputEmail.length === 0 ||
                inputPassword.length === 0 ||
                inputUsername.length === 0 ||
                inputName.length === 0
            ) throw { message: "Please fill all the fields"}
            
            if(inputPassword.length < 8) throw { message: "Password must be at least 8 characters"}

            let character = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
            if (!character.test(inputPassword))
              throw { message: "password must contain number!" };
            
            if(checkEmail.data.length === 0 && checkPassword.data.length === 0){
                await register();
                toast.success('Register success');
                username.current.value = "";
                name.current.value = "";
                email.current.value = "";
                password.current.value = "";
            } else {
                toast.error('Email or password already exist');
            }
        } catch (error){
            setMessage(error.message);
        }
        
    }
 
    return(
        <div className="flex flex-col items-center mt-20">
            <h1 className="mb-4 text-bold text-2xl">register</h1>
            <div className="flex flex-col p-10 border rounded-md">
                <h1 className="mb-9">*Please fill the required form</h1>
                <label>Username</label>
                <input ref={username} type="text" placeholder="username" className="border border-black rounded-md py-3 px-24 mt-4"/>
                <label className="mt-5">Name</label>
                <input ref={name} type="text" placeholder="name" className="border border-black rounded-md py-3 px-24 mt-4"/>
                <label className="mt-5">email</label>
                <input ref={email} type='text' placeholder="email" className="border border-black rounded-md py-3 px-24 mt-4"/>
                <label className="mt-5">password</label>
                <input ref={password} type="password" placeholder="password" className="border border-black rounded-md py-3 px-24 mt-4"/>
                <div className="flex self-end ">
                    <button onClick={onRegister} className="px-6 py-2 bg-green-500 border border-slate-200 rounded-full mt-7">Register</button>
                </div>
            </div>
        </div>
    )
}