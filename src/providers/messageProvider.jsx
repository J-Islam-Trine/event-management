import { MessageContext } from "../context/messageContext"
import { useContext, useState } from "react";

export default function MessageProvider({children})
{
    
	const [messageData, setMessageData] = useState(null);
    return(

        <MessageContext.Provider value={{messageData, setMessageData}}>
                {children}
        </MessageContext.Provider>
    )
}