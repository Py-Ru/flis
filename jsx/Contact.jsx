function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item">
              <h3>CONTACT US FOR MORE INFORMATION</h3>
              <p>
                If you have any questions or need further information, please do
                not hesitate to contact us. We are here to assist you with your
                inquiries.
                <br />
                <br />
                We strive to provide comprehensive support and detailed answers
                to all your questions. Our team is dedicated to ensuring you
                receive the best possible assistance.
              </p>
              <div className="main-button-red">
                <div className="scroll-to-section">
                  <a
                    href="mailto:info@flis.com.ng?subject=Inquiry%20about%20Bachelor%20Degree%20Application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-info">
              <ul>
                <li>
                  <h6>Phone Number</h6>
                  <span>+234-818-437-2392</span>
                </li>
                <li>
                  <h6>Email Address</h6>
                  <span>info@flis.com.ng</span>
                </li>
                <li>
                  <h6>Street Address</h6>
                  <span>
                    No. 15, Dakwa, off Dei-Dei junction, Abuja, Nigeria
                  </span>
                </li>
                <li>
                  <h6>Website URL</h6>
                  <span>www.flis.edu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          Copyright © <span>{currentYear}</span> Future Leaders International
          School. All Rights Reserved.
          <br />
          Design:{" "}
          <a
            href="https://www.x.com/aikouajanaku"
            target="_parent"
            title="The Developer."
          >
            Team Py-Ru
          </a>
        </p>
      </div>
    </section>
  );
}
