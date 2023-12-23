import Logo from '../assets/Logo.svg'

export default function Navbar()
{
    return(
      <div className='px-16 bg-primary'>
             <div className="navbar">
        <div className="flex-1">
          <img className='w-16 h-24' src={Logo} alt="" />
        </div>
        <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
      <li><a>About</a></li>
      <li><a href="">Our Services</a></li>
      
    </ul>
        </div>
        <div className="navbar-end">
    <a className="btn btn-ghost border-black border-2 px-8 py-2">Sign In</a>
  </div>
      </div>
      </div>

       
    )
}