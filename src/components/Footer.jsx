import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo">
          <span className="logo-icon">✳</span>
          <span className="logo-text">viral</span>
        </div>

        <h2 className="footer-title">
          Social media that <br />
          drives <em>real</em> results
        </h2>

        <p className="footer-desc">
          Built for creators, businesses, and brands.
        </p>

        <div className="footer-socials">
          <a href="#">✕</a>
          <a href="#">◎</a>
        </div>

        <p className="footer-copy">
          © 2026 Viral. Created by Azmat Rasool and Creative Babar Team.
        </p>
      </div>

      <div className="footer-links">
        <div className="footer-col">
          <h4>Navigate</h4>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Case Studies</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href="#">Book a call</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
          <a href="#">404</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
