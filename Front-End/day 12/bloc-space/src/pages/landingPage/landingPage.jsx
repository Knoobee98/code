import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Login(){
    const username = useRef();
    const password = useRef();

    let navigate = useNavigate();

    let onLogin = async() => {
        let inputUsername = username.current.value;
        let inputPassword = password.current.value;

        try{
            let response = await axios.get(`http://localhost:5000/users?username=${inputUsername}&password=${inputPassword}`);

            if(response.data.length === 0){
                toast.error('Username or password is incorrect');
            } else {
                toast.success('Login success');
                localStorage.setItem('token', response.data[0].id);
                //setTimeout to 2000ms
                navigate('/home');
            }
        } catch (error) {
            toast(error.message);
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