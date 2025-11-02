import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Launch } from "@mui/icons-material";
import { useState } from "react";
import netanelPreview from "../assets/images/netanel_preview.png";
import apexStrategy from "../assets/images/apex _strategy.png";
import dataFlow from "../assets/images/data_flow.png";
import nextLevel from "../assets/images/next_level.png";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 15 },
        position: "relative",
        background: "#0A0A0A",
        borderTop: "1px solid rgba(168, 168, 168, 0.1)",
        borderBottom: "1px solid rgba(168, 168, 168, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                fontWeight: 400,
                mb: 2,
                color: "#F5F5F5",
                letterSpacing: "-0.02em",
              }}
            >
              Portfolio
            </Typography>
            <Box
              sx={{
                width: "80px",
                height: "1px",
                background: "#A8A8A8",
                mx: "auto",
                mb: 3,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Inter", sans-serif',
                color: "rgba(245, 245, 245, 0.6)",
                maxWidth: "600px",
                mx: "auto",
                fontSize: "1.1rem",
                fontWeight: 300,
                letterSpacing: "0.01em",
              }}
            >
              A curated selection of projects showcasing refined craftsmanship
              and attention to detail
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: { xs: 4, md: 6 },
            }}
          >
            {projects.map((project) => (
              <Box key={project.id}>
                <motion.div
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "transparent",
                      border: "1px solid rgba(168, 168, 168, 0.1)",
                      borderRadius: 0,
                      boxShadow: "none",
                      transition: "all 0.4s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: hoveredProject === project.id ? "100%" : "0%",
                        height: "1px",
                        background: "#A8A8A8",
                        transition: "width 0.4s ease",
                      },
                      "&:hover": {
                        borderColor: "rgba(168, 168, 168, 0.3)",
                        background: "rgba(168, 168, 168, 0.02)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 300,
                        position: "relative",
                        overflow: "hidden",
                        borderBottom: "1px solid rgba(168, 168, 168, 0.1)",
                        background: "#0A0A0A",
                      }}
                    >
                      {project.image ? (
                        <Box
                          component="img"
                          src={
                            project.id === 1
                              ? netanelPreview
                              : project.id === 2
                              ? apexStrategy
                              : project.id === 3
                              ? dataFlow
                              : project.id === 4
                              ? nextLevel
                              : project.image
                          }
                          alt={project.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform:
                              hoveredProject === project.id
                                ? "scale(1.05)"
                                : "scale(1)",
                            transition: "transform 0.4s ease",
                            opacity: hoveredProject === project.id ? 1 : 0.9,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                              hoveredProject === project.id
                                ? "rgba(168, 168, 168, 0.05)"
                                : "rgba(168, 168, 168, 0.02)",
                            transition: "background 0.4s ease",
                          }}
                        >
                          <Typography
                            variant="h3"
                            sx={{
                              fontFamily: '"Playfair Display", serif',
                              color:
                                hoveredProject === project.id
                                  ? "#F5F5F5"
                                  : "rgba(245, 245, 245, 0.7)",
                              fontWeight: 400,
                              fontSize: {
                                xs: "2rem",
                                sm: "2.5rem",
                                md: "3rem",
                              },
                              letterSpacing: "-0.02em",
                              transition: "color 0.4s ease",
                            }}
                          >
                            {project.title}
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: '"Inter", sans-serif',
                          color: "rgba(245, 245, 245, 0.65)",
                          mb: 3,
                          lineHeight: 1.8,
                          minHeight: "4rem",
                          fontSize: "1rem",
                          fontWeight: 300,
                          letterSpacing: "0.01em",
                        }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>

                    <CardActions sx={{ p: 4, pt: 0 }}>
                      <Button
                        startIcon={<Launch />}
                        variant="outlined"
                        href={project.liveUrl || "#"}
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: "#A8A8A8",
                          color: "#F5F5F5",
                          borderRadius: 0,
                          px: 4,
                          py: 1.5,
                          fontSize: "0.85rem",
                          fontWeight: 400,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          borderWidth: "1px",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: "#C0C0C0",
                            backgroundColor: "rgba(168, 168, 168, 0.05)",
                          },
                        }}
                      >
                        View Project
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
