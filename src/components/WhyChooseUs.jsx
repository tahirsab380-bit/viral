import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <span className="why-badge">The difference</span>

      <h2 className="why-title">
        Why choose Viral <br />
        over <em>everyone</em> else?
      </h2>

      <div className="comparison">
        <div className="comparison-card muted">
          <h3>Other Agencies</h3>

          <ul>
            <li>✕ Generic content templates</li>
            <li>✕ Monthly reporting only</li>
            <li>✕ Separate teams for different platforms</li>
            <li>✕ Long-term contracts required</li>
            <li>✕ One-size-fits-all approach</li>
          </ul>
        </div>

        <div className="comparison-card active">
          <h3>
            <span className="logo1">✳</span> Viral
          </h3>

          <ul>
            <li>✓ Custom content for your brand</li>
            <li>✓ Real-time performance tracking</li>
            <li>✓ Integrated cross-platform strategy</li>
            <li>✓ Flexible month-to-month options</li>
            <li>✓ Tailored to your specific goals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
