import {  useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function SigninPage()
{
    const { isLoaded, setActive, signIn } = useSignIn();
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
                console.error("error", err)
              }
    }   

    return(
        <div className="w-full px-16 bg-primary">
            <div className=" w-5/12 border-2 border-black mx-auto px-16 py-8 bg-primary">
               <form className="" onSubmit={handleSignIn}>
               <label className="form-control w-full max-w-xs">
               <div className="label">
    <span className="label-text">Write your Email</span>
  </div>
  <input type="email" name="email" placeholder="your email" className="input input-bordered rounded-none w-full bg-transparent border-3 border-black placeholder:text-black placeholder:text-xl" />

                </label>
                <label className="form-control w-full max-w-xs">
               <div className="label">
    <span className="label-text">Your password</span>
  </div>
  <input type="password" name="password" placeholder="info@site.com" className="input input-bordered rounded-none w-full bg-transparent border-3 border-black placeholder:text-black placeholder:text-xl" />

                </label>   
                <label className="form-control w-full max-w-xs py-4">
                <button className="btn btn-outline ">Sign In</button>

                </label>       


                </form>
        </div>
        </div>
    )
}