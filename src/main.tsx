import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./index.css";
import App from "./App.tsx";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A8A8A8",
      dark: "#7A7A7A",
      light: "#D0D0D0",
    },
    secondary: {
      main: "#C0C0C0",
    },
    background: {
      default: "#0A0A0A",
      paper: "#111111",
    },
    text: {
      primary: "#F5F5F5",
      secondary: "rgba(245, 245, 245, 0.65)",
    },
  },
  typography: {
    fontFamily:
      '"Playfair Display", "Inter", "Roboto", "Helvetica", "Arial", serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 300,
      letterSpacing: "0.01em",
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 300,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "2px",
          fontWeight: 400,
          letterSpacing: "0.05em",
          padding: "12px 32px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          boxShadow: "none",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
