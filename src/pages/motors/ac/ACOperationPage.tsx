import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import ACSimulation3D from '../../../components/ACSimulation3D';
import useMediaQuery from '@mui/material/useMediaQuery';

const ACOperationPage: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Zasada Działania Silników AC
            </Typography>
            <Typography paragraph>
                Silniki AC działają na zasadzie indukcji elektromagnetycznej. Prąd przemienny wytwarza wirujące pole magnetyczne w stojanie, które powoduje obrót wirnika.
            </Typography>
            <Box
                sx={{
                    height: isMobile ? 500 : 1000,
                    mt: 2,
                }}
            >
                Generator AC
                <ACSimulation3D />
            </Box>
        </Box>
    );
};

export default ACOperationPage;