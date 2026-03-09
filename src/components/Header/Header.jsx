import { useEffect, useRef, useState } from "react";
import "./Header.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Header() {
  const videos = [
    "https://framerusercontent.com/assets/9BKR8n5yij6np4F4fhXpbwixLWI.mp4",
    "https://framerusercontent.com/assets/9BKR8n5yij6np4F4fhXpbwixLWI.mp4",
    "https://framerusercontent.com/assets/9BKR8n5yij6np4F4fhXpbwixLWI.mp4",
  ];

  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [index]);

  const handleEnded = () => {
    setIndex((prev) => (prev + 1) % videos.length);
  };

  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaXTwitter />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaTiktok />, link: "#" },
    { icon: <FaGithub />, link: "#" },
  ];

  return (
    <header className="header">
      <div className="header-left">
        <div className="icons-marquee">
          <div className="icons-track">
            {[...socialIcons, ...socialIcons].map((item, i) => (
              <a key={i} href={item.link} className="icon">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="content">
          <h1>
            Short Form <br /> done right
          </h1>
          <p>
            We combine content, management, and paid media to help brands grow
            and convert on the social platforms that matter most.
          </p>
           <button className="contact-btn">Get in touch</button>
        </div>
      </div>

      <div className="header-right">
        <video
          ref={videoRef}
          src={videos[index]}
          muted
          autoPlay
          playsInline
          onEnded={handleEnded}
        />

        {/* CTA BUTTON */}
        <button className="buy-btn">Buy Template</button>
      </div>
      
    </header>
    
  );
  
}

export default Header;
