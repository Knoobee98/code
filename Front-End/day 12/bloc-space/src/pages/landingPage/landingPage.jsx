import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login(props){
    const username = useRef();
    const password = useRef();

    let navigate = useNavigate();

    

    if(props.isRedirect.redirect){
        navigate('/home');
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
                    <button onClick={() => props.funcLogin.onLogin(username.current.value, password.current.value)} className="px-6 py-2 bg-green-500 border border-slate-200 rounded-full mt-7">Login</button>
                </div>
                
            </div>
        </div>
        </>
    )
}