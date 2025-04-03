import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';
import { Link } from 'react-router-dom';

const MotorsPage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <BreadcrumbsComponent />
      <Typography variant="h4" gutterBottom>
        Silniki Elektryczne
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Silniki Prądu Stałego (DC)
              </Typography>
              <Typography paragraph>
                Silniki o prostej konstrukcji i łatwej kontroli prędkości.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/motors/dc"
                sx={{ mt: 2 }}
              >
                Poznaj silniki DC
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Silniki Prądu Przemiennego (AC)
              </Typography>
              <Typography paragraph>
                Wysokosprawne silniki do zastosowań przemysłowych.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/motors/ac"
                sx={{ mt: 2 }}
              >
                Poznaj silniki AC
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MotorsPage;