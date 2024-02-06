import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectDetails } from "../constant/constant";
import Layout from "../component/layout/Layout";
import { Link } from "react-router-dom";

import "./Project.css";

const Project = () => {
  return (
    <Layout>
      <div className="container-fluid projects">
        <div className="row d-flex gap-4 flex-wrap justify-content-center align-items-center row-gap-2">
          {projectDetails.map((project) => (
            <div
              className="card  mt-4 mb-4"
              key={project.id}
              style={{ width: "350px" }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="img-fluid img-thumbnail"
                style={{ height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center mb-4">{project.title}</h5>
                <div className="d-flex justify-content-between">
                  <Link
                    to={project.githubUrl}
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
