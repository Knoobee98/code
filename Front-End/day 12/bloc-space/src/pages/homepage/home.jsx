import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Home(){
    const [data, setData] = useState([]);
    const message = useRef();
    const editedMessage = useState('');

    // useEffect(() => {
    //     onGetData();
    // })

    let onPost = async() => {

        let post = message.current.value;
        
        try{
            await axios.post('http://localhost:5000/post', {
                message: post,
            });
            toast.success('Post success');
            onGetData();
            message.current.value = "";
        } catch (error){
            toast.error(error.message);
        }
    }

    let onEdit = async(id) => {
        let inputEdit = editedMessage.current.value;
        try{
            await axios.patch(`http://localhost:5000/post/${id}`, {
            message: inputEdit,
            })
            toast.success('Edit success');
        } catch(error){
            toast.error('failed to edit');
        }
        // let edit = message.current.value;

        // await axios.patch(`http://localhost:5000/post/${id}`, {
        //     message: edit
        // })
        // toast("Post edited successfully");
        // message.current.value = "";
    }

    let onDelete = async(id) => {
        await axios.delete(`http://localhost:5000/post/${id}`);
        toast("Post deleted successfully");
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
    return(
        <div>
            <div className="flex items-center">
                <div className="basis-1/3 bg-cyan-400 p-10">sidebar</div>
                <div className="basis-2/3 bg-slate-200 border-x-2 border-slate-600 p-10 w-screen">
                    {/* post input */}
                    <div className="flex flex-col border border-slate-600 rounded-md p-10">
                        <div className="flex gap-2 my-2">
                            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            </div>
                            <input ref={message} type='text' placeholder="what's up?" className=" border border-slate-500 rounded-md px-7 py-3"/>
                        </div>
                        <div className="flex self-end">
                            <button onClick={onPost} className="border border-white rounded-full bg-green-200 px-5 py-3">Post</button>
                            
                        </div>
                    </div>
                    {/* post */}
                    {
                        data.map((value, index) => {
                            return(
                                <div className="flex flex-col border border-slate-600 rounded-md p-10 my-5">
                                    <div className="flex gap-2 my-2">
                                        <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                            <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold">username</p>
                                            <p>date</p>
                                        </div>
                                        <div key={index}>{value.message}</div>
                                    </div>
                                    <div className='flex gap-4'>
                                        <button onClick={onEdit}>edit</button>
                                        <button onDelete={onDelete} >delete</button>
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