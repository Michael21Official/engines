import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';
import { Link } from 'react-router-dom';

const DCMotorsPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Silniki Prądu Stałego (DC)
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                Podkategorie
            </Typography>

            <List>
                <ListItem button component={Link} to="/motors/dc/construction">
                    <ListItemText primary="1. Budowa silników DC" />
                </ListItem>
                <ListItem button component={Link} to="/motors/dc/operation">
                    <ListItemText primary="2. Zasada działania" />
                </ListItem>
                <ListItem button component={Link} to="/motors/dc/types">
                    <ListItemText primary="3. Rodzaje silników DC" />
                </ListItem>
                <ListItem button component={Link} to="/motors/dc/applications">
                    <ListItemText primary="4. Zastosowania" />
                </ListItem>
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Podstawowe informacje
            </Typography>
            <Typography paragraph>
                Silniki prądu stałego charakteryzują się liniową charakterystyką momentu i prostą kontrolą prędkości.
            </Typography>
        </Box>
    );
};

export default DCMotorsPage;