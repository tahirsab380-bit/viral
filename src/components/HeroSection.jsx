import { useEffect, useRef } from "react";
import "./HeroSection.css";

const ClientResultsHero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="client-hero">
      <div className="client-left">
        <span className="client-label">Client results</span>

        <h2 className="client-title">
          Scaling a beauty brand with <em>reels</em>
        </h2>

        <p className="client-subtitle">
          Beauty brand <strong>Glowhaus</strong> came to us with great products
          but low engagement. We built a UGC-driven short-form video strategy
          optimized for Reels and TikTok.
        </p>

        <div className="client-stats">
          <div className="stat-card">
            <h3>128K</h3>
            <p>
              Reel Views
              <span className="stat-small">In first 30 days</span>
            </p>
          </div>

          <div className="stat-card">
            <h3>245%</h3>
            <p>
              Engagement
              <span className="stat-small">vs previous month</span>
            </p>
          </div>
        </div>
      </div>

      <div className="client-right">
        <video
          ref={videoRef}
          src="https://framerusercontent.com/assets/FaxcwHWdhZxkAcLltQoQxhlJciw.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="client-video"
        />
      </div>
    </section>
  );
};

export default ClientResultsHero;
