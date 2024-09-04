import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: 'background.paper',
    }}
  >
    <Container maxWidth="sm">
      <Typography variant="body1" align="center" gutterBottom>
        Get in touch
      </Typography>
      <Box component="form" sx={{ mt: 1 }}>
        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          margin="normal"
          required
          type="email"
        />
        <TextField
          fullWidth
          label="Your Message"
          variant="outlined"
          margin="normal"
          required
          multiline
          rows={2}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Send
        </Button>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;