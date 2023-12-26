export default function SigninPage()
{
    return(
        <div className="w-full px-16 bg-primary">
            <div className=" w-5/12 border-2 border-black mx-auto px-16 py-8 bg-primary">
               <form className="" action="">
               <label className="form-control w-full max-w-xs">
               <div className="label">
    <span className="label-text">Write your Email</span>
  </div>
  <input type="text" name="password" placeholder="your email" className="input input-bordered rounded-none w-full bg-transparent border-3 border-black placeholder:text-black placeholder:text-xl" />

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