import React from 'react';
import { Typography, Box } from '@mui/material';
import BreadcrumbsComponent from '../../../components/BreadcrumbsComponent';
import indAsync from '../../../../public/images/ac/ac_silnik_ind_async.jpg';
import indSync from '../../../../public/images/ac/ac_silnik_ind_sync.jpg';
import jednofazowy from '../../../../public/images/ac/ac_silnik_jednofazowy.jpg';
import trojfazowy from '../../../../public/images/ac/ac_silnik_trojfazowy.jpg';
import rotorImg from '../../../../public/images/ac/rotors_przykład.png';
import statorImg from '../../../../public/images/ac/stator_przyklad.png';

const ACTypesPage: React.FC = () => {
    const acTypes = [
        {
            name: 'Silnik indukcyjny asynchroniczny',
            image: indAsync,
            description: 'Najpopularniejszy typ silnika AC, stosowany w przemyśle i gospodarstwie domowym. Wirnik nie obraca się z prędkością pola magnetycznego.',
            applications: ['Pompy', 'Wentylatory', 'Przenośniki', 'Sprężarki']
        },
        {
            name: 'Silnik indukcyjny synchroniczny',
            image: indSync,
            description: 'Wirnik obraca się z prędkością synchroniczną względem pola magnetycznego. Wysoka precyzja i stabilność obrotów.',
            applications: ['Generatory', 'Napędy precyzyjne', 'Maszyny tekstylne']
        },
        {
            name: 'Silnik jednofazowy',
            image: jednofazowy,
            description: 'Stosowany w urządzeniach domowych, zasilany z sieci jednofazowej. Prosta konstrukcja, mniejsza moc.',
            applications: ['Lodówki', 'Pralki', 'Małe wentylatory', 'Narzędzia AGD']
        },
        {
            name: 'Silnik trójfazowy',
            image: trojfazowy,
            description: 'Wysoka sprawność i moc, stosowany w przemyśle. Zasilany z sieci trójfazowej.',
            applications: ['Maszyny przemysłowe', 'Dźwigi', 'Kompresory', 'Duże wentylatory']
        },
        {
            name: 'Rotor (przykład)',
            image: rotorImg,
            description: 'Część wirująca silnika AC, odpowiedzialna za przekazywanie energii mechanicznej.',
            applications: ['Wszystkie typy silników AC']
        },
        {
            name: 'Stator (przykład)',
            image: statorImg,
            description: 'Część nieruchoma silnika AC, generuje pole magnetyczne.',
            applications: ['Wszystkie typy silników AC']
        }
    ];

    return (
        <Box sx={{ p: 3 }}>
            <BreadcrumbsComponent />
            <Typography variant="h4" gutterBottom>
                Rodzaje Silników AC
            </Typography>
            <Typography paragraph sx={{ mb: 4 }}>
                Silniki prądu przemiennego (AC) dzielą się na kilka podstawowych typów, które różnią się budową, zasadą działania i zastosowaniem. Poniżej przedstawiono najważniejsze rodzaje wraz z ilustracjami:
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>Typy silników AC</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                    {acTypes.map((type, idx) => (
                        <Box key={idx} sx={{ boxShadow: 2, borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
                            <img src={type.image} alt={type.name} style={{ width: '100%', maxHeight: 180, objectFit: 'contain', borderRadius: 8 }} />
                            <Typography variant="subtitle1" align="center" sx={{ mt: 1 }}>{type.name}</Typography>
                            <Typography variant="body2" align="center" sx={{ mb: 1 }}>{type.description}</Typography>
                            <Typography variant="caption" align="center" sx={{ display: 'block', fontWeight: 500 }}>Przykładowe zastosowania:</Typography>
                            <ul style={{ textAlign: 'center', paddingLeft: 0, margin: '8px 0 0 0', listStyle: 'none' }}>
                                {type.applications.map((app, i) => (
                                    <li key={i} style={{ fontSize: '0.95em', marginBottom: 2 }}>• {app}</li>
                                ))}
                            </ul>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
                <Typography variant="h5" gutterBottom>Podsumowanie</Typography>
                <Typography paragraph>
                    Silniki AC są podstawą nowoczesnej techniki napędowej. Wybór odpowiedniego typu zależy od wymagań aplikacji, dostępnego zasilania oraz oczekiwanej sprawności i trwałości.
                </Typography>
                <ul style={{ marginLeft: 16 }}>
                    <li><strong>Indukcyjne asynchroniczne:</strong> uniwersalne, tanie, wytrzymałe</li>
                    <li><strong>Indukcyjne synchroniczne:</strong> precyzyjne, stabilne, stosowane w napędach wymagających synchronizacji</li>
                    <li><strong>Jednofazowe:</strong> do małych urządzeń domowych</li>
                    <li><strong>Trójfazowe:</strong> do dużych maszyn przemysłowych</li>
                </ul>
                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                    Każdy typ silnika AC ma swoje zalety i ograniczenia – dobór zależy od konkretnego zastosowania.
                </Typography>
            </Box>
        </Box>
    );
};

export default ACTypesPage;