import { Outlet } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react';
import { clerk_pub_key} from '../helper/clerk-config'

if (!clerk_pub_key)
{
throw new error('missing publishable key');
}
else 
{
console.log(clerk_pub_key)
}

//components
import Navbar from "../components/header"
import Footer from "../components/footer";

import MessageProvider from "../providers/messageProvider";

export default function DefaultLayout()
{
    return(
        <ClerkProvider publishableKey={clerk_pub_key}>
                           <Navbar></Navbar>
            <MessageProvider>
                <Outlet />
            </MessageProvider>
            <Footer></Footer>
    </ClerkProvider>


    )
}