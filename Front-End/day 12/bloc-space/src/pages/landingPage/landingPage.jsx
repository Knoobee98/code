import {useRef} from 'react';
import {Navigate} from 'react-router-dom';
import axios from 'axios';


export default function Login(){
    const username = useRef();
    const password = useRef();

    let onLogin = async() => {
        let inputUsername = username.current.value;
        let inputPassword = password.current.value;

        let response = await axios.get(`http:/localhost:5000/users?username=${inputUsername}&password=${inputPassword}`);

        if(response.data.length === 0){
            alert('user not found')
        } else {
            alert('login success');
            return <Navigate to="/home" />
        }
    }
    return(
        <>
        <div className="flex flex-col items-center m-24 border rounded-md">
            <h1 className="flex justify-center mt-4 text-xl text-bold">Sign In</h1>
            <div className="flex flex-col items-center p-4">
                <p className="mt-4">email/username</p>
                <input ref={username} type='text' placeholder="email/username" className="border border-black rounded-md py-3 px-24 mt-4"/>
                <p className="mt-4">Password</p>
                <input ref={password} type='password' placeholder="password" className="border border-black rounded-md py-3 px-24 mt-4"/>
                <div>
                    <button onClick={onLogin} className="px-6 py-2 bg-green-500 border border-slate-200 rounded-full mt-7">Login</button>
                </div>
                
            </div>
        </div>
        </>
    )
}