import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import silnikBLDC from '../../../../public/images/dc/silnik_bldc.png';
import silnikSzeregowy from '../../../../public/images/dc/silnik_szeregowy.png';
import silnikBocznikowy from '../../../../public/images/dc/silnik_bocznikowy.png';
import silnikUniwersalny from '../../../../public/images/dc/silnik_uniwersalny.png';
import komutator from '../../../../public/images/dc/komutator.png';
import szczotkiWeglowe from '../../../../public/images/dc/szczotki_weglowe.png';
import rotor from '../../../../public/images/dc/rotor.png';
import stojan from '../../../../public/images/dc/stojan.png';
import motorInside from '../../../../public/images/dc/a_Motor_Inside1.jpg';
import electricMotorGif from '../../../../public/images/dc/Electric_motor.gif';
import dcPrzekrojGif from '../../../../public/images/dc/a_DC_przekroj.gif';
import dcKomutatorJpg from '../../../../public/images/dc/a_DC_komutator.jpg';
import mikser from '../../../../public/images/dc/mikser.jpg';
import wiertarka from '../../../../public/images/dc/wiertarka.png';
import dron from '../../../../public/images/dc/dron.png';
import winda from '../../../../public/images/dc/winda.jpg';

const DCApplicationsPage: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Zastosowania Silników DC
            </Typography>
            <Typography paragraph>
                Silniki prądu stałego są szeroko wykorzystywane w wielu dziedzinach techniki i przemysłu. Poniżej przedstawiono przykładowe zastosowania wraz z ilustracjami:
            </Typography>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>Przykładowe zastosowania</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                    <Box>
                        <img src={motorInside} alt="Wnętrze silnika DC" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Wnętrze silnika DC</Typography>
                        <Typography variant="body2" align="center">Typowe zastosowanie: napędy precyzyjne, robotyka</Typography>
                    </Box>
                    <Box>
                        <img src={electricMotorGif} alt="Silnik DC w ruchu" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Silnik DC w ruchu</Typography>
                        <Typography variant="body2" align="center">Typowe zastosowanie: wentylatory, pompy, zabawki</Typography>
                    </Box>
                    <Box>
                        <img src={silnikBLDC} alt="Silnik BLDC" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Silnik BLDC</Typography>
                        <Typography variant="body2" align="center">Typowe zastosowanie: pojazdy elektryczne, drony</Typography>
                    </Box>
                    <Box>
                        <img src={silnikSzeregowy} alt="Silnik szeregowy" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Silnik szeregowy</Typography>
                        <Typography variant="body2" align="center">Typowe zastosowanie: narzędzia elektryczne, wiertarki</Typography>
                    </Box>
                    <Box>
                        <img src={silnikBocznikowy} alt="Silnik bocznikowy" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Silnik bocznikowy</Typography>
                        <Typography variant="body2" align="center">Typowe zastosowanie: windy, dźwigi</Typography>
                    </Box>
                    <Box>
                        <img src={silnikUniwersalny} alt="Silnik uniwersalny" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Silnik uniwersalny</Typography>
                        <Typography variant="body2" align="center">Typowe zastosowanie: AGD, miksery</Typography>
                    </Box>
                    <Box>
                        <img src={mikser} alt="Mikser" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Mikser</Typography>
                        <Typography variant="body2" align="center">Urządzenie AGD wykorzystujące silnik DC</Typography>
                    </Box>
                    <Box>
                        <img src={wiertarka} alt="Wiertarka" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Wiertarka</Typography>
                        <Typography variant="body2" align="center">Narzędzie elektryczne z silnikiem DC</Typography>
                    </Box>
                    <Box>
                        <img src={dron} alt="Dron" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Dron</Typography>
                        <Typography variant="body2" align="center">Pojazd latający z napędem DC (BLDC)</Typography>
                    </Box>
                    <Box>
                        <img src={winda} alt="Winda" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Winda</Typography>
                        <Typography variant="body2" align="center">Urządzenie transportowe z silnikiem DC</Typography>
                    </Box>
                    <Box>
                        <img src={komutator} alt="Komutator" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Komutator</Typography>
                        <Typography variant="body2" align="center">Element silnika DC, zmiana kierunku prądu</Typography>
                    </Box>
                    <Box>
                        <img src={szczotkiWeglowe} alt="Szczotki węglowe" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Szczotki węglowe</Typography>
                        <Typography variant="body2" align="center">Element silnika DC, przekazanie prądu</Typography>
                    </Box>
                    <Box>
                        <img src={rotor} alt="Rotor" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Rotor</Typography>
                        <Typography variant="body2" align="center">Część wirująca silnika DC</Typography>
                    </Box>
                    <Box>
                        <img src={stojan} alt="Stojan" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Stojan</Typography>
                        <Typography variant="body2" align="center">Część nieruchoma silnika DC</Typography>
                    </Box>
                    <Box>
                        <img src={dcPrzekrojGif} alt="Przekrój silnika DC" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Przekrój silnika DC</Typography>
                        <Typography variant="body2" align="center">Budowa wewnętrzna silnika DC</Typography>
                    </Box>
                    <Box>
                        <img src={dcKomutatorJpg} alt="Komutator DC" style={{ width: '100%', maxHeight: 180, objectFit: 'contain' }} />
                        <Typography variant="subtitle1" align="center">Komutator DC</Typography>
                        <Typography variant="body2" align="center">Zastosowanie w sterowaniu silnikiem</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DCApplicationsPage;