import Button from '@mui/material/Button';
import {useTypewriter} from 'react-simple-typewriter'
import { photoUrl } from "../constant/constant";
import { Link } from 'react-scroll';


import "./Home.css";

function Home() {

  const [text] = useTypewriter({
    words: ["Frontend", "Software"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <section className="home" id="home-section">
      <div className="intro-content">
        <h3>Hi</h3>
        <h2>I am Abhishek</h2>
        <h1>
          <span> {text} </span> Developer
        </h1>
        <Button variant="contained" size="large">
          <Link
            to='about-section'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="navLink"
          >
           Know More
          </Link>
          
        </Button>
      </div>

      <div className="image-container">
        <div className="photo">
          <img src={photoUrl} />
        </div>
      </div>
    </section>
  );
}

export default Home;
