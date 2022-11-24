
let Login = () => {
    return(
        <div class='box-border h-100 w-50 p-25 border-2 border-shadow grid grid-rows-5'>
            <h1 class='flex justify-center font-size-20 px-50'>Login</h1>
            <div class='grid grid-row-3 flex justify-center'>
                <form class='form-horizontal'>
                    <input type='text' placeholder='Username*' class='border-2 border-black rounded-md px-4 py-3' />
                    <br />
                    <input type='password' placeholder='Password*' class='border-2 border-black rounded-md px-4' />
                    <br />
                    <button class='border-2 border-black rounded-full bg-green-500 '>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;   
