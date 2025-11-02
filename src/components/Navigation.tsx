import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      setVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { label: "About", id: "hero" },
    { label: "Expertise", id: "skills" },
    { label: "Work", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const drawer = (
    <Box sx={{ width: 280, pt: 3, px: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            sx={{
              width: 32,
              height: 32,
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
            variant="h6"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: "#A8A8A8",
              letterSpacing: "0.05em",
            }}
          >
            MCD webs
          </Typography>
        </Box>
        <IconButton
          onClick={() => setMobileOpen(false)}
          sx={{ color: "#F5F5F5" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ gap: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => scrollToSection(item.id)}
              sx={{
                py: 2,
                px: 3,
                borderLeft: "2px solid transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderLeft: "2px solid #A8A8A8",
                  backgroundColor: "rgba(168, 168, 168, 0.05)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <AppBar
        position="relative"
        sx={{
          background: scrolled
            ? "rgba(10, 10, 10, 0.95)"
            : "rgba(10, 10, 10, 0.8)",
          backdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 1px 20px rgba(168, 168, 168, 0.1)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(168, 168, 168, 0.1)"
            : "none",
          transition: "all 0.4s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: 2,
              minHeight: "80px !important",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("hero")}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                sx={{
                  width: { xs: 32, sm: 40 },
                  height: { xs: 32, sm: 40 },
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
                variant="h6"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  color: "#A8A8A8",
                  letterSpacing: "0.1em",
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                }}
              >
                MCD webs
              </Typography>
            </motion.div>

            {isMobile ? (
              <IconButton
                edge="end"
                onClick={() => setMobileOpen(true)}
                sx={{
                  color: "#F5F5F5",
                  "&:hover": {
                    backgroundColor: "rgba(168, 168, 168, 0.1)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -2 }}
                    style={{ cursor: "pointer" }}
                  >
                    <Typography
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 400,
                        fontSize: "0.85rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#F5F5F5",
                        position: "relative",
                        pb: 0.5,
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "#A8A8A8",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
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
                      {item.label}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            background: "#0A0A0A",
            borderLeft: "1px solid rgba(168, 168, 168, 0.1)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </motion.div>
  );
};

export default Navigation;
