import "./register.css";
import { useRef, useState } from "react";
import axios from "axios";

let Register = () => {
  const [disabledButton, setDisabledButton] = useState(false);

  const username = useRef();
  const password = useRef();
  const email = useRef();

  let onSubmit = async () => {
    let inputUsername = username.current.value;
    let inputEmail = email.current.value;
    let inputPassword = password.current.value;

    let register = async () => {
      await axios.post("http://localhost:5000/users", {
        username: inputUsername,
        email: inputEmail,
        password: inputPassword,
      });
    };

    try {
      setDisabledButton(true);
      let checkEmail = await axios.get(
        `http://localhost:5000/users?email=${inputEmail}`
      );
      let checkPassword = await axios.get(
        `http://localhost:5000/users?password=${inputPassword}`
      );

      if (!inputUsername && !inputEmail && !inputPassword) {
        alert("Please fill all the fields");
        setDisabledButton(false);
      } else if (
        inputPassword.length < 6 &&
        inputPassword.data.value.match(/[a-z]/g) &&
        inputPassword.data.value.match(/[A-Z]/g) &&
        inputPassword.data.value.match(/[0-9]/g)
      ) {
        alert(
          "Password must be at least 6 characters long and must contain at least one uppercase letter, one lowercase letter, and one number"
        );
        setDisabledButton(false);
      } else if (checkEmail.data.length > 0 && checkPassword.data.length > 0) {
        alert("Email/password already exists");
        setDisabledButton(false);
      } else {
        await register();
        alert("Registration successful");
        setDisabledButton(false);
      }
    } catch (error) {
      throw error.message;
    } finally {
      setDisabledButton(false);
    }
  };
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
          />
          <input
            ref={password}
            type="password"
            placeholder="*input password"
            className="py-2 px-2 w-100 rounded-md"
            style={{ border: "1px solid grey" }}
            pattern="(?=.*\d).{6,}"
            title="Must contain at least one number and at least 6 or more characters"
          />
          {onSubmit.error && onSubmit.success}
          <button
            disabled={disabledButton}
            onClick={onSubmit}
            className="my-bg-main my-light px-3 py-3 mt-3 rounded-full self-end "
          >
            {disabledButton ? "loading..." : "Register Now"}
          </button>
        </div>
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
