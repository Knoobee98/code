export default function Login (){
    return(
        <>
            {/* Body */}
            <div className='grid place-content-center' style={{ height: "100vh" }}>
                {/* Card Login */}
                <div className='rounded-3xl bg-white border border-slate-200 shadow-lg' style={{ width: "400px" }}>
                    <div className='grid place-content-center'>
                        <img src="https://img.freepik.com/free-vector/communication-logo-design-template_23-2149919615.jpg?w=826&t=st=1675002303~exp=1675002903~hmac=c103768ed481fcbb6be0a1fc041a2b9058b01c2a2e6750077bbbd2174d824be7" style={{ width: "200px" }} className="" />
                    </div>
                    {/* layer 2 */}
                    <div className='rounded-3xl bg-gray-300 px-5 py-7'>
                        <p className='mb-2 font-semibold'>Username</p>
                        <input type="text" placeholder="Username" className='w-full rounded-full py-1 px-3' />
                        <p className='mb-2 mt-4 font-semibold'>Group Name</p>
                        <input type="text" placeholder="Group Name" className='w-full rounded-full py-1 px-3' />
                        <button className='flex items-center font-semibold bg-pink-400 px-4 py-1 rounded-full mt-5'>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}