import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import { motion } from "framer-motion";
import { Email, LinkedIn, GitHub, Twitter } from "@mui/icons-material";

const Footer = () => {
  const socialLinks = [
    { icon: <Email />, url: "#", label: "Email" },
    { icon: <LinkedIn />, url: "#", label: "LinkedIn" },
    { icon: <GitHub />, url: "#", label: "GitHub" },
    { icon: <Twitter />, url: "#", label: "Twitter" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 15 },
        position: "relative",
        background: "#0A0A0A",
        borderTop: "1px solid rgba(168, 168, 168, 0.1)",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: 4, sm: 5, md: 6 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ cursor: "pointer" }}
              onClick={scrollToTop}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: "12px", sm: "14px", md: "16px" },
                  mb: { xs: 3, sm: 3.5, md: 4 },
                  flexDirection: { xs: "column", sm: "row" },
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: "1px",
                    background: "#A8A8A8",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                <Box
                  component="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  sx={{
                    width: { xs: 40, sm: 48, md: 64 },
                    height: { xs: 40, sm: 48, md: 64 },
                    color: "#A8A8A8",
                  }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <g
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <circle cx="50" cy="50" r="6" fill="currentColor" />
                    <line x1="50" y1="44" x2="50" y2="30" />
                    <circle cx="50" cy="24" r="6" fill="currentColor" />
                    <line x1="56" y1="50" x2="70" y2="50" />
                    <circle cx="76" cy="50" r="6" fill="currentColor" />
                    <line x1="50" y1="56" x2="50" y2="70" />
                    <circle cx="50" cy="76" r="6" fill="currentColor" />
                    <line x1="44" y1="50" x2="30" y2="50" />
                    <circle cx="24" cy="50" r="6" fill="currentColor" />
                    <line x1="56" y1="44" x2="68" y2="32" />
                    <circle cx="72" cy="28" r="5" fill="currentColor" />
                    <line x1="44" y1="56" x2="32" y2="68" />
                    <circle cx="28" cy="72" r="5" fill="currentColor" />
                    <line x1="56" y1="56" x2="68" y2="68" />
                    <circle cx="72" cy="72" r="5" fill="currentColor" />
                    <line x1="44" y1="44" x2="32" y2="32" />
                    <circle cx="28" cy="28" r="5" fill="currentColor" />
                  </g>
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 400,
                    color: "#A8A8A8",
                    letterSpacing: "0.05em",
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  }}
                >
                  MCD webs
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  color: "rgba(245, 245, 245, 0.8)",
                  textAlign: "center",
                  mb: 6,
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                  fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                }}
              >
                Let's create something{" "}
                <Box component="span" sx={{ color: "#A8A8A8" }}>
                  exceptional
                </Box>{" "}
                together
              </Typography>
            </motion.div>

            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, sm: 2.5, md: 3 },
                mb: { xs: 6, sm: 7, md: 8 },
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    component={Link}
                    href={social.url}
                    target="_blank"
                    aria-label={social.label}
                    sx={{
                      color: "rgba(245, 245, 245, 0.6)",
                      width: { xs: 48, sm: 52, md: 56 },
                      height: { xs: 48, sm: 52, md: 56 },
                      border: "1px solid rgba(168, 168, 168, 0.2)",
                      borderRadius: 0,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#F5F5F5",
                        borderColor: "#A8A8A8",
                        backgroundColor: "rgba(168, 168, 168, 0.05)",
                      },
                      "& svg": {
                        fontSize: { xs: "1.25rem", sm: "1.375rem", md: "1.5rem" },
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>

            <Box
              sx={{
                borderTop: "1px solid rgba(168, 168, 168, 0.1)",
                width: "100%",
                pt: 5,
                textAlign: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    color: "rgba(245, 245, 245, 0.4)",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                  }}
                >
                  © {new Date().getFullYear()} MCD webs. All rights reserved.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    color: "rgba(245, 245, 245, 0.3)",
                    mt: 1.5,
                    fontSize: "0.8rem",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                  }}
                >
                  Website Builder & Developer
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
