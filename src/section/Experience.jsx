import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { companyUrl, kreditBeeExp } from "../constant/constant";

import "./Experience.css";
import Layout from "../component/layout/Layout";
const Experience = () => {
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "linear" }}
        viewport={{ once: true }}
        id="exp-section"
      >
        <h1 className="exp-heading">Experience</h1>
        <Grid container className="exp-container">
          <Grid item xs={10} md={6} className="company-photo">
            <img src={companyUrl} alt="KreditBee" />
          </Grid>
          <Grid item xs={10} md={6} className="exp-details">
            <h1>Software Engineer Intern</h1>
            <h2>(Jan, 23 - June, 23)</h2>
            <br />

            <p>{kreditBeeExp} </p>
          </Grid>
        </Grid>
      </motion.section>
    </Layout>
  );
};

export default Experience;
