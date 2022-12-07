/* eslint-disable no-throw-literal */
import "./register.css";
import { useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

let Register = (props) => {
  const [disabledButton, setDisabledButton] = useState(false);
  const [message, setMessage] = useState("");

  const username = useRef();
  const password = useRef();
  const email = useRef();

  let onSubmit = async () => {
    let inputUsername = username.current.value;
    let inputEmail = email.current.value;
    let inputPassword = password.current.value;

    let register = async () => {
      await axios.post("https://my-json-server.typicode.com/Knoobee98/jsonServer-Ecommerce-apps/users", {
        username: inputUsername,
        email: inputEmail,
        password: inputPassword,
      });
    };

    try {
      setDisabledButton(true);
      let checkEmail = await axios.get(
        `https://my-json-server.typicode.com/Knoobee98/jsonServer-Ecommerce-apps/users?email=${inputEmail}`
      );
      let checkPassword = await axios.get(
        `https://my-json-server.typicode.com/Knoobee98/jsonServer-Ecommerce-apps/users?password=${inputPassword}`
      );

      if (
        inputEmail.length === 0 ||
        inputPassword.length === 0 ||
        inputUsername.length === 0
      )
        throw { message: "please fill all the field!" };

      if (inputPassword.length < 8)
        throw { message: "password must be at least 8 characters!" };

      let character = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
      if (!character.test(inputPassword))
        throw { message: "password must contain number!" };

      if (checkEmail.data.length === 0 && checkPassword.data.length === 0) {
        await register();
        username.current.value = "";
        email.current.value = "";
        password.current.value = "";
        toast.success("Register Success!");
        setDisabledButton(false);
        setMessage("");
      } else {
        // eslint-disable-next-line no-throw-literal
        throw { message: "Email or Password already exist!" };
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setDisabledButton(false);
    }
  };

  if (props.isRedirect.redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="flex flex-col items-center py-20">
        <h1 className="my-fs-25 font-bold">Create an account</h1>
        <h1 className="my-fs-15 my-grey mt-5 font-bold">PURWADHIKA® REWARDS</h1>
        <p
          className="my-grey mt-3"
          style={{ maxWidth: "600px", textAlign: "center" }}
        >
          Join Purwadhika Rewards to earn Stars for free food and drinks, any
          way you pay. Get access to mobile ordering, a birthday Reward, and
          moremore.
        </p>
        {/* cards */}
        <div className="cards mt-20 px-20 py-10 w-2/5 rounded-md flex flex-col">
          <p className="font-bold">*Indicates required field</p>
          <h1 className="my-fs-20 mt-5 mb-3 font-bold">Personal Information</h1>
          <input
            ref={username}
            type="text"
            placeholder="*input username"
            className="py-2 px-2 w-100 rounded-md"
            style={{ border: "1px solid grey" }}
          />
          <h1 className="my-fs-20 mt-5 mb-3 font-bold">Account Security</h1>
          <input
            ref={email}
            type="email"
            placeholder="*input email"
            className="py-2 px-2 w-100 rounded-md my-3"
            style={{ border: "1px solid grey" }}
            required
          />
          <input
            ref={password}
            type="password"
            placeholder="*input password"
            className="py-2 px-2 w-100 rounded-md"
            style={{ border: "1px solid grey" }}
            pattern="(?=.*\d).{6,}"
            required
          />
          <p className="text-red-500">{message}</p>
          <button
            disabled={disabledButton}
            onClick={onSubmit}
            className="my-bg-main my-light px-3 py-3 mt-3 rounded-full self-end "
          >
            {disabledButton ? "loading..." : "Register Now"}
          </button>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Register;

//lakukan validasi email dan password( min. 6 karakter, dan includes angka)
//apabila validasi error, tampilka errornya dibawah button (boleh menggunakan toast, alert, dsb)
//disabled button jika input user kosong

//if user input exist, then go to email and password validation
//if email and password true, if password is lomger than 6 and includes number and letter,
//then register email, password, username.
//if email and password false, then alert email and password already exist.
