import Btn from './Btn';
import { Link } from "react-router-dom";
import {  HiOutlineMoon } from 'react-icons/hi';
const icon = <HiOutlineMoon size={18} />;

const Header = () => {
    function onclick() {
        const Hbtn = document.querySelector('.header-btn');
            Hbtn.classList.toggle('active');
            if (Hbtn.classList.contains('active')) {
            localStorage.setItem('data-theme', 'dark');
           document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'))
            } else {
            localStorage.setItem('data-theme', 'light');
            document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'))
            }
        }
        
    return (
        <header className="header">
            <div className="wrapper flex f-center-y f-btw">
                <h1>
                   الجمعيات
                </h1>
                <Btn text={icon} altText="Dark Mode" className="header-btn" onclick={onclick} />
				
                </div>
				  <div className="wrapper flex f-center-y f-btw">
				  <Link to="/login">Log In</Link>  <Link to="/signup">Sign Up</Link>   <Link to="/post">post</Link>  <Link to="/map">map</Link> 
				   </div>
           
        </header>
    )
}

export default Header
