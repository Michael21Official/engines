import React from 'react';
import { Typography } from '@mui/material';

const ResourcesPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Zasoby
      </Typography>
      <Typography paragraph>
        Tutaj znajdziesz linki do zasobów zewnętrznych.
      </Typography>
    </div>
  );
};

export default ResourcesPage;