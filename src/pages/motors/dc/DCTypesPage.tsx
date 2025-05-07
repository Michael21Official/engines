import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';

const DCTypesPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Rodzaje Silników DC
            </Typography>
            <Typography paragraph>
                Istnieją różne rodzaje silników prądu stałego, takie jak silniki szeregowe, bocznikowe i uniwersalne, które różnią się budową i zastosowaniem.
            </Typography>
        </Box>
    );
};

export default DCTypesPage;