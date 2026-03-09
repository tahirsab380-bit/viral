import "./ClientResults.css";

const ClientResults = () => {
  return (
    <section className="client-results">
      <div className="results-container">
        
        <div className="results-image">
          <video
            className="results-video"
            src="https://framerusercontent.com/assets/EnIr8BLCc5cHl97sMAoX13URc.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="results-content">
          <span className="badge">Client results</span>

          <h1>
            Growing a clothing <br />
            brand with <em>video</em>
          </h1>

          <p>
            Theo came to us ahead of a new collection launch, looking to grow
            their reach and build anticipation. We combined UGC with light
            influencer seeding and short-form video.
          </p>

          <div className="stats">
            <div className="aa">
              <h2>18K</h2>
              <span>Followers</span>
              <small>In six weeks</small>
            </div>

            <div>
              <h2>156%</h2>
              <span>Engagement</span>
              <small>Compared to previous month</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientResults;
