import "./Hero.css";
import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-text">
            <button className="btn3">
                The2024PiggyVestSavingsReport
            </button>
            <h1>The Better Way to Save & Invest</h1>
            <p>Piggyvest helps over 5 million customers achieve their financial goals by helping them save and invest with ease.</p>
            <button className="btn4">
                Get oniPhone
            </button>
            <button className="btn5">
                GetonAndroid
            </button>
        </div>
        <div className="hero-image">
            <img src= {hero}alt ="hero" />

        </div>
    </div>
  );
}
export default Hero;