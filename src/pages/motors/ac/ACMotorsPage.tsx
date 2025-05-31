import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import { Link } from 'react-router-dom';

const ACMotorsPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Silniki Prądu Przemiennego (AC)
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Budowa silników AC
                            </Typography>
                            <Typography paragraph>
                                Poznaj elementy składowe silników prądu przemiennego, takie jak stojan, wirnik, obudowa, wał i wentylator.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/motors/ac/construction"
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
                                Dowiedz się, jak pole magnetyczne i prąd przemienny powodują ruch obrotowy wirnika w silniku AC.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/motors/ac/operation"
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
                                Rodzaje silników AC
                            </Typography>
                            <Typography paragraph>
                                Poznaj różne rodzaje silników prądu przemiennego, takie jak indukcyjne, synchroniczne, jednofazowe i trójfazowe.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/motors/ac/types"
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
                                Odkryj zastosowania silników prądu przemiennego w przemyśle, gospodarstwie domowym i transporcie.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/motors/ac/applications"
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

export default ACMotorsPage;