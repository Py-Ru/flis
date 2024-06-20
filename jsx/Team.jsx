function Team() {
  const teamMembers = [
    {
      name: "Mohamed Rashed",
      position: "Director",
      img: "/assets/images/mohamed_rash.jpg",
    },
    {
      name: "Salamat Okikiri",
      position: "V. Principal Academics",
      img: "/assets/images/sal-oki.jpg",
    },
    {
      name: "Ibrahim Musa",
      position: "Quality Assurance Manager",
      img: "/assets/images/quality-ass.jpg",
    },
    {
      name: "Waliyat Mohammed",
      position: "Curriculum Coordinator",
      img: "/assets/images/wal-moh.jpeg",
    },
    {
      name: "AbdulRahman Maji",
      position: "Head of IT Department",
      img: "/assets/images/abd_maj.jpg",
    },
    {
      name: "Sani Isah",
      position: "E-Learning Manager",
      img: "/assets/images/sani_isah.jpg",
    },
  ];

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-12 text-center">
            <div className="section-heading">
              <h2>Some Team Members</h2>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-4">
            <div className="categories">
              <h4>Our Amazing Team</h4>
              <p>
                We have a dedicated team committed to excellence in education
                and student support. Each member brings unique skills and
                expertise, contributing to our vibrant community.
                <br />
                <br />
                Our team is passionate about nurturing every student's
                potential, ensuring a supportive environment where innovation
                and growth flourish.
              </p>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              {teamMembers.map((member, index) => (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                  <div className="card shadow-sm border-0">
                    <div className="card-body text-center">
                      <div className="thumb mb-3">
                        <a href="#">
                          <img
                            src={member.img}
                            alt={member.name}
                            className="img-fluid rounded-circle"
                          />
                        </a>
                      </div>
                      <h4 className="card-title">{member.name}</h4>
                      <p className="card-text">{member.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
