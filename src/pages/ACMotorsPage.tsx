import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';
import { Link } from 'react-router-dom';

const ACMotorsPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Silniki Prądu Przemiennego (AC)
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                Podkategorie
            </Typography>

            <List>
                <ListItem button component={Link} to="/motors/ac/induction">
                    <ListItemText primary="1. Silniki indukcyjne" />
                </ListItem>
                <ListItem button component={Link} to="/motors/ac/synchronous">
                    <ListItemText primary="2. Silniki synchroniczne" />
                </ListItem>
                <ListItem button component={Link} to="/motors/ac/three-phase">
                    <ListItemText primary="3. Silniki trójfazowe" />
                </ListItem>
                <ListItem button component={Link} to="/motors/ac/single-phase">
                    <ListItemText primary="4. Silniki jednofazowe" />
                </ListItem>
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Charakterystyka
            </Typography>
            <Typography paragraph>
                Silniki AC dominują w zastosowaniach przemysłowych dzięki wysokiej sprawności i niezawodności.
            </Typography>
        </Box>
    );
};

export default ACMotorsPage;