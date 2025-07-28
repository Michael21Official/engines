import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import useMediaQuery from '@mui/material/useMediaQuery';

const ACConstructionPage: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Budowa Silników AC
            </Typography>
            <Typography paragraph>
                Silniki prądu przemiennego składają się z takich elementów jak stojan, wirnik, obudowa, wał, łożyska oraz wentylator. Każdy z tych elementów pełni kluczową rolę w pracy silnika.
            </Typography>
            <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="body2" color="textSecondary">
                    <Box sx={{ backgroundColor: '#f5f5f5', p: 1, borderRadius: 1, mb: 2, height: { xs: 300, sm: 400, md: 500 }, minHeight: 200 }}>
                        <iframe
                            src="https://sketchfab.com/models/b02c98e04e614d97897e3dababb70bc8/embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: 8, display: 'block' }}
                            allowFullScreen
                            title="Induction Motor Cutaway"
                        />
                    </Box>

                    <strong>Induction Motor Cutaway</strong><br /><br />
                    Cutaway of a three-phase induction motor with annotations.<br /><br />

                    3D model created and textured in 3ds Max using Photoshop and Substance Source textures.<br /><br />

                    Published in 3dsmax
                </Typography>
            </Box>
            <Typography paragraph sx={{ textAlign: 'justify' }}>
                Model 3D przedstawia typową budowę silnika AC.
            </Typography>
        </Box >
    );
};

export default ACConstructionPage;