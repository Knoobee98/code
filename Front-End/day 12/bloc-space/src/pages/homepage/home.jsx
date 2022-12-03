import {useRef} from 'react';
import axios from 'axios';

export default function Home(){
    const message = useRef();

    let onPost = async() => {

        let post = message.current.value;

        if(post.data.length === 0){
            await axios.post("http://localhost:5000/posts")
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
                            <p>avatar</p>
                            <input ref={message} type='text' placeholder="what's up?" className=" border border-slate-500 rounded-md px-7 py-3"/>
                        </div>
                        <div className="flex self-end">
                            <button className="border border-white rounded-full bg-green-200 px-5 py-3">Post</button>
                        </div>
                    </div>
                    {/* post */}
                    <div className="flex flex-col border border-slate-600 rounded-md p-10 my-5">
                        <div className="flex gap-2 my-2">
                            <p>avatar</p>
                            <div className="flex flex-col">
                                <p className="font-bold">username</p>
                                <p>date</p>
                            </div>
                            <div>content</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}