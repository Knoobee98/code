/* eslint-disable no-throw-literal */
import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Home(props){
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const message = useRef();
    let navigate = useNavigate();
    

    let onPost = async() => {

        let post = message.current.value;

        try{
            if(post.length === 0) {throw {message: 'post tidak boleh kosong!'};} else

            if(post.length >= 120) {throw {message: 'Message must be less than 120 characters'};} 
            else {await axios.post('http://localhost:5000/post', {
                usersId: parseInt(localStorage.getItem('token')),
                message: post,
            });
            onGetData();
            setError('')
            toast.success('Post success');
            message.current.value = "";
        }
        } catch (error){
            setError(error.message);
        }
    }



    let onGetData = async() => {
        try{
            let response = await axios.get("http://localhost:5000/post");
            let getUsers = await axios.get("http://localhost:5000/users");

            let newData = [];
            response = response.data;
            getUsers = getUsers.data;
            for(let i = 0; i < response.length; i++){
                for(let j = 0; j < getUsers.length; j++){
                    if(response[i].usersId === getUsers[j].id){
                        response[i].username = getUsers[j].email;
                        newData.push(response[i]);
                        break;
                    }
                }
            }
            
            setData(newData);
        }
        catch (error){
            console.log(error);
        }
        
    }

    useEffect(() => {
        props.funcCheck.checkIsLogin()
        onGetData();
    }, []);
    
    let onDelete = async(id) => {
        try{
            Swal.fire({
                title: 'Do you want to delete?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Delete',
                denyButtonText: `Don't Delete`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/post/${id}`)
                  Swal.fire('Saved!', '', 'success')
                  onGetData();
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
              })
        } catch(error){
            console.log(error);
        }
    }


    if(props.keeplogin === false) return navigate('/');
    return(
        <div className='bg-slate-700 h-auto'>
            <div className="flex items-center">
                <div className="basis-1/3 bg-cyan-400 p-10">sidebar</div>
                <div className="basis-2/3 border-x-2 border-white p-10 h-screen">
                    {/* post input */}
                    <div className="flex flex-col border border-white rounded-md p-10">
                        <div className="flex gap-2 my-2">
                            {/* <h1>{props.data.username}</h1> */}
                            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            </div>
                            <textarea ref={message}  placeholder="what's up?" className=" border border-slate-500 bg-slate-700 rounded-md px-7 py-3"/>
                        </div>
                        <div className="flex self-end">
                            <button onClick={onPost} className="border border-white rounded-full bg-green-200 px-5 py-3">Post</button>
                        </div>
                        <span>{error}</span>
                    </div>
                    {/* post */}
                    {
                        data.map((value, index) => {
                            return(
                                <div className="flex flex-col border border-white rounded-md p-10 my-5">
                                    <div className="flex gap-2 my-2">
                                        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                            <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                        </div>
                                        <div className="flex flex-col"><p className="font-bold text-white">{value.username}</p>
                                            
                                            <p>date</p>
                                        </div>
                                        <div key={index} className='text-md text-white'>{value.message}</div>
                                    </div>
                                    <div className='flex gap-4'>
                                        {/* <button onClick={onEdit}>edit</button> */}
                                        {
                                            value.usersId === parseInt(localStorage.getItem('token')) ? <button onClick={() => onDelete(value.id)} className='border border-white rounded-full bg-red-200 px-5 py-3'>delete</button> : ''
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}