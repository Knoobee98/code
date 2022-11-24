let Login = () => {
  return (
    <div class="min-h-screen bg-gray-100 flex items-center">
      <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <h1 class="font-bold text-black">Login or create an account</h1>
        <div class="py-12 p-10 bg-white rounded-xl">
          <div class="mb-6">
            <input
              type="text"
              class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-green-400 rounded"
              placeholder="Username or Email"
            />
          </div>
          <div>
            <input
              type="password"
              class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-green-400 rounded"
              placeholder="Password"
            />
          </div>
          <input
            type="checkbox"
            class="appearance-none checked:bg-blue-500 ..."
          />
          <label class="text-sm text-gray-600"> Always Signed in</label>
          <br/>
          <span class="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">
            Forgot Password?
          </span>
          <button class="w-full mt-6 text-black-50 font-bold bg-green-600 py-3 rounded-full hover:bg-green-500 transition duration-300 ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
