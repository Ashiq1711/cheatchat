import React, { useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
function Modal({ onClose }) {
    const auth = getAuth();

    const modalRef = useRef();
    let closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose()
        }
    }
    let [email,setEmail]=useState();
    let [emailerr,setEmailerr]=useState();
let handle_reset_password=(e)=>{
setEmail(e.target.value)
setEmailerr();
}
let handle_reset_button=()=>{
    if(!email){
        setEmailerr('Email is required !')
    }else if(! /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        setEmailerr("This is not a email address !")
      }
      sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }).then(()=>{
    alert('Check your email')
  })

}
    return (
        <div ref={modalRef} onClick={closeModal} className=' flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
            <div className=' flex flex-col '>
                <IoMdClose onClick={onClose} className=' text-[35px] text-white hover:bg-red-600 place-self-end border rounded-full ' />
                <div className=' bg-indigo-600 px-20 py-10 rounded-xl'>
                    <h1 className=' font-inter font-medium text-white py-3'>Reset Password</h1>
                    <div className='mb-4'>

                    <input onChange={handle_reset_password} className=' rounded-md w-[280px] h-[35px] px-2' type="email" placeholder='Enter your email' />
                    {emailerr && 
                    <p className=' text-red-400'>{emailerr}</p>
                    }
                    </div>
                    <div>

                        <button onClick={handle_reset_button} className=' bg-white px-8 py-2 mt-6 text-indigo-600 font-inter font-bold  rounded-lg'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal