import React from 'react';
import { Typography } from '@mui/material';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';

const MachinesPage: React.FC = () => {
  return (
    <div>
      <BreadcrumbsComponent />
      <Typography variant="h4" gutterBottom>
        Maszyny Elektryczne
      </Typography>
      <Typography variant="h5" gutterBottom>
        Silniki
      </Typography>
      <Typography paragraph>
        Silniki są najczęściej spotykanymi maszynami elektrycznymi.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Generatory
      </Typography>
      <Typography paragraph>
        Generatory przekształcają energię mechaniczną w elektryczną.
      </Typography>
    </div>
  );
};

export default MachinesPage;