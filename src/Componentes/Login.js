import React from "react";
import { useAuth0 } from "@auth0/auth0-react";




export const LoginButton = () =>{
    


    const {loginWithRedirect,user,isAuthenticated,isLoading} = useAuth0();
    
    if(!isAuthenticated){
        return <button class="buLo" onClick={
            () => loginWithRedirect() 
               
        }>Login</button>
    }
    
}

