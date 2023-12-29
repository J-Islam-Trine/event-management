import { MessageContext } from "../context/messageContext"
import { useContext, useState } from "react";

export default function MessageProvider({children})
{
    
	const [messageData, setMessageData] = useState(null);

    function messagePrinter(message)
{
    setMessageData(message);
    setTimeout(()=> {
        setMessageData(null); 
    },10000)
}
    return(

        <MessageContext.Provider value={{messageData, setMessageData, messagePrinter}}>
                {children}
        </MessageContext.Provider>
    )
}