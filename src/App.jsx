import './App.css'
//import Quiz from './components/Quiz/Quiz'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './Context/UserContextProvider'
function App() {


  return (
    <>
    <UserContextProvider>
      <h1>React with Faiz</h1>
       <Login/>
       <Profile/>
       </UserContextProvider>
    </>
  )
}

export default App
