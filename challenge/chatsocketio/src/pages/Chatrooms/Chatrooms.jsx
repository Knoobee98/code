
export default function Chatroom(){
    return(
        <>
        <div className='flex flex-cols justify-start'>
            <div className='flex flex-col'>
                <div className='w-[330px] h-[60px] bg-mainBrown flex justify-center items-center border-r-2'>username - status</div>
                <div className='w-[330px] h-[750px] bg-greylight border-r-2'>list kontak dan grup</div>
            </div>
            <div className='flex flex-col'>
                <div className='w-[1143px] h-[60px] bg-mainBrown flex items-center px-5'>judul grup</div>
                <div className='w-[1143px] h-[750px] border-2'>isi chat</div>
            </div>
        </div>
        </>
    )
}