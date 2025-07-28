import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import { motion } from 'framer-motion';

import motor from '../../../../public/images/dc/Electric_motor.gif';

const DCOperationPage: React.FC = () => {
    return (
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Zasada Działania Silników Prądu Stałego (DC)
            </Typography>

            <Typography paragraph>
                Silniki prądu stałego przekształcają energię elektryczną w mechaniczną dzięki zjawisku elektromagnetyzmu. Ich działanie opiera się na fundamentalnej zasadzie, że przewodnik z prądem umieszczony w polu magnetycznym doświadcza działania siły elektrodynamicznej.
            </Typography>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Box sx={{ backgroundColor: '#f5f5f5', p: 3, borderRadius: 2, mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
                        Podstawowa zasada działania
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ height: '100%' }}>
                                <Box
                                    sx={{
                                        height: 300,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        p: 2
                                    }}
                                >
                                    <img
                                        src={motor}
                                        width="90%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        title="Zasada działania silnika DC"
                                    />
                                </Box>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Animacja przedstawiająca zasadę działania siły elektrodynamicznej w silniku DC
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography paragraph>
                                <strong>Prawo siły elektrodynamicznej (Lorentza):</strong> Gdy przewodnik z prądem znajduje się w polu magnetycznym, działa na niego siła prostopadła zarówno do kierunku prądu, jak i do kierunku pola magnetycznego.
                            </Typography>

                            <Typography paragraph sx={{ fontStyle: 'italic' }}>
                                F = B × I × L
                            </Typography>

                            <Typography paragraph>
                                gdzie:<br />
                                F - siła [N]<br />
                                B - indukcja magnetyczna [T]<br />
                                I - natężenie prądu [A]<br />
                                L - długość przewodnika w polu magnetycznym [m]
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
                        Proces działania silnika DC krok po kroku
                    </Typography>

                    <Grid container spacing={3}>
                        {[
                            {
                                step: "1",
                                title: "Zasilanie uzwojeń",
                                description: "Prąd stały przepływa przez uzwojenia twornika (wirnika) poprzez szczotki i komutator."
                            },
                            {
                                step: "2",
                                title: "Powstawanie pola magnetycznego",
                                description: "Przepływ prądu przez uzwojenia wytwarza wokół nich pole magnetyczne."
                            },
                            {
                                step: "3",
                                title: "Oddziaływanie pól magnetycznych",
                                description: "Pole magnetyczne wirnika oddziałuje z polem magnetycznym stojana (magnesy trwałe lub elektromagnesy)."
                            },
                            {
                                step: "4",
                                title: "Powstawanie momentu obrotowego",
                                description: "W wyniku oddziaływania pól powstaje moment obrotowy powodujący obrót wirnika."
                            },
                            {
                                step: "5",
                                title: "Komutacja",
                                description: "Komutator zmienia kierunek prądu w uzwojeniach gdy wirnik przekracza neutralne położenie."
                            },
                            {
                                step: "6",
                                title: "Ciągły obrót",
                                description: "Proces powtarza się, zapewniając ciągły ruch obrotowy wirnika."
                            }
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ height: '100%', p: 2 }}>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        Krok {item.step}: {item.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.description}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ backgroundColor: '#f5f5f5', p: 3, borderRadius: 2, mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
                        Wizualizacja 3D budowy i działania
                    </Typography>

                    <Box
                        sx={{
                            height: 500,
                            borderRadius: 2,
                            overflow: 'hidden',
                            mb: 2
                        }}
                    >
                        <iframe
                            src="https://sketchfab.com/models/afa32b4585e54f748b6abf0b171b96ae/embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            title="Silnik DC - model 3D"
                        />
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        Interaktywny model 3D przedstawiający budowę i zasadę działania silnika prądu stałego
                    </Typography>
                </Box>

                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
                    Często zadawane pytania
                </Typography>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Dlaczego silnik DC potrzebuje komutatora?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Komutator jest kluczowym elementem silnika DC, który odwraca kierunek prądu w uzwojeniach wirnika w odpowiednim momencie obrotu. Dzięki temu moment obrotowy działa zawsze w tym samym kierunku, umożliwiając ciągły obrót wirnika.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Jakie są główne zalety silników DC?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Główne zalety to: precyzyjna kontrola prędkości, wysoki moment rozruchowy, liniowa charakterystyka prędkości, możliwość pracy w szerokim zakresie prędkości oraz stosunkowo prosta regulacja parametrów pracy.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Jakie są typowe problemy w silnikach DC?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Najczęstsze problemy to: zużycie szczotek i komutatora (wymagające okresowej konserwacji), iskrzenie na komutatorze, nagrzewanie się uzwojeń, zmniejszanie się momentu obrotowego przy wysokich prędkościach. Nowoczesne silniki bezszczotkowe (BLDC) eliminują wiele z tych problemów.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </motion.div>
        </Box>
    );
};

export default DCOperationPage;