import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
import {
  Code,
  Web,
  Palette,
  Business,
} from "@mui/icons-material";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const getIcon = (category?: string) => {
    const iconStyle = { fontSize: 32, color: "#A8A8A8" };
    switch (category) {
      case "Development":
        return <Code sx={iconStyle} />;
      case "Design":
        return <Palette sx={iconStyle} />;
      case "Business":
        return <Business sx={iconStyle} />;
      default:
        return <Web sx={iconStyle} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 15 },
        position: "relative",
        background: "#0A0A0A",
        borderTop: "1px solid rgba(168, 168, 168, 0.1)",
        borderBottom: "1px solid rgba(168, 168, 168, 0.1)",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, sm: 8, md: 10 } }}>
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
              Expertise
            </Typography>
            <Box
              sx={{
                width: { xs: "60px", sm: "70px", md: "80px" },
                height: "1px",
                background: "#A8A8A8",
                mx: "auto",
                mb: { xs: 2, sm: 2.5, md: 3 },
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Inter", sans-serif',
                color: "rgba(245, 245, 245, 0.6)",
                maxWidth: "600px",
                mx: "auto",
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                fontWeight: 300,
                letterSpacing: "0.01em",
                px: { xs: 2, sm: 0 },
              }}
            >
              Core capabilities I bring to create exceptional digital
              experiences
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
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)" },
              gap: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {skills.map((skill) => (
              <Box key={skill.id}>
                <motion.div
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      p: { xs: 2.5, sm: 3, md: 4 },
                      border: "1px solid rgba(168, 168, 168, 0.1)",
                      background:
                        hoveredSkill === skill.id
                          ? "rgba(168, 168, 168, 0.03)"
                          : "transparent",
                      transition: "all 0.4s ease",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: hoveredSkill === skill.id ? "100%" : "0%",
                        height: "1px",
                        background: "#A8A8A8",
                        transition: "width 0.4s ease",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mb: { xs: 2, sm: 2.5, md: 3 },
                        transition: "transform 0.4s ease",
                        transform:
                          hoveredSkill === skill.id ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      {getIcon(skill.category)}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 400,
                        color:
                          hoveredSkill === skill.id
                            ? "#F5F5F5"
                            : "rgba(245, 245, 245, 0.8)",
                        textAlign: "center",
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                        letterSpacing: "0.05em",
                        transition: "color 0.4s ease",
                      }}
                    >
                      {skill.name}
                    </Typography>
                    {skill.category && (
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: '"Inter", sans-serif',
                          color: "rgba(245, 245, 245, 0.4)",
                          fontSize: "0.7rem",
                          fontWeight: 300,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          mt: 1,
                        }}
                      >
                        {skill.category}
                      </Typography>
                    )}
                  </Box>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
