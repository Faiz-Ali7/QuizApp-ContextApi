/* eslint-disable react/prop-types */
import { useState,createContext } from "react";
export const UserContext=createContext()



const UserContextProvider=(props)=>{
    const [user,setUser]=useState(null)
    const contextValue={
        user,setUser
    }
return (
    <UserContext.Provider value={contextValue}>
    {props.children}
    </UserContext.Provider>
)
}
export default UserContextProvider