import { useSignUp } from "@clerk/clerk-react";

export default function SignupPage()
{

  const { isLoaded, signUp } = useSignUp();

    function handleSignUp(event)
    {
      event.preventDefault();
      const submittedData = new FormData(event.currentTarget);

      // Now you can fetch whatever data you want to.
      const email = submittedData.get('email');
      const password = submittedData.get('password')
      
      console.log(email, password);
}

    return(
        <div className="w-full px-16 bg-primary">
            <div className=" w-5/12 border-2 border-black mx-auto px-16 py-8 bg-primary">
               <form className="" onSubmit={handleSignUp}>
               <label className="form-control w-full max-w-xs">
               <div className="label">
    <span className="label-text">Write your Email</span>
  </div>
  <input type="email" name="email" className="input input-bordered rounded-none w-full bg-transparent border-3 border-black placeholder:text-black placeholder:text-xl" />

                </label>
                <label className="form-control w-full max-w-xs">
               <div className="label">
    <span className="label-text">Give a password</span>
  </div>
  <input type="password" name="password"  className="input input-bordered rounded-none w-full bg-transparent border-3 border-black placeholder:text-black placeholder:text-xl" />

                </label>   
                <label className="form-control w-full max-w-xs py-4">
                <button className="btn btn-outline ">Sign Up</button>

                </label>       


                </form>
        </div>
        </div>
    )
}