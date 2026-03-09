import "./HowWeWork.css";

const HowWeWork = () => {
  return (
    <section className="how-we-work">
      <span className="work-badge">How we work</span>

      <h2 className="work-title">
        We like to keep <br />
        things <em>nice</em> and simple
      </h2>

      <div className="work-steps">
        <div className="work-card">
          <div className="icon-box">⬛⬜</div>
          <h3>Strategy First</h3>
          <p>
            We align on goals, audience, and content direction before anything
            goes live.
          </p>
        </div>

        <div className="work-card">
          <div className="icon-box">📱</div>
          <h3>Create & Manage</h3>
          <p>
            We handle the production, scheduling, and posting across all key
            platforms.
          </p>
        </div>

        <div className="work-card">
          <div className="icon-box">📊</div>
          <h3>Review & Refine</h3>
          <p>
            We track performance, learn what’s working, and adjust as needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
