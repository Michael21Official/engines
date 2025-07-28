import React from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import DCSimulation3D from '../../../components/DCSimulation3D';

// Import lokalnych obrazów
import stojan from '../../../../public/images/dc/stojan.png';
import komutator from '../../../../public/images/dc/komutator.png';
import szczotki from '../../../../public/images/dc/szczotki_weglowe.png';
import rotor from '../../../../public/images/dc/rotor.png';
import bocznikowy from '../../../../public/images/dc/silnik_bocznikowy.png';
import szeregowy from '../../../../public/images/dc/silnik_szeregowy.png';
import uniwersalny from '../../../../public/images/dc/silnik_uniwersalny.png';
import motor_inside from '../../../../public/images/dc/a_Motor_Inside1.jpg';
import a_DC_komutator from '../../../../public/images/dc/a_DC_komutator.jpg';
import a_DC_przekroj from '../../../../public/images/dc/a_DC_przekroj.gif';

const DCConstructionPage: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    // Zunifikowane dane o częściach silnika
    const motorData = {
        generalInfo: {
            title: "Budowa i Zasada Działania Silników Prądu Stałego (DC)",
            description: "Prawdziwe silniki prądu stałego są bardziej skomplikowane niż ich podstawowe modele. Zwykle zamiast magnesów stałych stosuje się elektromagnesy, które wytwarzają znacznie silniejsze pole magnetyczne. Uzwojenie wirnika posiada wiele zwojów, a komutator jest złożoną konstrukcją. Mimo tych różnic, podstawowa zasada działania pozostaje taka sama."
        },
        crossSection: {
            title: "Przekrój silnika DC",
            image: a_DC_przekroj,
            description: "Przekrój pokazujący współdziałanie wszystkich elementów silnika DC."
        },
        parts: [
            {
                name: 'Stojan (Stator)',
                description: 'Nieruchoma część silnika wykonana jako żeliwny lub staliwny odlew z biegunami głównymi i pomocniczymi.',
                details: [
                    'Zawiera uzwojenia wzbudzenia wytwarzające pole magnetyczne',
                    'Posiada bieguny pomocnicze z uzwojeniem eliminujące niekorzystne zjawiska',
                    'Nabiegunnik (część bieguna) kieruje strumień magnetyczny'
                ],
                image: stojan
            },
            {
                name: 'Wirnik (Rotor)',
                description: 'Obracająca się część silnika zawierająca uzwojenia twornika.',
                details: [
                    'Wykonany w kształcie walca z żłobkami na uzwojenie',
                    'Rdzeń z pakietowanych blach dla lepszych właściwości magnetycznych',
                    'Uzwojenie zabezpieczone specjalnymi klinami'
                ],
                image: rotor
            },
            {
                name: 'System komutacji',
                description: 'Zespół elementów zapewniający zmianę kierunku prądu w uzwojeniach.',
                details: [
                    'Komutator z miedzianych segmentów odizolowanych od siebie',
                    'Szczotki węglowe przewodzące prąd do obracającego się komutatora',
                    'Typowe problemy: zużycie szczotek i iskrzenie'
                ],
                image: a_DC_komutator
            }
        ],
        motorTypes: [
            {
                name: 'Silnik szeregowy',
                description: 'Uzwojenie wzbudzenia połączone szeregowo z twornikiem.',
                image: szeregowy,
                applications: 'Windy, dźwigi, lokomotywy elektryczne, rozruszniki samochodowe',
                characteristics: 'Duży moment rozruchowy, prędkość zależna od obciążenia'
            },
            {
                name: 'Silnik bocznikowy',
                description: 'Uzwojenie wzbudzenia połączone równolegle z twornikiem.',
                image: bocznikowy,
                applications: 'Obrabiarki, wentylatory, pompy, maszyny drukarskie',
                characteristics: 'Stabilna prędkość obrotowa, niezależna regulacja'
            },
            {
                name: 'Silnik uniwersalny',
                description: 'Może pracować zarówno na prąd stały jak i zmienny.',
                image: uniwersalny,
                applications: 'Miksery, odkurzacze, wiertarki elektryczne',
                characteristics: 'Wysoka prędkość, mniejsza trwałość'
            }
        ],
        operationPrinciple: {
            title: "Zasada działania",
            description: "W silniku komutatorowym prądu stałego uzwojenie wzbudzenia znajduje się w stojanie, natomiast uzwojenie twornika w wirniku. Komutator pełni rolę prostownika mechanicznego. Pole magnetyczne wzbudzenia uzyskuje się przez zasilanie uzwojeń stojana prądem stałym.",
            image: motor_inside,
            imageCaption: "Wnętrze współczesnego silnika prądu stałego"
        },
        faqs: [
            {
                question: "Dlaczego w silnikach DC stosuje się elektromagnesy zamiast magnesów trwałych?",
                answer: "Elektromagnesy pozwalają na uzyskanie znacznie silniejszego pola magnetycznego niż magnesy trwałe. Dodatkowo, możliwość regulacji prądu wzbudzenia daje większą kontrolę nad parametrami pracy silnika. Magnesy trwałe byłyby też znacznie droższe w przypadku silników o większych mocach."
            },
            {
                question: "Jakie są główne wady silników komutatorowych?",
                answer: "Główne wady to: konieczność okresowej wymiany szczotek węglowych, iskrzenie na komutatorze, ograniczona prędkość obrotowa, hałas podczas pracy oraz generowanie zakłóceń elektromagnetycznych. Te problemy są minimalizowane w nowoczesnych silnikach bezszczotkowych (BLDC)."
            },
            {
                question: "Do czego służą bieguny pomocnicze w silniku DC?",
                answer: "Bieguny pomocnicze wraz z ich uzwojeniami służą do kompensacji niekorzystnych zjawisk związanych z oddziaływaniem wirnika na pole magnetyczne. Zmniejszają one efekt reakcji twornika, poprawiają komutację i redukują iskrzenie na szczotkach."
            }
        ]
    };

    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                {motorData.generalInfo.title}
            </Typography>

            <Typography paragraph>
                {motorData.generalInfo.description}
            </Typography>

            <Box sx={{ height: isMobile ? 500 : 1000, mt: 2, mb: 4 }}>
                <DCSimulation3D />
            </Box>

            {/* Sekcja z przekrojem silnika */}
            <Box sx={{ mb: 4, p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Przekrój silnika DC
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 3 }}>
                    <Box sx={{ flex: 1 }}>
                        <img
                            src={a_DC_przekroj}
                            alt="Przekrój silnika DC"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography paragraph>
                            <strong>Wirnik</strong> silnika prądu stałego wykonany jest w kształcie walca z żłobkami, w których umieszczone jest uzwojenie. Rdzeń żłobka wykonany jest z pakietowanych blach dla lepszych właściwości magnetycznych.
                        </Typography>
                        <Typography paragraph>
                            <strong>Stojan</strong> wykonany jest jako żeliwny lub staliwny odlew z biegunami głównymi i pomocniczymi. Nabiegunnik (część bieguna najbliższa osi) jest szerszy od reszty bieguna.
                        </Typography>
                        <Typography paragraph>
                            <strong>Uzwojenie wirnika</strong> to przewody miedziane ułożone w żłobkach wirnika. Gdy przepływa przez nie prąd, w polu magnetycznym stojana wytwarzany jest moment obrotowy.
                        </Typography>
                        <Typography paragraph>
                            <strong>Komutator</strong> to zespół miedzianych segmentów połączonych z uzwojeniem wirnika. Jego rolą jest zmiana kierunku prądu w uzwojeniach tak, aby moment obrotowy był zawsze w tym samym kierunku.
                        </Typography>
                        <Typography paragraph>
                            <strong>Szczotki</strong> (zwykle węglowe) przewodzą prąd z zewnętrznego obwodu do obracającego się komutatora, umożliwiając przepływ prądu przez uzwojenie wirnika.
                        </Typography>
                        <Typography paragraph>
                            <strong>Biegun główny</strong> to elektromagnes tworzący główne pole magnetyczne w szczelinie powietrznej. Pracuje w parze z uzwojeniem głównym.
                        </Typography>
                        <Typography paragraph>
                            <strong>Uzwojenie główne</strong> znajduje się na biegunach głównych i generuje pole magnetyczne niezbędne do działania silnika.
                        </Typography>
                        <Typography paragraph>
                            <strong>Biegun pomocniczy</strong> (lub uzwojenie pomocnicze) wspiera proces komutacji – wygładza zmiany pola magnetycznego w trakcie przełączania prądu, redukując iskrzenie.
                        </Typography>
                        <Typography paragraph>
                            <strong>Nabiegunnik</strong> to rozszerzona część bieguna stojana, która kieruje strumień magnetyczny do szczeliny powietrznej – jego szerokość pomaga uzyskać równomierne pole magnetyczne.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ mb: 4, p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Komutator silnika prądu stałego
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 3 }}>
                    <Box sx={{ flex: 1 }}>
                        <img
                            src={a_DC_przekroj}
                            alt="Komutator silnika prądu stałego"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography paragraph>
                            <strong>Wycinek komutatora</strong> to jeden z wielu miedzianych segmentów ułożonych wokół osi wirnika. Każdy segment połączony jest z końcówką uzwojenia wirnika. Segmenty są od siebie odizolowane, aby umożliwić kontrolowane przełączanie prądu podczas obrotu.
                        </Typography>
                        <Typography paragraph>
                            <strong>Izolacja</strong> (zwykle wykonana z miki lub innego materiału dielektrycznego) oddziela poszczególne segmenty komutatora. Dzięki niej nie dochodzi do zwarć pomiędzy segmentami, mimo ich bliskiego ułożenia i kontaktu z obracającym się elementem.
                        </Typography>
                        <Typography paragraph>
                            Komutator pełni kluczową rolę w zapewnianiu jednokierunkowego momentu obrotowego. Działa razem ze szczotkami, które dostarczają prąd do odpowiednich uzwojeń wirnika w odpowiednim czasie.
                        </Typography>
                    </Box>
                </Box>
            </Box>



            {/* Szczegółowy opis budowy */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Szczegółowa budowa silnika DC
            </Typography>
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {motorData.parts.map((part, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: isMobile ? '100%' : 200, height: 200 }}
                                    image={part.image}
                                    alt={part.name}
                                />
                                <Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6">
                                            {part.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {part.description}
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                                            {part.details.map((detail, idx) => (
                                                <Typography key={idx} variant="body2" component="li">
                                                    {detail}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Zasada działania */}
            <Box sx={{ mb: 4, p: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    {motorData.operationPrinciple.title}
                </Typography>
                <Typography paragraph>
                    {motorData.operationPrinciple.description}
                </Typography>
                <Box sx={{ textAlign: 'center', my: 3 }}>
                    <img
                        src={motorData.operationPrinciple.image}
                        alt={motorData.operationPrinciple.title}
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                    <Typography variant="caption" display="block" gutterBottom>
                        {motorData.operationPrinciple.imageCaption}
                    </Typography>
                </Box>
            </Box>

            {/* FAQ */}
            <Typography variant="h5" gutterBottom>
                Najczęstsze pytania
            </Typography>
            {motorData.faqs.map((faq, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {faq.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default DCConstructionPage;