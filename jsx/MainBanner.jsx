function MainBanner() {
  return (
    <section class="section main-banner" id="top" data-section="section1">
      <video autoplay="true" muted loop id="bg-video">
        <source src="assets/images/school_view_short.mp4" type="video/mp4" />
      </video>

      <div class="video-overlay header-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="caption">
                <h6>As-salam alaikum</h6>
                <h2>Welcome to YOUR FUTURE</h2>
                <p>
                  Join us at Future Leaders International School, where{" "}
                  <span class="custom-underline">innovative education</span>{" "}
                  meets global perspectives. Our{" "}
                  <span class="custom-underline">nurturing environment</span>{" "}
                  and <span class="custom-underline">dedicated faculty</span>{" "}
                  empower young minds to excel academically, develop leadership
                  skills, and embrace a world of opportunities. Discover a place
                  where every student is inspired to dream big, achieve more,
                  and lead with integrity.
                  <br />
                  <strong>Enroll Today and Shape a Brighter Future!</strong>
                </p>
                <div class="main-button-green">
                  <div class="scroll-to-section">
                    <a href="#apply">Join Us Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
