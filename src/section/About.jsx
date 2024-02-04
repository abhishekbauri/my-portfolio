import { aboutPhotoUrl } from "../constant/constant";

import Layout from "../component/layout/Layout";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row about min-vh-100">
          <div className="col-md-6 d-flex align-items-center justify-content-center mb-4">
            <div className="photo">
              <img className="img-fluid" src={aboutPhotoUrl} />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center mb-4 ">
            <div className="mb-4">
              <h3 className="text-capitalize text-center text-light  fw-bold ">
                What do you want know about me ?
              </h3>
            </div>
            <div className="accordion w-100" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button text-capitalize fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ boxShadow: "none" }}
                  >
                    Education
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body ">
                    <ul
                      style={{ listStyleType: "none" }}
                      className="list-group"
                    >
                      <li className="list-group-item list-group-item-primary">
                        <div className="d-flex gap-4">
                          <h5>National Institute of Technology, Jamshedpur</h5>
                          <h5>2019-2023</h5>
                        </div>
                        <p>
                          B.Tech in Electronics and Communication Engineering
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed text-capitalize fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{ boxShadow: "none" }}
                  >
                    Experiene
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul
                      style={{ listStyleType: "none" }}
                      className="list-group"
                    >
                      <li className="list-group-item list-group-item-info">
                        <h5>SDE Intern at Desi QnA</h5>
                        <p>Nov 2023 - Currrent</p>
                      </li>
                      <hr />
                      <li className="list-group-item list-group-item-warning">
                        <h5>Software Engineer Intern at KreditBee</h5>
                        <p>Jan 2023 - Jun 2023</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed text-capitalize fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ boxShadow: "none" }}
                  >
                    Skills
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/skills")}
                    >
                      Check My Skills!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
