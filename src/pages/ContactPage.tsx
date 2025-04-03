import React from 'react';
import { Typography } from '@mui/material';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Kontakt
      </Typography>
      <Typography paragraph>
        Tutaj znajdziesz informacje kontaktowe.
      </Typography>
    </div>
  );
};

export default ContactPage;