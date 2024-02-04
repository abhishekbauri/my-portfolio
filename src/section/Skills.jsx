import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import "./Skills.css";

import { skillsImg } from "../constant/constant.js";
const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        {skillsImg.map((item) => (
          <Card sx={{ width: 150, margin: 2 }} key={item.alt}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={item.src}
                alt={item.alt}
              />
            </CardActionArea>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
