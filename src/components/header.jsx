import Logo from '../assets/Logo.svg'

import { Link, NavLink } from 'react-router-dom'
import { useUser, useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import SmartLink from './menuLink';

export default function Navbar()
{

  const navigate = useNavigate()
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  
    return(
      <div className='px-16 bg-primary'>
             <div className="navbar">
        <div className="flex-1">
          <NavLink to='/'>
          <img className='w-16 h-24' src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="flex-none gap-4">
        <SmartLink target='/dashboard' wording='Dashboard'></SmartLink>
        <SmartLink target='/events' wording='Events'></SmartLink>
        </div>
        <div className="navbar-end gap-4">
        {
          !isSignedIn &&
          <>
            <SmartLink target='/register' wording='Sign Up'></SmartLink>
        <SmartLink target='/login' wording='Sign In'></SmartLink>
          </>
        }
        {
          isSignedIn &&
          <>
            <button onClick={() => signOut(() => navigate('/login'))}>Sign Out</button>
          </>
        }
        
  </div>
      </div>
      </div>

       
    )
}