import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./Logout";

export const Profile = () =>{
    
    const{user,isAuthenticated,isLoading} = useAuth0();
    if(isLoading){
        return<div>Loading....</div>
    }
    return(
        isAuthenticated && (
            <div class="profileDiv">                
                <img class="imageProfile" src = {user.picture} alt = {user.name} />
                <p>{user.name}</p>
                <LogoutButton/>
            </div>
        )        
    )
}