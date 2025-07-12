import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';
import { Link } from 'react-router-dom';

const tiles = [
  {
    title: "Podstawy",
    desc: "Dowiedz się, czym są silniki elektryczne, jak działają i jakie mają znaczenie w technice.",
    to: "/basics",
  },
  {
    title: "Silniki DC",
    desc: "Poznaj budowę, zasadę działania, rodzaje i zastosowania silników prądu stałego.",
    to: "/motors/dc",
  },
  {
    title: "Silniki AC",
    desc: "Odkryj świat silników prądu przemiennego – ich konstrukcję, typy i zastosowania.",
    to: "/motors/ac",
  },
  {
    title: "Maszyny elektryczne",
    desc: "Zobacz inne maszyny elektryczne, takie jak transformatory czy prądnice.",
    to: "/machines",
  },
  {
    title: "Materiały i źródła",
    desc: "Sprawdź dodatkowe materiały, prezentacje i źródła wiedzy.",
    to: "/resources",
  },
];

const HomePage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <BreadcrumbsComponent />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Witaj na stronie o silnikach elektrycznych!
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography paragraph>
          Ta strona została stworzona, aby przybliżyć Ci podstawy działania, budowy i zastosowania silników elektrycznych.
        </Typography>
        <Typography paragraph>
          Znajdziesz tu zarówno wiedzę teoretyczną, jak i praktyczne przykłady oraz interaktywne wizualizacje.
          Przejdź przez kolejne sekcje, aby dowiedzieć się więcej o różnych typach silników, ich konstrukcji, zasadzie działania oraz zastosowaniach w przemyśle i codziennym życiu.
        </Typography>
        <Typography paragraph>
          Każda podstrona zawiera szczegółowe opisy, ilustracje, animacje oraz materiały dodatkowe, które pomogą Ci lepiej zrozumieć tematykę maszyn elektrycznych.
        </Typography>
      </motion.div>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {tiles.map((tile, idx) => (
          <Grid item xs={12} sm={6} md={4} key={tile.to}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
            >
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {tile.title}
                  </Typography>
                  <Typography paragraph>
                    {tile.desc}
                  </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to={tile.to}
                    sx={{ mt: 2 }}
                    fullWidth
                  >
                    Przejdź
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;