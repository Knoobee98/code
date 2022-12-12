import { useRef, useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const [redirect, setRedirect] = useState(false);
  let username = useRef();
  let email = useRef();
  let password = useRef();

  let onRegister = async () => {
    let inputUser = username.current.value;
    let inputEmail = email.current.value;
    let inputPassword = password.current.value;

    let dataUsers = await axios.get(
      `http://localhost:5000/users?username=${inputUser}`
    );
    let dataPassword = await axios.get(
      `http://localhost:5000/users?password=${inputPassword}`
    );

    try {
      if (
        inputUser.length === "" ||
        inputEmail === "" ||
        inputPassword === ""
      ) {
        toast.error("please fill the form correctly");
      }

      if (dataUsers.data.length === 0 && dataPassword.data.length === 0) {
        await axios.post("http://localhost:5000/users", {
          username: inputUser,
          email: inputEmail,
          password: inputPassword,
          status: false,
        });
        toast.success("register success");

        username.current.value = "";
        email.current.value = "";
        password.current.value = "";
        localStorage.setItem('token', await axios.get(`http://localhost:5000/users?username=${inputUser}`))
        setRedirect(true);
      }
    } catch (error) {
      toast.error("register failed");
    }
  };

  if (redirect === true) {
    return <Navigate to="/verification" />;
  }

  return (
    <div className="register bg-cyan-200 w-auto h-auto p-48 flex justify-center Items-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Register
            </h5>
          <div>
            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</p>
            <input
              ref={username}
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              ref={email}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              ref={password}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <Link
              to="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </Link>
          </div>
          <button
            onClick={onRegister}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?{" "}
            <Link
              to="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
