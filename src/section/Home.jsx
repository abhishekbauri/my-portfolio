import { useTypewriter } from "react-simple-typewriter";
import { photoUrl } from "../constant/constant";
import { MdDownload } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { contactImage } from "../constant/constant";

import "./Home.css";
import Layout from "../component/layout/Layout";
import Button from "../component/buttons/Button";

function Home() {
  const [text] = useTypewriter({
    words: ["Fullstack", "Frontend", "Backend", "Software"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <Layout>
      <div className=" container-fluid home ">
        <div className="row intro  p-2">
          <div className="col-md-6 col-sm-12  intro-content d-flex flex-column justify-content-center">
            <h3 className="text-center">Hi</h3>
            <h2 className="name-format text-center">I am Abhishek</h2>
            <h1 className="text-center">
              <span> {text} </span> Developer
            </h1>
            <div className="text-center mt-3 mb-3">
              <Button title="Know More!" url="/about" />
              <Link
                to="https://drive.google.com/file/d/1wtI15BMJIKNU6DVv3gsH75XDkwxfAiRY/view?usp=sharing"
                target="_blank"
                className="btn btn-warning ms-2 pt-2 pb-2 rounded-5"
              >
                Download Resume
                <MdDownload size={20} />
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <div className="photos">
              <img src={photoUrl} />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 bg-info container-fluid  d-flex justify-content-center align-items-center">
        <div className="col-md-6 ">
          <img src={contactImage} alt="Contact image" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-center text-light pb-4">
            Feel Free to Connect🤝!
          </h3>
          <div className="main mb-3">
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
    </Layout>
  );
}

export default Home;
