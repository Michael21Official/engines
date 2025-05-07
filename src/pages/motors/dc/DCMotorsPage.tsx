import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import { Link } from 'react-router-dom';

const DCMotorsPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Silniki Prądu Stałego (DC)
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Budowa silników DC
                            </Typography>
                            <Typography paragraph>
                                Poznaj elementy składowe silników prądu stałego, takie jak wirnik, stojan, komutator i szczotki.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/motors/dc/construction"
                                sx={{ mt: 2 }}
                            >
                                Dowiedz się więcej
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Zasada działania
                            </Typography>
                            <Typography paragraph>
                                Dowiedz się, jak pole magnetyczne i prąd elektryczny powodują ruch obrotowy wirnika.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/motors/dc/operation"
                                sx={{ mt: 2 }}
                            >
                                Dowiedz się więcej
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Rodzaje silników DC
                            </Typography>
                            <Typography paragraph>
                                Poznaj różne rodzaje silników prądu stałego, takie jak szeregowe, bocznikowe i uniwersalne.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/motors/dc/types"
                                sx={{ mt: 2 }}
                            >
                                Dowiedz się więcej
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Zastosowania
                            </Typography>
                            <Typography paragraph>
                                Odkryj zastosowania silników prądu stałego w różnych urządzeniach i pojazdach.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/motors/dc/applications"
                                sx={{ mt: 2 }}
                            >
                                Dowiedz się więcej
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DCMotorsPage;