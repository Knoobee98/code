
let Cards = () => {
    return(
        <>
        <div className='h-[600px] w-[300px] flex flex-col items-center border border-black p-2 mt-3 mx-3'>
            <div className='h-[200px] w-[200px] flex border border-black'>ImagePreview</div>
            <div className='flex flex-row justify-between gap-2 p-3 mx-3'>
                <div className='h-[90px] w-[90px] border border-black'>photo1</div>
                <div className='h-[90px] w-[90px] border border-black'>photo2</div>
                <div className='h-[90px] w-[90px] border border-black'>photo3</div>
            </div>
            <div className='flex flex-col p-3 '>
                <div className='flex align-start'>
                    <h3>Name</h3>
                </div>
                <div>
                    <h3>Price</h3>
                </div>
                <div>
                    <h3>Stock</h3>
                </div>
            </div>
            <div className='flex self-center'>
                <button className='h-[50px] w-[200px] bg-red-600 border rounded-md'>Delete Products</button>
            </div>
        </div>
        </>
    )
}

export default Cards;