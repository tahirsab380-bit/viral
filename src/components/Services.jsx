import { useEffect } from "react";
import "./Services.css";

function Services() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

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
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section">
      <span className="services-label reveal">Services</span>
      <h2 className="services-heading reveal">
        How we can <br /> help you <span>grow</span>
      </h2>

      <div className="services-cards">
        <div className="service-card reveal">
          <div className="service-media float">
            <video
              src="https://framerusercontent.com/assets/SCuqi0qyfpukKLtZm0jURfE.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <h3>Content Creation</h3>
          <p>
            High-performing short-form content designed to capture attention
            and convert viewers into loyal customers.
          </p>
        </div>

        <div className="service-card reveal">
          <div className="service-media vertical">
            <video
              src="https://framerusercontent.com/assets/64ZMhO5aQtuzPw6cPEGQKIEos.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <h3>Social Management</h3>
          <p>
            Strategic posting, engagement, and growth systems to build powerful
            brand presence across platforms.
          </p>
        </div>

        <div className="service-card reveal">
          <div className="service-media pulse">
            <video
              src="https://framerusercontent.com/assets/u0e0HQVXrB8r4Av9RYEjAmZ7rw.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <h3>Paid Media</h3>
          <p>
            Data-driven paid campaigns engineered to scale reach, leads, and
            conversions profitably.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
