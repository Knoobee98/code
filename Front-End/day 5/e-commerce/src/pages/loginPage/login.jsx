
import {useRef} from 'react';
import axios from 'axios';


let Login = () => {
  const username = useRef();
  const password = useRef();

  let onLogin = async() => {
    const inputUsername = username.current.value;
    const inputPassword = password.current.value;

    

    try {
      let checkUsername = await axios.get(
        `http://localhost:5000/users?username=${inputUsername}`
      )
  
      let checkPassword = await axios.get(
        `http://localhost:5000/users?password=${inputPassword}`
      )

      if(checkUsername.data.length === 0 && checkPassword.data.length === 0){
        alert("Username and Password not found! please register first!")
        //link to homepage
      } else {
        alert("Login Success!")
        // link to homepage
      }
    } catch (error) {
      console.log(error.messages);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center">
      <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <h1 className="font-bold text-black">Login or create an account</h1>
        <div className="py-12 p-10 bg-white rounded-xl">
          <div className="mb-6">
            <input
              ref={username}
              type="text"
              className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-green-400 rounded"
              placeholder="Username or Email"
            />
          </div>
          <div>
            <input
              ref={password}
              type="password"
              className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-green-400 rounded"
              placeholder="Password"
            />
          </div>
          <input
            type="checkbox"
            className="appearance-none checked:bg-blue-500 ..."
          />
          <label className="text-sm text-gray-600"> Always Signed in</label>
          <br/>
          <span className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">
            Forgot Password?
          </span>
          <button 
          className="w-full mt-6 text-black-50 font-bold bg-green-600 py-3 rounded-full hover:bg-green-500 transition duration-300 "
          onClick={onLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
