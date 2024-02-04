import "./Skills.css";

import { skillsImg } from "../constant/constant.js";
import Layout from "../component/layout/Layout.jsx";
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
              className="img-fluid img-thumbnail"
              style={{ width: "150px", height: "150px" }}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
