import React from 'react';
import { Typography, Box, TextField, Button, Paper } from '@mui/material';

const Contact: React.FC = () => (
  <Box>
    <Typography variant="h3" component="h1" gutterBottom>
      Contact Me
    </Typography>
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <form>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          required
          type="email"
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
        >
          Send Message
        </Button>
      </form>
    </Paper>
  </Box>
);

export default Contact;