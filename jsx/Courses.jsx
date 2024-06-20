function Courses() {
  React.useEffect(() => {
    $(".owl-courses-item").owlCarousel({
      items: 3,
      loop: true,
      dots: true,
      nav: true,
      autoplay: true,
      margin: 30,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });
  }, []);
  return (
    <section class="our-courses" id="courses">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Our Popular Courses</h2>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="owl-courses-item owl-carousel">
              <div class="item">
                <img src="assets/images/early-years.jpg" alt="Course One" />
                <div class="down-content">
                  <h4>Early Years</h4>
                  <div class="info">
                    <div class="row">
                      <div class="col-12">
                        <p class="text-center">
                          Foundational subjects are treated in-depth, varying
                          from language and communication to religion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src="assets/images/primary.jpg" alt="Course Two" />
                <div class="down-content">
                  <h4>Primary School</h4>
                  <div class="info">
                    <div class="row">
                      <div class="col-12">
                        <p class="text-center">
                          Educational subjects based on a rich curriculum are
                          treated in-depth, varying from Sciences to Languages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src="assets/images/middle-school.jpg" alt="" />
                <div class="down-content">
                  <h4>Middle School</h4>
                  <div class="info">
                    <div class="row">
                      <div class="col-12">
                        <p class="text-center">
                          A slightly advanced version of primary educational
                          subjects are treated in-depth: with introduction to
                          practical learning through projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src="assets/images/high-school.jpg" alt="" />
                <div class="down-content">
                  <h4>High School</h4>
                  <div class="info">
                    <div class="row">
                      <div class="col-12">
                        <p class="text-center">
                          More advanced and specified subjects are treated
                          in-depth: with practicals to prepare students for
                          higher institution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src="assets/images/religion.png" alt="" />
                <div class="down-content">
                  <h4>Religion</h4>
                  <div class="info">
                    <div class="row">
                      <div class="col-12">
                        <p class="text-center">
                          A path from basic to advanced knowledge of religion is
                          treated in-depth.
                        </p>
                      </div>
                    </div>
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
