import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';

const ACOperationPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Zasada Działania Silników AC
            </Typography>
            <Typography paragraph>
                Silniki AC działają na zasadzie indukcji elektromagnetycznej. Prąd przemienny wytwarza wirujące pole magnetyczne w stojanie, które powoduje obrót wirnika.
            </Typography>
        </Box>
    );
};

export default ACOperationPage;