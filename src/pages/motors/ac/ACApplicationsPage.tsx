import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import wentylatorKan from '../../../../public/images/ac/async_wentylator_kanalowy.jpg';
import generatorSync from '../../../../public/images/ac/generator_wiatrowy_sync.jpg';
import pralkaJednofazowa from '../../../../public/images/ac/jednofazowy_pralka.jpg';
import sprezarkaTrojfazowa from '../../../../public/images/ac/trojfazowy_duza_sprezarka.jpg';
import indAsync from '../../../../public/images/ac/ac_silnik_ind_async.jpg';
import indSync from '../../../../public/images/ac/ac_silnik_ind_sync.jpg';
import jednofazowy from '../../../../public/images/ac/ac_silnik_jednofazowy.jpg';
import trojfazowy from '../../../../public/images/ac/ac_silnik_trojfazowy.jpg';
import rotorImg from '../../../../public/images/ac/rotors_przykład.png';
import statorImg from '../../../../public/images/ac/stator_przyklad.png';

const ACApplicationsPage: React.FC = () => {
    const acApplications = [
        {
            image: wentylatorKan,
            title: 'Wentylator kanałowy',
            description: 'Silnik asynchroniczny AC napędza wentylatory w systemach wentylacji przemysłowej i domowej.'
        },
        {
            image: generatorSync,
            title: 'Generator wiatrowy synchroniczny',
            description: 'Silnik synchroniczny AC wykorzystywany jako generator w elektrowniach wiatrowych.'
        },
        {
            image: pralkaJednofazowa,
            title: 'Pralka jednofazowa',
            description: 'Silnik jednofazowy AC stosowany w urządzeniach AGD, takich jak pralki.'
        },
        {
            image: sprezarkaTrojfazowa,
            title: 'Duża sprężarka trójfazowa',
            description: 'Silnik trójfazowy AC napędza sprężarki w zakładach przemysłowych.'
        },
        {
            image: indAsync,
            title: 'Silnik indukcyjny asynchroniczny',
            description: 'Najczęściej stosowany silnik AC w napędach maszyn, pomp, wentylatorów.'
        },
        {
            image: indSync,
            title: 'Silnik indukcyjny synchroniczny',
            description: 'Stosowany w napędach wymagających precyzyjnej synchronizacji, np. generatory.'
        },
        {
            image: jednofazowy,
            title: 'Silnik jednofazowy',
            description: 'Wykorzystywany w małych urządzeniach domowych, np. wentylatory, miksery.'
        },
        {
            image: trojfazowy,
            title: 'Silnik trójfazowy',
            description: 'Podstawa napędu w przemyśle, stosowany w dużych maszynach i urządzeniach.'
        },
        {
            image: rotorImg,
            title: 'Rotor silnika AC',
            description: 'Część wirująca silnika AC, przekazuje energię mechaniczną.'
        },
        {
            image: statorImg,
            title: 'Stator silnika AC',
            description: 'Część nieruchoma silnika AC, generuje pole magnetyczne.'
        }
    ];

    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Zastosowania Silników AC
            </Typography>
            <Typography paragraph>
                Silniki AC są szeroko stosowane w przemyśle, wentylatorach, pompach, sprężarkach, urządzeniach AGD i wielu innych aplikacjach wymagających niezawodnego napędu. Poniżej przykłady zastosowań wraz z ilustracjami:
            </Typography>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>Przykładowe zastosowania</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                    {acApplications.map((app, idx) => (
                        <Box key={idx} sx={{ boxShadow: 2, borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
                            <img src={app.image} alt={app.title} style={{ width: '100%', maxHeight: 180, objectFit: 'contain', borderRadius: 8 }} />
                            <Typography variant="subtitle1" align="center" sx={{ mt: 1 }}>{app.title}</Typography>
                            <Typography variant="body2" align="center">{app.description}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ACApplicationsPage;