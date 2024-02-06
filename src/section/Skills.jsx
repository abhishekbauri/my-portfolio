import { skillsImg } from "../constant/constant.js";
import Layout from "../component/layout/Layout.jsx";
import Button from "../component/buttons/Button.jsx";

import "./Skills.css";

const Skills = () => {
  return (
    <Layout>
      <div
        className="container-fluid skills d-flex flex-column justify-content-center"
        style={{ minHeight: "85vh" }}
      >
        <h1 className="text-center pt-2  title">My Skills</h1>
        <div className="row p-4 d-flex justify-content-center align-items-center row-gap-5 gap-4">
          {skillsImg.map((item, index) => (
            <img
              src={item.src}
              alt={item.alt}
              key={index}
              className="img-fluid img-thumbnail skills-img"
            />
          ))}
        </div>
        <div className="row d-flex justify-content-center pb-4 pt-2">
          <Button title="Projects !" url="/project" />
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
