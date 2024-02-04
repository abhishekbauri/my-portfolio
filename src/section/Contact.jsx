import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { contactImage } from "../constant/constant";

import "./Contact.css";
import Layout from "../component/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container-fluid " id="contact-section">
        <div className="row contact d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <img src={contactImage} alt="Contact image" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-center text-light pb-4">
              Feel Free to Connect🤝!
            </h3>
            <div className="main">
              <div className="up">
                <Link
                  className="card1"
                  to="mailto: abhishekkrbauri02@gmail.com"
                  target="_blank"
                >
                  <BiLogoGmail className="mail" size={40} />
                </Link>
                <Link
                  className="card2"
                  to="https://github.com/abhishekbauri"
                  target="_blank"
                >
                  <FaGithub className="github" size={40} />
                </Link>
              </div>
              <div className="down">
                <Link
                  className="card3"
                  to="https://twitter.com/AbhishekKu56420"
                  target="_blank"
                >
                  <FaXTwitter className="twitter" size={40} />
                </Link>
                <Link
                  className="card4"
                  to="https://www.linkedin.com/in/abhishek-kumar-bauri-71483a214/"
                  target="_blank"
                >
                  <FaLinkedin className="linkedin" size={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
