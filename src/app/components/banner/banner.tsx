import './banner.css';
import TypingEffect from "../typingEffect/typingEffect";

const Banner = () => {
  return (
    <div className="banner-container">
      <div
        className='banner'
        style={{ backgroundImage: `url(/assets/images/background.jpg)` }}
      >
        <div className="banner-back"></div>
        <div className="banner-overlay">
          <div className="banner-title banner-title-media">
            <span>Discover the Amazing World of Davit!</span>
          </div>
          <div className="typing-effect-container">
            <span>&lt;<span className="code-tag">code</span>&gt;</span>
            <TypingEffect
                textArray={["Hello, World!", "Welcome to my site!", "Enjoy your stay!"]}
                typingSpeed={100}
                deletingSpeed={80}
                pauseTime={2000}
            />
            <span>&lt;<span className="code-tag">/code</span>&gt;</span>
          </div>
            {/* <img src={Image1} className="banner-image"></img> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
