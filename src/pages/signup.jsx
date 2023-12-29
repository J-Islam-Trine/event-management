import { useSignUp } from "@clerk/clerk-react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MessageContext } from "../context/messageContext";

export default function SignupPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [validity, setValidity]= useState({length: false, capitalLetter: false, specialChar: false})
  const contextValue = useContext(MessageContext);
  const navigate = useNavigate();

  async function handleSignUp(event) {
        const formData = new FormData(event.currentTarget)
        
        const emailAddress = formData.get('email');
        const password = formData.get('password')
    
    event.preventDefault();
    if (!isLoaded) {
      return;
    }
 
    // Start the sign-up process using the email and password provided
    try {
     const signUpResponse = await signUp.create({
        emailAddress,
        password,
      });
        console.log(signUpResponse);
        if (signUpResponse.status === "complete") {
        await setActive({ session: signUpResponse.createdSessionId })
        navigate('/dashboard');
      }
      
    } catch (err) {
      // This can return an array of errors.
      // See https://clerk.com/docs/custom-flows/error-handling to learn about error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }

  function handlePasswordValidation(event)
  {
    const currentValue = event.target.value;
    
    const validationFlags = {
      length: false, 
      capitalLetter: false, 
      specialChar: false
    }

    if (currentValue.length >= 8)
    {
      validationFlags.length = true;
    }
    else if (currentValue.length < 8)
    {
      validationFlags.length = false
    }

    if (/[A-Z]/.test(currentValue))
    {
        validationFlags.capitalLetter = true
    }
    else if (!/[A-Z]/.test(currentValue))
    {
      validationFlags.capitalLetter = false
    }

    if (/([~`!@#$%^&*()_+\-=;':"])/.test(currentValue))
    {
      validationFlags.specialChar = true
    }
    else if (!/([~`!@#$%^&*()_+\-=;':"])/.test(currentValue))
    {
      validationFlags.specialChar = false
    }


    setValidity(validationFlags)

    




   


  }

  return (
    <div className="w-full px-16 bg-primary">
      
      <div className="w-full md:w-8/12 lg:w-8/12 lg:border-2 md:border-2 border-black mx-auto px-4 md:px-16 lg:px-16 py-8 bg-primary">
        <form className="" onSubmit={handleSignUp}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Write your Email</span>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered rounded-none w-full bg-transparent border-3 border-black placeholder:text-black placeholder:text-xl"
            />
          </label>
          {console.log(contextValue)}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Give a password</span>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className="input input-bordered rounded-none w-full bg-transparent border-3 border-black placeholder:text-black placeholder:text-xl"
              onChange={handlePasswordValidation}
            />
            <ul>
              <li>
                {
                  !validity.length ? 
                  <span>❌</span>
                  :
                  <span>✔</span>
                }
                Password must be atleast 8 character long.</li>
                <li>
                {
                  !validity.capitalLetter ? 
                  <span>❌</span>
                  :
                  <span>✔</span>
                }
                Password must have at least one capital letter.</li>
                <li>
                {
                  !validity.specialChar ? 
                  <span>❌</span>
                  :
                  <span>✔</span>
                }
                Password must have at least one special character.</li>
            </ul>
          </label>
          <label className="form-control w-full max-w-xs py-4">
            {
             validity.specialChar && validity.capitalLetter && validity.length ?
              <button className={`btn btn-outline`}>Sign Up</button>
              :
              <button className={`btn btn-outline`} disabled>Sign Up</button>
            }
          </label>
        </form>
      </div>
    </div>
  );
}
