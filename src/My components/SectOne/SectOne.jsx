import "./SectOne.css";
import securitylock from "../../assets/images/securitylock.svg";
import arrow from "../../assets/images/arrow.png";
 const SectOne = ()=>{
    return(
        <div className="section1">
            <div>
                 <img src= {securitylock} alt="" />
            </div>
            <div className="text">
                 <h2>Your security is our priority</h2>
            <p>
               PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud. 
            </p>
            <img src={arrow} alt=""  className="arrow"/>
            <a href=""> More on our security measures</a>
            </div>
           
           
        </div>
    )
 }

 export default SectOne;