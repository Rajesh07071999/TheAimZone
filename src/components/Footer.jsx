import "./Footer.css";

function Footer() {
  return (
    <footer className="theaimzone-footer text-white">
      <div className="container py-4">
        <div className="row gy-4 align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <h5 className="footer-brand">TheAimZone</h5>
            <p className="mb-0 small">
              Smart tools, creative ideas, made for everyone.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <ul className="footer-links list-unstyled">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#tools">Tools</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <div className="footer-social">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 small">
          <hr className="border-light opacity-25" />
          <p className="mb-0">
            © {new Date().getFullYear()} TheAimZone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
