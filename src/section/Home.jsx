import { useTypewriter } from "react-simple-typewriter";
import { photoUrl } from "../constant/constant";

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
      <div className=" container-fluid ">
        <div className="row home p-2">
          <div className="col-md-6 col-sm-12  intro-content d-flex flex-column justify-content-center">
            <h3 className="text-center">Hi</h3>
            <h2 className="name-format text-center">I am Abhishek</h2>
            <h1 className="text-center">
              <span> {text} </span> Developer
            </h1>
            <div className="text-center mt-3">
              <Button title="Know More!" url="/about" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <div className="photos">
              <img src={photoUrl} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
