import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        pt: "80px",
        background: "#0A0A0A",
        borderBottom: "1px solid rgba(168, 168, 168, 0.1)",
      }}
    >
      {/* Subtle background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(168, 168, 168, 0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Elegant divider lines */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(168, 168, 168, 0.2), transparent)",
          transform: "translateY(-50%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(180deg, transparent, rgba(168, 168, 168, 0.2), transparent)",
          transform: "translateX(-50%)",
        }}
      />

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Elegant number indicator */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              display: { xs: "none", md: "block" },
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 400,
                  fontSize: "12rem",
                  color: "rgba(168, 168, 168, 0.05)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                01
              </Typography>
            </motion.div>
          </Box>

          <motion.div variants={itemVariants} style={{ width: "100%" }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: "3rem", sm: "4rem", md: "6rem", lg: "8rem" },
                fontWeight: 400,
                color: "#F5F5F5",
                mb: 2,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              MCD webs
            </Typography>
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{ width: "100%", marginTop: "1rem" }}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "100px", md: "120px" },
                height: "1px",
                background: "#A8A8A8",
                mx: "auto",
                mb: { xs: 3, sm: 3.5, md: 4 },
              }}
            />
          </motion.div>

          <motion.div variants={itemVariants} style={{ width: "100%" }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                fontWeight: 300,
                color: "rgba(245, 245, 245, 0.7)",
                mb: 2,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Website Builder Developer
            </Typography>
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{ width: "100%", maxWidth: "600px", padding: "0 16px" }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
                fontWeight: 300,
                color: "rgba(245, 245, 245, 0.6)",
                mb: { xs: 4, sm: 5, md: 6 },
                lineHeight: 1.8,
                letterSpacing: "0.01em",
              }}
            >
              Crafting elegant digital experiences with precision and artistry.
              Specialized in creating sophisticated, modern websites that
              resonate with discerning clients.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={scrollToSkills}
                sx={{
                  borderColor: "#A8A8A8",
                  color: "#F5F5F5",
                  px: { xs: 4, sm: 5, md: 6 },
                  py: { xs: 1.5, sm: 1.75, md: 2 },
                  fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  borderRadius: 0,
                  borderWidth: "1px",
                  transition: "all 0.3s ease",
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: { xs: "280px", sm: "none" },
                  "&:hover": {
                    borderColor: "#C0C0C0",
                    backgroundColor: "rgba(168, 168, 168, 0.05)",
                    borderWidth: "1px",
                  },
                }}
              >
                View Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
