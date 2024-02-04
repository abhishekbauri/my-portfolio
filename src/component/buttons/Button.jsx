import { useNavigate } from "react-router";
import "./../components.css";

/* eslint-disable react/prop-types */
const Button = ({ title, url }) => {
  const navigate = useNavigate();
  return (
    <button className="newBtn" onClick={() => navigate(url)}>
      {title}
    </button>
  );
};

export default Button;
