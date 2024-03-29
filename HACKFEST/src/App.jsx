import Header from './Header'
import Footer from './Footer'
import Home from './Home/Home'
import Food from './Food/Food'
import Report from './Report/Report'
import Login from './Login/Login'
import {Routes,Route} from "react-router-dom"
import Profile from './Profile/Profile'

export default function App(){
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Food" element={<Food/>}/>
                <Route path="/Report" element={<Report/>}/>
                <Route path='/Profile' element={<Profile/>}/>
                <Route path='/Login' element={<Login/>}/>
            </Routes>
            <Footer/>
        </>
    )
}