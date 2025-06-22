import  "./Header.css";
import hamburger from "../../assets/images/hamburger.png";
import logo from "../../assets/images/logo.svg";


const Header = ()=>{
    return(
        <div className="main">
            <div className="nav1">
                <div className = "responsive">
                    <img src = {logo} className="logo" alt="logo"/>
                    <img src={hamburger} className="hamburger" alt="hamburger"/>
                </div>
                <div className="nav-links">
                    <a href="">Save</a>
                    <a href="">Invest</a>
                    <a href="">FAQs</a>
                    <a href="">Stories</a>
                    <a href="">Resources</a>
                </div>
                </div>
            <div className="nav2">
                <button className="btn1">
                    Sign Up
                </button>
                <button className="btn2">
                    Create Free Account
                </button>
            </div>
        </div>

    )
}
export default Header;