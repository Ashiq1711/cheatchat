import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Modal from './Components/Modal/Modal';
function Login() {
  let [showModal,setShowModal]=useState(false)
  let [email,setEmail]=useState();
  let [password,setPassword]=useState();
  let [emailerr,setEmailerr]=useState();
  let [passworderr,setPassworderr]=useState();
  const [passwordShow, setPasswordShow] = useState(false);

let handle_email=(e)=>{
  setEmail(e.target.value)
  setEmailerr("");
}
let handle_password=(e)=>{
  setPassword(e.target.value)
 setPassworderr("");
}
let handle_log_in=()=>{
  if(!email){
    setEmailerr('Email is required !')
  }else if(! /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
    setEmailerr("This is not a email address !")
  }
  if(!password){
    setPassworderr("Password is required !")
  }else if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)
  ){
    setPassworderr('Password must be 8-16 characters long, one digit from 1 to 9, one lowercase letter, one uppercase letter,')
  } 
}
  return (
    <div className=' flex'>
    <div className=' w-2/5'>
      <div className=' mt-[60px] p-16'>
        <h1 className=' font-inter font-bold text-[30px] text-[#32375C]'>Welcome To Chatt.</h1>
        <h2 className=' font-inter font-bold text-[24px] text-[#32375C]'>Log In</h2>
      
        <div className='h-[100px]'>
          <p className=' font-inter font-semibold text-[16px] mt-[16px] text-[#222222]'>Email</p>
          <input onChange={handle_email} className=' w-[492px] h-[48px] border-[#D3D3D3] border-[1px] rounded-[5px] px-[16px] mt-[16px]'  type="email" placeholder='Enter your mail'/>
        {emailerr &&
        <p className=' text-red-500'>{emailerr}</p>
        }
        </div>
        <div className='w-[492px] h-[120px] relative' >
          <p className=' font-inter font-semibold text-[16px] mt-[16px] 7A7A7A'>Password</p>
          <input onChange={handle_password} className='  w-[492px] h-[48px] border-[#D3D3D3] border-[1px] rounded-[5px] px-[16px] mt-[16px]' type={passwordShow ? "text" : "password"}
              value={password} placeholder='Password'/>
              {passwordShow ? 
              <FaRegEye onClick={()=>setPasswordShow(false)} className=' absolute top-12 right-4 text-[25px]'/>
              :
          <FaRegEyeSlash onClick={()=>setPasswordShow(true)} className=' absolute top-12 right-4 text-[25px]'/>
            }
          {passworderr &&
        <p className=' text-red-500'>{passworderr}</p>
        }
        </div>
        <div className=' flex gap-2 mt-[18px]'>
        <input onChange={handle_password} className=' w-[24px] h-[24px]' type="checkbox" name="Remember Me" id=""  />
        <p className=' text-[#4E4E4E] text-[16px] font-inter font-medium'>Remember Me</p>
        <Link onClick={()=>setShowModal(true)} className='text-[#32375C] ml-[200px] text-[16px] font-inter font-medium'>Forgot Password?</Link>
        {showModal && 
        <Modal onClose={()=>setShowModal(false)}/>
        }
        </div>
        <button onClick={handle_log_in} className='mt-[16px] bg-[#32375C]  w-[492px] h-[48px] text-white rounded-md'>Log In</button>
       <p className='font-inter font-normal text-[16px] mt-[16px] text-[#7A7A7A]'>Dont’t have an account? <Link to='/' className='text-[#222222] font-inter font-semibold'>Sign Up</Link> </p>
      </div>
    </div>
    <div className=' w-3/5 '>
      <img  className="w-full h-screen object-cover" src="public/images/Group 122.png" alt="" />
    </div>
   </div>
  )
}

export default Login