import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';

const ACTypesPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Rodzaje Silników AC
            </Typography>
            <Typography paragraph>
                Do najpopularniejszych rodzajów silników AC należą silniki indukcyjne, synchroniczne, jednofazowe i trójfazowe. Różnią się one budową oraz zastosowaniem.
            </Typography>
        </Box>
    );
};

export default ACTypesPage;