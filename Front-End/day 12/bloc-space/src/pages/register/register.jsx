export default function Register(){
    return(
        <div className="flex flex-col items-center mt-20">
            <h1 className="mb-4 text-bold text-2xl">register</h1>
            <div className="flex flex-col items-center p-10 border rounded-md">
                <h1 className="mb-9">*Please fill the required form</h1>
                <label>Username</label>
                <input type="text" placeholder="username" className="border border-black rounded-md py-3 px-24 mt-4"/>
                <label className="mt-5">Name</label>
                <input type="text" placeholder="name" className="border border-black rounded-md py-3 px-24 mt-4"/>
                <label className="mt-5">email</label>
                <input type='text' placeholder="email" className="border border-black rounded-md py-3 px-24 mt-4"/>
                <label className="mt-5">password</label>
                <input type="password" placeholder="password" className="border border-black rounded-md py-3 px-24 mt-4"/>
                <div className="flex self-end ">
                    <button className="px-6 py-2 bg-green-500 border border-slate-200 rounded-full mt-7">Register</button>
                </div>
            </div>
        </div>
    )
}