//import UserContextProvider from "../Context/UserContextProvider"
import { UserContext } from "../Context/UserContextProvider"
import { useState,useContext } from "react"
const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=(e)=>{
      e.preventDefault()
    
      setUser(username,password);
    }
    // eslint-disable-next-line no-unused-vars
    const {user,setUser} =useContext(UserContext)
      return (
        <div>
    <h2>Login</h2>
    <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='username' />
    <input type="text"onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='password' />
    <button onClick={handleSubmit}>Submit</button>
        </div>
      )
}

export default Login