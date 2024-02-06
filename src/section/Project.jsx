import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectDetails } from "../constant/constant";
import Layout from "../component/layout/Layout";
import { Link } from "react-router-dom";

import "./Project.css";
import Labels from "../component/labels/Labels";

const Project = () => {
  return (
    <Layout>
      <div className="container-fluid projects">
        <div className="row p-4 d-flex gap-4 flex-wrap justify-content-center align-items-center row-gap-4">
          {projectDetails.map((project) => (
            <div
              className="card project-card"
              key={project.id}
              style={{ width: "350px" }}
            >
              <img
                src={project?.imageUrl}
                alt={project?.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title text-center text-light text-capitalize mb-4">
                  {project?.title}
                </h5>
                <div
                  className="row d-flex align-items-center overflow-auto justify-content-center pt-2 pb-2 gap-lg-3 gap-2"
                  style={{ height: "100px" }}
                >
                  {project?.techStack.map((ele, ind) => (
                    <Labels key={ind} title={ele} />
                  ))}
                </div>
                <div className="d-flex justify-content-between">
                  <Link
                    to={project?.githubUrl}
                    target="_blank"
                    className="btn btn-outline-primary text-uppercase"
                  >
                    <FaGithub size={18} /> Github
                  </Link>

                  <Link
                    to={project.liveUrl}
                    target="_blank"
                    className="btn btn-primary text-uppercase"
                  >
                    live <FaExternalLinkAlt size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Project;
