import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Home(props){
    const [data, setData] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const message = useRef();
    
    useEffect(() => {
        onGetData();
        // onGetUser();
    }, []);
   
    // let token = localStorage.getItem('token');

    let onPost = async() => {

        let post = message.current.value;

        try{
            if(post.length === 0) {toast.error('Please fill the field');} else

            if(post.length >= 120) {toast.error('Message must be less than 120 characters');} 
            else {await axios.post('http://localhost:5000/post', {
                usersId: dataUser.id,
                message: post,
            });
            toast.success('Post success');
            message.current.value = "";
        }

            
            
        } catch (error){
            toast.error(error.message);
        }
    }



    let onGetData = async() => {
        try{
            let response = await axios.get("http://localhost:5000/post");

            setData(response.data);
        }
        catch (error){
            console.log(error);
        }
       
    }

    let onGetUser = async() => {
        try{
            let response = await axios.get("http://localhost:5000/users");

            setDataUser(response.dataUser);
        } catch(error){
            console.log(error);
        }
    }

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
                            <input ref={message} type='text' placeholder="what's up?" className=" border border-slate-500 bg-slate-700 rounded-md px-7 py-3"/>
                        </div>
                        <div className="flex self-end">
                            <button onClick={onPost} className="border border-white rounded-full bg-green-200 px-5 py-3">Post</button>
                            
                        </div>
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
                                        <div className="flex flex-col">
                                            {/* <p className="font-bold text-white">{dataUser[0].username}</p> */}
                                            <p>date</p>
                                        </div>
                                        <div key={index} className='text-md text-white'>{value.message}</div>
                                    </div>
                                    <div className='flex gap-4'>
                                        {/* <button onClick={onEdit}>edit</button> */}
                                        {/* <button onClick={onDelete} >delete</button> */}
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