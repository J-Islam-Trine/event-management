import {  useSignIn } from "@clerk/clerk-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {MessageContext} from '../context/messageContext'

export default function SigninPage()
{
    const { isLoaded, setActive, signIn } = useSignIn();
    
    const {messageData, setMessageData, messagePrinter} = useContext(MessageContext)
    const navigate = useNavigate();

   async function handleSignIn(event)
    {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const emailAddress = formData.get('email')
            const password = formData.get('password')



            try {
                const result = await signIn.create({
                  identifier: emailAddress,
                  password,
                });
           
                if (result.status === "complete") {
                  console.log(result);
                  await setActive({ session: result.createdSessionId });
                  navigate("/dashboard")
                }
                else {
                  /*Investigate why the login hasn't completed */
                  console.log(result);
                }
           
              } catch (err) {
                console.error("error", err.errors[0].message)
                setMessageData(err.errors[0].message)
                setTimeout(()=> {
                  setMessageData(null)
                }, 5000)
              }
    }



    return(
        <div className="w-full px-16 bg-primary">
            <div className="w-full md:w-8/12 lg:w-8/12 lg:border-2 md:border-2 border-black mx-auto px-4 md:px-16 lg:px-16 py-8 bg-primary">
               <form className="" onSubmit={handleSignIn}>
               <label className="form-control w-full max-w-xs">
               <div className="label">
    <span className="label-text">Write your Email</span>
  </div>
  <input type="email" name="email" placeholder="your email" className="input input-bordered rounded-none w-full bg-transparent border-3 border-black placeholder:text-black placeholder:text-xl" />

                </label>
                <label className="form-control w-full max-w-xs">
               <div className="label">
    <span  className="label-text">Your password</span>
  </div>
  <input type="password" name="password" placeholder="your password" className="input input-bordered rounded-none w-full bg-transparent border-3 border-black placeholder:text-black placeholder:text-xl"/>

                </label>   
                <label className="form-control w-full max-w-xs py-4">
                <button className="btn btn-outline">Sign In</button>

                </label>       
                {
                  messageData &&
                  <p className="font-semibold">{messageData}</p>
                }

                </form>
        </div>
        </div>
    )
}