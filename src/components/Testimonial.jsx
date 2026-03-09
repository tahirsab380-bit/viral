import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-container">
        
        <div className="testimonial-left">
          <div className="quote-icon">“</div>

          <h2>
            They took social media off our plate completely
            and our audience has never been <em>more engaged</em>.
          </h2>

          <p className="author">
            Elena Chen <span>• Bloom Skincare</span>
          </p>
        </div>

        <div className="testimonial-right">
          <video
            className="testimonial-video"
            src="https://framerusercontent.com/assets/6XfEmiD6m02yjpZAyc2nDmmOA.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <span className="brand-mark">Bloom</span>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
