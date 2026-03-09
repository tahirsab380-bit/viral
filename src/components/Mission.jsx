import { useEffect, useRef } from "react";
import { FaBolt } from "react-icons/fa"; 
import "./Mission.css";

function Mission() {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (box) observer.observe(box);

    return () => {
      if (box) observer.unobserve(box);
    };
  }, []);

  return (
    <section className="mission-section">
      <div ref={boxRef} className="mission-box reveal">
        <div className="corner-icon top-right">
          <FaBolt />
        </div>

        <div className="corner-icon bottom-left">
          <FaBolt />
        </div>

        <h2>Our Mission</h2>
        <p className="box">
          Turning content chaos into consistent growth 
        </p>
        <p>
            we help brands focus
          on meaningful engagement rather than just filling a feed.
        </p>
        <p>
          We work with companies ready to take their social media presence
          seriously — not to chase trends, but to grow intentionally.
        </p>
        <p>
          Content is just the starting point. Our strategy combines planning,
          execution, and consistency across all platforms.
        </p>
        <p>
          From content creation to posting, community management, and
          analytics, we handle it all so you can focus on running your
          business.
        </p>
        <p>
          If you're ready to grow with purpose, we’re here to help you create
          real, sustainable results.
        </p>
      </div>
    </section>
  );
}

export default Mission;
