import "./BrandMarquee.css";

function BrandMarquee() {
  const brands = [
    "Nike",
    "Meta",
    "Google",
    "Netflix",
    "Spotify",
    "Amazon",
    "Adobe",
    "Tesla",
  ];

  return (
    <section className="brand-section">
      <div className="brand-text">
        <h3>Brands we’ve helped grow on social.</h3>
      </div>

      <div className="brand-marquee">
        <div className="brand-track">
          {[...brands, ...brands].map((brand, index) => (
            <span key={index} className="brand-name">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandMarquee;
