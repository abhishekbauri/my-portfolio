import Grid from "@mui/material/Grid";
import {motion} from 'framer-motion';
import Skills from '../component/Skills'
import { aboutDesc, aboutPhotoUrl } from "../constant/constant";

import "./About.css";

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y:50}} 
      whileInView={{ opacity: 1, y:0}} 
      transition={{ duration: 2, ease: "linear" }} 
      viewport={{ once: true }} 
      id="about-section"
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="about"
      >
        <Grid item xs={10} md={6} className="about-image-container">
        <div className="photo">
            <img src={aboutPhotoUrl} />
        </div>
        </Grid>
        <Grid item xs={10} md={6} className="about-me-content">
          <h3>About Me</h3>
          <p>
            {aboutDesc}
          </p>
        </Grid>
      </Grid>

      <Skills />
    </motion.section>
  );
};

export default About;
