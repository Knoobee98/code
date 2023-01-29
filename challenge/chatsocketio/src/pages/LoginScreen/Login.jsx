
export default function Login(){
    return(
        <div className='flex justify-center align-center'>
            <div className='flex flex-col items-center justify-center bg-greylight w-[410px] h-[514px] rounded-[50px] m-10 gap-4'>
                <h2 className='mb-5 text-2xl font-bold'>ChatSocket App v1</h2>
                <label>Username</label>
                <input type='text' className='w-[226px] h-[48px] rounded-full border-2 text-center text-lg' />
                <label>Group Name</label>
                <input type='text' className='w-[226px] h-[48px] rounded-full border-2 text-center text-lg' />
                <button className='w-[226px] h-[48px] rounded-full bg-greenbutton mt-7 hover:border-2'>Join</button>
            </div>
        </div>
    )
}