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
      <div className='lg:px-16 md:px-16 bg-primary'>
             <div className="navbar flex-col lg:flex md:flex">
        <div className="md:flex-1 lg:flex-1">
          <NavLink to='/'>
          <img className='w-16 h-24' src={Logo} alt="" />
          </NavLink>
        </div>

        <div className="navbar-end gap-4 py-4">
        
        {
            isSignedIn &&
          <div> 
            <SmartLink target='/dashboard' wording='Dashboard'></SmartLink>
          </div>
        }
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