function Services() {
  React.useEffect(() => {
    $(".owl-service-item").owlCarousel({
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
    <section class="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="owl-service-item owl-carousel">
              <div class="item">
                <div class="icon">
                  <img src="assets/images/service-icon-01.png" alt="" />
                </div>
                <div class="down-content">
                  <h4>Multi-Curricular</h4>
                  <p>
                    At Future Leaders International School, our multi-curricular
                    approach integrates diverse fields of study to foster
                    well-rounded development.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="icon">
                  <img src="assets/images/service-icon-02.png" alt="" />
                </div>
                <div class="down-content">
                  <h4>Qualified Teachers</h4>
                  <p>
                    Our qualified teachers are dedicated experts in their
                    fields, committed to delivering high-quality education and
                    personalized support.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="icon">
                  <img src="assets/images/service-icon-03.png" alt="" />
                </div>
                <div class="down-content">
                  <h4>Adequate Facilities</h4>
                  <p>
                    Future Leaders International School provides
                    state-of-the-art facilities to support comprehensive
                    learning and growth for all students.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="icon">
                  <img src="assets/images/service-icon-02.png" alt="" />
                </div>
                <div class="down-content">
                  <h4>E-Learning</h4>
                  <p>
                    Online courses, virtual classrooms, digital resources, and
                    interactive platforms that facilitate remote learning from
                    anywhere with internet access.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="icon">
                  <img src="assets/images/service-icon-03.png" alt="" />
                </div>
                <div class="down-content">
                  <h4>All in One</h4>
                  <p>
                    At Future Leaders International School, we offer an
                    all-in-one education solution with day, boarding, and online
                    options from kindergarten to high school.
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
