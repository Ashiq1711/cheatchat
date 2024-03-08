import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
  let navigate=useNavigate()
  const auth = getAuth();
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [nameerr, setNameerr] = useState();
  let [emailerr, setEmailerr] = useState();
  let [passworderr, setPassworderr] = useState();
  const [passwordShow, setPasswordShow] = useState(false);
  let handle_name = (e) => {
    setName(e.target.value);
    setNameerr("");
  };
  let handle_email = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handle_password = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };
  let handle_sign_up = () => {
    if (!name) {
      setNameerr("Name is required !");
    }
    if (!email) {
      setEmailerr("Email is required !");
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailerr("This is not a email address !");
    }
    if (!password) {
      setPassworderr("Password is required !");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
        password
      )
    ) {
      setPassworderr(
        "Password must be 8-16 characters long, one digit from 1 to 9, one lowercase letter, one uppercase letter,"
      );
    }
    if (
      email &&
      password &&
      name &&
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
        password
      )
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          sendEmailVerification(auth.currentUser)
  .then(() => {
    toast("Sign up successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  });
          
        })
        .then(() => { 
          setTimeout(() => {
            navigate('/login')
            
          }, 3000);
        })
        .catch((error) => {
          if (error.code) {
            alert("auth/email-already-in-use");
          }
        });
    }
  };
  return (
    <div className=" flex">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className=" w-2/5">
        <div className=" mt-[60px] p-16">
          <h1 className=" font-inter font-bold text-[30px] text-[#32375C]">
            Welcome To Chatt.
          </h1>
          <h2 className=" font-inter font-bold text-[24px] text-[#32375C]">
            Sign Up
          </h2>
          <div className="h-[100px]">
            <p className=" font-inter font-semibold text-[16px] mt-[16px] text-[#222222]">
              Full Name
            </p>
            <input
              onChange={handle_name}
              className=" w-[492px] h-[48px] border-[#D3D3D3] border-[1px] rounded-[5px] px-[16px] mt-[16px]"
              type="text"
              placeholder="Name here"
            />
            {nameerr && <p className=" text-red-500 font-inter">{nameerr}</p>}
          </div>
          <div className="h-[100px]">
            <p className=" font-inter font-semibold text-[16px] mt-[16px] text-[#222222]">
              Email
            </p>
            <input
              onChange={handle_email}
              className=" w-[492px] h-[48px] border-[#D3D3D3] border-[1px] rounded-[5px] px-[16px] mt-[16px]"
              type="email"
              placeholder="Enter your mail"
            />
            {emailerr && <p className=" text-red-500 font-inter">{emailerr}</p>}
          </div>
          <div className="w-[492px] h-[120px] relative">
            <p className=" font-inter font-semibold text-[16px] mt-[16px] 7A7A7A">
              Password
            </p>
            <input
              onChange={handle_password}
              className="  w-[492px] h-[48px] border-[#D3D3D3] border-[1px] rounded-[5px] px-[16px] mt-[16px]"
              type={passwordShow ? "text" : "password"}
              placeholder="Password"
            />
            {passwordShow ? (
              <FaRegEye
                onClick={() => setPasswordShow(false)}
                className=" absolute top-12 right-4 text-[25px]"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setPasswordShow(true)}
                className=" absolute top-12 right-4 text-[25px]"
              />
            )}
            {passworderr && (
              <p className=" text-red-500 font-inter">{passworderr}</p>
            )}
          </div>
          <div className=" flex gap-2 mt-[18px]">
            <input
              className=" w-[24px] h-[24px]"
              type="checkbox"
              name="Remember Me"
              id=""
            />
            <p className=" text-[#4E4E4E] text-[16px] font-inter font-medium">
              Remember Me
            </p>
          </div>
          <button
            onClick={handle_sign_up}
            className="mt-[16px] bg-[#32375C]  w-[492px] h-[48px] text-white rounded-md"
          >
            Sign Up
          </button>
          <p className="font-inter font-normal text-[16px] mt-[16px] text-[#7A7A7A]">
            Have an account?{" "}
            <Link
              to="/login"
              className="text-[#222222] font-inter font-semibold"
            >
              Sign in
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className=" w-3/5 ">
        <img
          className="w-full h-screen object-cover"
          src="public/images/Group 122.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Signup;
