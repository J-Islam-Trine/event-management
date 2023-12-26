import Logo from '../assets/Logo.svg'

import { Link, NavLink } from 'react-router-dom'
import SmartLink from './menuLink';

export default function Navbar()
{
    return(
      <div className='px-16 bg-primary'>
             <div className="navbar">
        <div className="flex-1">
          <NavLink to='/'>
          <img className='w-16 h-24' src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="flex-none">
        <SmartLink target='/dashboard' wording='Dashboard'></SmartLink>
        </div>
        <div className="navbar-end gap-4">
        <SmartLink target='/register' wording='Sign Up'></SmartLink>
        <SmartLink target='/login' wording='Sign In'></SmartLink>
        
  </div>
      </div>
      </div>

       
    )
}