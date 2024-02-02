import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { projectDetails } from "../constant/constant";

import "./Project.css";
import Layout from "../component/layout/Layout";

const Project = () => {
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "linear" }}
        viewport={{ once: true }}
        id="project-section"
      >
        <div className="project-heading">
          <h1>Projects</h1>
        </div>
        <div className="project-container">
          {projectDetails.map((item) => (
            <Card sx={{ maxWidth: 300, margin: 3 }} key={item.id}>
              <CardActionArea href={item.liveUrl} target="_blank">
                <CardMedia
                  component="img"
                  height="140"
                  image={item.imageUrl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      textAlign: "center",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      height: 30,
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-around",
                  marginBottom: 2,
                  marginTop: 2,
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href={item.githubUrl}
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  href={item.liveUrl}
                  target="_blank"
                >
                  Live
                </Button>
              </Stack>
            </Card>
          ))}
        </div>
      </motion.section>
    </Layout>
  );
};

export default Project;
