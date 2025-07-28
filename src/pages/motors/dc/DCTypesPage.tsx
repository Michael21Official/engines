import React from 'react';
import {
    Typography,
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {
    ElectricBolt as HighTorqueIcon,
    Speed as SpeedIcon,
    Settings as ControlIcon,
    Build as ConstructionIcon,
    Warning as LimitationsIcon
} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';

// Import obrazów
import szeregowy from '../../../../public/images/dc/silnik_szeregowy.png';
import bocznikowy from '../../../../public/images/dc/silnik_bocznikowy.png';
import uniwersalny from '../../../../public/images/dc/silnik_uniwersalny.png';
import compound from '../../../../public/images/dc/silnik_compound.png';
import bldc from '../../../../public/images/dc/silnik_bldc.png';

const DCTypesPage: React.FC = () => {
    const motorTypes = [
        {
            name: 'Silnik szeregowy',
            image: szeregowy,
            description: 'Uzwojenie wzbudzenia połączone szeregowo z twornikiem.',
            connectionDiagram: 'Szeregowe połączenie uzwojenia wzbudzenia i twornika',
            characteristics: [
                'Bardzo duży moment rozruchowy',
                'Prędkość silnie zależna od obciążenia',
                'Tendencja do "uciekania" przy małych obciążeniach',
                'Prosta konstrukcja'
            ],
            applications: [
                'Rozruszniki samochodowe',
                'Windy i dźwigi',
                'Lokomotywy elektryczne',
                'Urządzenia wymagające dużego momentu rozruchowego'
            ],
            advantages: [
                'Wysoki moment rozruchowy (do 500% momentu nominalnego)',
                'Prosta konstrukcja',
                'Dobra charakterystyka przy dużych obciążeniach'
            ],
            disadvantages: [
                'Niestabilna prędkość przy zmiennym obciążeniu',
                'Ryzyko uszkodzenia przy pracy bez obciążenia',
                'Wymaga zabezpieczeń przed rozbieganiem'
            ],
            speedControl: 'Regulacja napięcia zasilania lub rezystancji w obwodzie twornika',
            tags: ['wysoki moment', 'rozruch', 'transport']
        },
        {
            name: 'Silnik bocznikowy',
            image: bocznikowy,
            description: 'Uzwojenie wzbudzenia połączone równolegle z twornikiem.',
            connectionDiagram: 'Równoległe połączenie uzwojenia wzbudzenia i twornika',
            characteristics: [
                'Stabilna prędkość obrotowa',
                'Mniejszy moment rozruchowy niż silnik szeregowy',
                'Niezależna regulacja prędkości i momentu',
                'Możliwość pracy bez obciążenia'
            ],
            applications: [
                'Obrabiarki',
                'Wentylatory i pompy',
                'Maszyny drukarskie',
                'Urządzenia wymagające stałej prędkości'
            ],
            advantages: [
                'Stabilna prędkość obrotowa (±5-10%)',
                'Dobra regulacja prędkości',
                'Bezpieczna praca przy małych obciążeniach',
                'Wysoka sprawność'
            ],
            disadvantages: [
                'Mniejszy moment rozruchowy (150-200% momentu nominalnego)',
                'Bardziej złożona konstrukcja niż silnik szeregowy',
                'Wrażliwość na zmiany napięcia wzbudzenia'
            ],
            speedControl: 'Regulacja napięcia twornika lub prądu wzbudzenia',
            tags: ['stabilna prędkość', 'precyzja', 'przemysł']
        },
        {
            name: 'Silnik uniwersalny',
            image: uniwersalny,
            description: 'Może pracować zarówno na prąd stały jak i zmienny.',
            connectionDiagram: 'Połączenie szeregowe, podobne do silnika szeregowego DC',
            characteristics: [
                'Wysoka prędkość obrotowa (do 30 000 obr/min)',
                'Duży moment rozruchowy',
                'Kompaktowa konstrukcja',
                'Stosunkowo mała trwałość'
            ],
            applications: [
                'Odkurzacze',
                'Miksery i blendery',
                'Wiertarki elektryczne',
                'Maszyny do szycia',
                'Małe urządzenia AGD'
            ],
            advantages: [
                'Uniwersalne zasilanie (AC/DC)',
                'Wysoka prędkość obrotowa',
                'Kompaktowe rozmiary',
                'Niski koszt produkcji'
            ],
            disadvantages: [
                'Zużycie szczotek i komutatora',
                'Hałas podczas pracy',
                'Ograniczona żywotność',
                'Generowanie zakłóceń elektromagnetycznych'
            ],
            speedControl: 'Regulacja napięcia lub sterowanie fazowe (dla AC)',
            tags: ['uniwersalny', 'AGD', 'wysoka prędkość']
        },
        {
            name: 'Silnik compound (obcowzbudny)',
            image: compound,
            description: 'Połączenie cech silnika szeregowego i bocznikowego.',
            connectionDiagram: 'Połączenie mieszane uzwojeń wzbudzenia',
            characteristics: [
                'Duży moment rozruchowy',
                'Lepsza stabilność prędkości niż silnik szeregowy',
                'Złożona konstrukcja',
                'Dwie cewki wzbudzenia'
            ],
            applications: [
                'Prasy i walcarki',
                'Podnośniki',
                'Urządzenia wymagające dużego momentu i stabilnej prędkości',
                'Systemy napędowe o zmiennym obciążeniu'
            ],
            advantages: [
                'Kompromis między momentem rozruchowym a stabilnością',
                'Dobra charakterystyka mechaniczna',
                'Mniejsze ryzyko rozbiegania niż silnik szeregowy'
            ],
            disadvantages: [
                'Złożona konstrukcja',
                'Wyższy koszt produkcji',
                'Wymaga precyzyjnego dostrojenia'
            ],
            speedControl: 'Regulacja napięcia twornika lub stosunku wzbudzenia',
            tags: ['hybryda', 'przemysł', 'duży moment']
        },
        {
            name: 'Silnik BLDC (bezszczotkowy)',
            image: bldc,
            description: 'Nowoczesny silnik prądu stałego bez komutatora mechanicznego.',
            connectionDiagram: 'Sterowanie elektroniczne z czujnikami Halla',
            characteristics: [
                'Brak szczotek i komutatora',
                'Wysoka sprawność',
                'Cicha praca',
                'Wymaga elektroniki sterującej'
            ],
            applications: [
                'Drony i modele RC',
                'Wentylatory komputerowe',
                'Napędy elektryczne w pojazdach',
                'Precyzyjne systemy pozycjonowania'
            ],
            advantages: [
                'Długa żywotność (brak zużywających się części)',
                'Wysoka sprawność (do 95%)',
                'Precyzyjna kontrola prędkości',
                'Niskie zakłócenia elektromagnetyczne'
            ],
            disadvantages: [
                'Wysoki koszt',
                'Wymaga złożonego sterownika',
                'Ograniczona dostępność zamienników'
            ],
            speedControl: 'Sterowanie PWM z kontrolą fazową',
            tags: ['nowoczesny', 'precyzja', 'elektronika']
        }
    ];

    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Rodzaje Silników Prądu Stałego
            </Typography>

            <Typography paragraph sx={{ mb: 4 }}>
                Silniki prądu stałego dzielą się na kilka podstawowych typów różniących się budową, charakterystyką pracy
                i zastosowaniami. Wybór odpowiedniego typu zależy od wymagań dotyczących momentu rozruchowego,
                stabilności prędkości obrotowej i warunków eksploatacji.
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                {motorTypes.map((type, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.02)',
                                boxShadow: 6
                            }
                        }}>
                            <CardMedia
                                component="img"
                                height="220"
                                image={type.image}
                                alt={type.name}
                                sx={{ objectFit: 'contain', p: 2 }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {type.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    {type.description}
                                </Typography>

                                <Box sx={{ mb: 2 }}>
                                    {type.tags.map((tag, i) => (
                                        <Chip
                                            key={i}
                                            label={tag}
                                            size="small"
                                            sx={{ mr: 1, mb: 1 }}
                                        />
                                    ))}
                                </Box>

                                <Accordion sx={{ mb: 1 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>Charakterystyka i zastosowania</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <List dense>
                                            <ListItem>
                                                <ListItemIcon>
                                                    {/* <ElectricBoltIcon fontSize="small" /> */}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="Moment rozruchowy"
                                                    secondary={type.characteristics[0]}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <SpeedIcon fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="Charakterystyka prędkości"
                                                    secondary={type.characteristics[1]}
                                                />
                                            </ListItem>
                                            <Divider component="li" />
                                            <Typography variant="subtitle2" sx={{ mt: 1 }}>
                                                Główne zastosowania:
                                            </Typography>
                                            {type.applications.map((app, i) => (
                                                <ListItem key={i} sx={{ pl: 4 }}>
                                                    <ListItemText secondary={`• ${app}`} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ mb: 1 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>Zalety i wady</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={6}>
                                                <Typography variant="subtitle2" color="success.main">
                                                    Zalety:
                                                </Typography>
                                                <List dense>
                                                    {type.advantages.map((adv, i) => (
                                                        <ListItem key={i} sx={{ pl: 4 }}>
                                                            <ListItemText secondary={`✓ ${adv}`} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Typography variant="subtitle2" color="error.main">
                                                    Wady:
                                                </Typography>
                                                <List dense>
                                                    {type.disadvantages.map((dis, i) => (
                                                        <ListItem key={i} sx={{ pl: 4 }}>
                                                            <ListItemText secondary={`✗ ${dis}`} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>Sterowanie i regulacja</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body2">
                                            <strong>Metoda regulacji prędkości:</strong> {type.speedControl}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            <strong>Schemat połączeń:</strong> {type.connectionDiagram}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{
                p: 3,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: 1,
                mt: 4
            }}>
                <Typography variant="h5" gutterBottom>
                    Podsumowanie charakterystyk
                </Typography>
                <Typography paragraph>
                    Każdy typ silnika DC ma unikalne właściwości, które determinują jego zastosowanie:
                </Typography>

                <List>
                    <ListItem>
                        <ListItemIcon>
                            <HighTorqueIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Silniki szeregowe"
                            secondary="Najlepsze do aplikacji wymagających dużego momentu rozruchowego"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SpeedIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Silniki bocznikowe"
                            secondary="Idealne gdy potrzebna jest stabilna prędkość obrotowa"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ControlIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Silniki uniwersalne"
                            secondary="Uniwersalne zastosowanie w urządzeniach AGD i narzędziach"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ConstructionIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Silniki compound"
                            secondary="Kompromis między momentem rozruchowym a stabilnością"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            {/* <SettingsIcon color="primary" /> */}
                        </ListItemIcon>
                        <ListItemText
                            primary="Silniki BLDC"
                            secondary="Nowoczesne rozwiązanie do precyzyjnych aplikacji"
                        />
                    </ListItem>
                </List>

                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                    Wybór odpowiedniego silnika zależy od konkretnych wymagań aplikacji, w tym potrzebnego momentu obrotowego,
                    zakresu prędkości, warunków pracy i budżetu.
                </Typography>
            </Box>
        </Box>
    );
};

export default DCTypesPage;