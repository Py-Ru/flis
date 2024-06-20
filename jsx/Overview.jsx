function Overview() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>An overview of our Environment</h2>
            </div>
          </div>
          <div
            id="carouselVideoExample"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselVideoExample"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            </div>

            {/* Inner */}
            <div className="carousel-inner">
              {/* Single item */}
              <div className="carousel-item active">
                <video className="img-fluid" autoPlay loop muted>
                  <source
                    src="/assets/images/school_view.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Discover Our Environment</h5>
                  <p>
                    Experience the vibrant atmosphere and facilities we offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
