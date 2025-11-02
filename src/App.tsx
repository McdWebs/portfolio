import { Box } from '@mui/material';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        overflowX: 'hidden',
      }}
    >
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </Box>
  );
}

export default App;
