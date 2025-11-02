import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email,
  LinkedIn,
  GitHub,
  Twitter,
} from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    { icon: <Email />, url: '#', label: 'Email' },
    { icon: <LinkedIn />, url: '#', label: 'LinkedIn' },
    { icon: <GitHub />, url: '#', label: 'GitHub' },
    { icon: <Twitter />, url: '#', label: 'Twitter' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        background: '#0A0A0A',
        borderTop: '1px solid rgba(168, 168, 168, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ cursor: 'pointer' }}
            >
              <Typography
                variant="h3"
                onClick={scrollToTop}
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 400,
                  color: '#A8A8A8',
                  letterSpacing: '0.05em',
                  mb: 4,
                  cursor: 'pointer',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: '1px',
                    background: '#A8A8A8',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                MCD webs
              </Typography>
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
                  color: 'rgba(245, 245, 245, 0.8)',
                  textAlign: 'center',
                  mb: 6,
                  fontWeight: 300,
                  letterSpacing: '0.05em',
                  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                }}
              >
                Let's create something <Box component="span" sx={{ color: '#A8A8A8' }}>exceptional</Box> together
              </Typography>
            </motion.div>

            <Box
              sx={{
                display: 'flex',
                gap: 3,
                mb: 8,
                flexWrap: 'wrap',
                justifyContent: 'center',
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
                      color: 'rgba(245, 245, 245, 0.6)',
                      width: 56,
                      height: 56,
                      border: '1px solid rgba(168, 168, 168, 0.2)',
                      borderRadius: 0,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#F5F5F5',
                        borderColor: '#A8A8A8',
                        backgroundColor: 'rgba(168, 168, 168, 0.05)',
                      },
                      '& svg': {
                        fontSize: '1.5rem',
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
                borderTop: '1px solid rgba(168, 168, 168, 0.1)',
                width: '100%',
                pt: 5,
                textAlign: 'center',
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
                    color: 'rgba(245, 245, 245, 0.4)',
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                  }}
                >
                  © {new Date().getFullYear()} MCD webs. All rights reserved.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    color: 'rgba(245, 245, 245, 0.3)',
                    mt: 1.5,
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
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
