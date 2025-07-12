import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';
import uchwyt from '../../public/images/pomoc-ilustracje/uchwyt.png';
import cewka from '../../public/images/pomoc-ilustracje/cewka.png';
import regulaLenza from '../../public/images/pomoc-ilustracje/regulaLenza.png';
import zasadaPrawejReki from '../../public/images/pomoc-ilustracje/zasada_prawej_reki.png';
import ModelViewer3D from '../components/ModelViewer3D';
import SingleObjectViewer3D from '../components/GLTFObject';


const BasicsPage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <BreadcrumbsComponent />

      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Podstawy Silników Elektrycznych
        </Typography>
      </motion.div>

      {/* Siła elektrodynamiczna */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 3, mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Siła elektrodynamiczna
          </Typography>
          <Typography paragraph>
            U podstaw działania silnika elektrycznego leży zjawisko powstawania siły elektrodynamicznej.
          </Typography>
          <Typography paragraph>
            W zależności od kierunku prądu płynącego w przewodniku jest on wypychany lub wciągany do wnętrza pola wytwarzanego przez magnes. Siłą odpowiedzialną za ruch przewodnika jest siła elektrodynamiczna.
          </Typography>
          <Typography paragraph>
            W celu lepszego zrozumienia jak to działa zapraszam do poniższego apletu.
          </Typography>

          {/* Informacja o aplecie */}
          <Box sx={{ backgroundColor: '#e3f2fd', p: 2, borderRadius: 1, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Używany aplet: <span style={{ color: "#1976d2" }}>Faraday's Electromagnetic Lab (PhET)</span>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Tematy:</strong> Prawo Faradaya, Pole magnetyczne, Magnesy
              <br />
              <strong>Przykładowe cele nauki:</strong>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Wyjaśnij, co się dzieje, gdy magnes porusza się przez cewkę z różną prędkością i jaki ma to wpływ na jasność żarówki oraz wartość i znak napięcia.</li>
                <li>Wyjaśnij różnicę między przesuwaniem magnesu przez cewkę z lewej strony a z prawej.</li>
                <li>Porównaj efekty przesuwania magnesu przez dużą cewkę i przez mniejszą cewkę.</li>
              </ul>
            </Typography>
          </Box>


          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Sterowanie apletem
          </Typography>

          <Box sx={{ backgroundColor: '#f5f5f5', p: 1, borderRadius: 1, mb: 2, height: { xs: 300, sm: 400, md: 500 }, minHeight: 200 }}>
            <iframe
              src="https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_pl.html"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 8, display: 'block' }}
              allowFullScreen
              title="Faraday's Lab"
            />
          </Box>

          <Typography paragraph>
            Siła elektrodynamiczna działa w kierunku prostopadłym do płaszczyzny utworzonej przez przewód z prądem i linie indukcji pola magnetycznego. Zwrot siły wyznaczamy stosując zasadę lewej dłoni (lub regułę śruby prawoskrętnej).
          </Typography>

          <Typography paragraph>
            Siła elektrodynamiczna to siła, z jaką pole magnetyczne działa na przewodnik, przez który płynie prąd elektryczny. Jest to przykład działania tzw. siły Lorentza w odniesieniu do całego przewodnika.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Zasada lewej dłoni
          </Typography>
          <Typography paragraph>
            Jeżeli lewą dłoń ustawimy w polu magnetycznym w taki sposób, że linie pola magnetycznego (od N do S) są skierowane do jej wewnętrznej strony, a wyprostowane palce wskazują kierunek przepływu prądu (od + do -), to odchylony kciuk wskaże kierunek działania siły elektrodynamicznej.
          </Typography>

          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
            <Typography variant="body2" color="textSecondary">
              <Box sx={{ backgroundColor: '#f5f5f5', p: 1, borderRadius: 1, mb: 2, height: { xs: 300, sm: 400, md: 500 }, minHeight: 200 }}>
                <ModelViewer3D path='/engines/models/simpleExaple/battery_magnetic_train/scene.gltf' background="black" />
              </Box>
            </Typography>
          </Box>


          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
            <Typography variant="body2" color="textSecondary">
              <Box sx={{ backgroundColor: '#f5f5f5', p: 1, borderRadius: 1, mb: 2, height: { xs: 300, sm: 400, md: 500 }, minHeight: 200 }}>
                <SingleObjectViewer3D
                  path="/engines/models/simpleExaple/battery_magnetic_train/scene.gltf"
                  objectNames={["hand1_0", "hand2_0", "hand3_0"]}
                  scale={[1, 1, 1]}
                />

              </Box>
            </Typography>
          </Box>

          <Typography paragraph>
            Wartość siły elektrodynamicznej jest wprost proporcjonalna do natężenia prądu płynącego w przewodniku i do długości odcinka przewodnika znajdującego się w polu magnetycznym.
          </Typography>

          <Typography paragraph sx={{ fontFamily: 'monospace', backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
            F = B · I · l · sin(α)
          </Typography>

          <Typography paragraph>
            <strong>F</strong> – siła elektrodynamiczna<br />
            <strong>B</strong> – indukcja magnetyczna<br />
            <strong>I</strong> – natężenie prądu w przewodniku<br />
            <strong>l</strong> – długość przewodnika, która znajduje się w polu magnetycznym<br />
            <strong>α</strong> – kąt pomiędzy kierunkiem prądu w przewodniku a kierunkiem linii pola magnetycznego
          </Typography>
        </Box>
      </motion.div>

      {/* Indukcja elektromagnetyczna */}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 3, mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Indukcja elektromagnetyczna
          </Typography>

          <Typography paragraph>
            Indukcja elektromagnetyczna to zjawisko fizyczne polegające na powstawaniu siły elektromotorycznej (SEM), a w zamkniętym obwodzie – również prądu, w wyniku zmiany strumienia pola magnetycznego przez powierzchnię obejmowaną przez ten obwód.
          </Typography>

          <Typography paragraph>
            Jeśli obok cewki (solenoidu) będziemy przesuwać magnes stały, w jej uzwojeniach zacznie płynąć prąd elektryczny. Natężenie tego prądu zależy od szybkości przesuwania magnesu i siły pola magnetycznego. Kierunek indukowanego prądu zmienia się wraz ze zmianą kierunku ruchu magnesu.
          </Typography>

          <Typography paragraph>
            Na poruszający się magnes działa wtedy siła oporu magnetycznego skierowana przeciwnie do jego ruchu. Jej źródłem jest pole magnetyczne wytworzone przez indukowany prąd – cewka staje się elektromagnesem, który przeciwdziała zmianie pola magnetycznego. Od strony wsuwanego bieguna magnesu cewka generuje biegun o tej samej nazwie – odpychając magnes. Gdy magnes wyciągamy, bieguny się przyciągają, próbując go zatrzymać.
          </Typography>

          <Typography paragraph>
            Oznacza to, że w każdym przypadku indukowany prąd działa w taki sposób, aby przeciwstawić się zmianie, która go wywołała. To zgodne z zasadą zachowania energii – aby prąd się pojawił, musimy wykonać pracę przeciw siłom pola magnetycznego.
          </Typography>

          <Typography paragraph>
            Całe to zjawisko można zinterpretować również jako bezpośrednią ilustrację prawa indukcji Faradaya, które mówi, że indukowana siła elektromotoryczna w obwodzie jest równa szybkości zmian strumienia pola magnetycznego przez ten obwód.
          </Typography>

          <Typography paragraph>
            <em>Zjawisko powstawania prądu indukcyjnego zilustruje doświadczenie zaprezentowane w poniższym aplecie.</em>
          </Typography>

          <Box sx={{ backgroundColor: '#e3f2fd', p: 2, borderRadius: 1, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Używany aplet: <span style={{ color: "#1976d2" }}>Generator (PhET)</span>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Tematy:</strong> Generator, Prawo Faradaya, Indukcja, Elektryczność, Pole magnetyczne
              <br />
              <strong>Przykładowe cele nauki:</strong>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Rozpoznaj warunki, które powodują indukcję.</li>
                <li>Porównaj, jak żarówka i woltomierz pokazują cechy prądu indukowanego.</li>
                <li>Przewiduj, jak zmieni się prąd indukowany przy zmianie warunków eksperymentu.</li>
                <li>Wyjaśnij przyczynę indukcji.</li>
              </ul>
            </Typography>
          </Box>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Sterowanie apletem
          </Typography>
          <Typography paragraph sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            Aby uruchomić aplet, pociągnij uchwyt:
            <img src={uchwyt} alt="uchwyt" style={{ height: 32, marginLeft: 8 }} />
          </Typography>
          <Box sx={{ backgroundColor: '#f5f5f5', p: 1, borderRadius: 1, mb: 2, height: { xs: 300, sm: 400, md: 500 }, minHeight: 200 }}>
            <iframe
              src="https://phet.colorado.edu/sims/html/generator/latest/generator_pl.html"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 8, display: 'block' }}
              allowFullScreen
              title="Faraday's Lab"
            />
          </Box>
          <Typography paragraph>
            Przesuwając magnes wewnątrz cewki, można obserwować wychylenie wskazówki amperomierza. Im szybciej porusza się magnes, tym większe wychylenie – czyli silniejszy prąd indukcyjny. Każda zmiana pola magnetycznego powoduje reakcję cewki w postaci przeciwdziałającego pola.
          </Typography>

          <Typography paragraph>
            Kierunek indukowanego prądu określa <strong>reguła Lenza</strong>.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Reguła Lenza
          </Typography>
          <Typography paragraph>
            Prąd indukcyjny płynie w takim kierunku, aby pole magnetyczne przez niego wytworzone przeciwdziałało przyczynie, która go wywołała (czyli zmianie strumienia pola magnetycznego).
          </Typography>
          <Box sx={{ backgroundColor: '#f5f5f5', p: 1, borderRadius: 1, mb: 2, height: { xs: 300, sm: 400, md: 500 }, minHeight: 200 }}>
            <iframe
              src="https://sketchfab.com/models/a0ef32002aa042cf9f80891e4e9d9533/embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 8, display: 'block' }}
              allowFullScreen
              title="Experiment on magnetic induction"
            />
          </Box>

          <Typography paragraph>
            W cewce indukuje się napięcie (SEM), a jeśli obwód jest zamknięty – pojawia się prąd. Zmiana pola magnetycznego może wynikać nie tylko z ruchu magnesu, ale też z ruchu samej cewki względem pola magnetycznego lub zmiany jego intensywności.
          </Typography>

          <Typography paragraph>
            Przykład: jeżeli odcinek przewodu (np. pojedynczy zwój) porusza się w polu magnetycznym, to zgodnie z prawem indukcji elektromagnetycznej, na jego końcach pojawia się napięcie – jeden koniec ma nadmiar, a drugi niedobór elektronów. To różnica potencjałów, czyli siła elektromotoryczna.
          </Typography>

          <Box sx={{ backgroundColor: '#e3f2fd', p: 2, borderRadius: 1, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Używany aplet: <span style={{ color: "#1976d2" }}>Laboratorium elektromagnetyczne Faradaya (PhET)</span>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Tematy:</strong> Prawo Faradaya, Reguła Lenza, Siła elektromotoryczna (SEM), Indukcja elektromagnetyczna
              <br />
              <strong>Przykładowe cele nauki:</strong>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Przewiduj kierunek pola magnetycznego wokół magnesu sztabkowego i elektromagnesu.</li>
                <li>Porównaj właściwości magnesów trwałych i elektromagnesów.</li>
                <li>Rozpoznaj zmienne właściwości elektromagnesu i ich wpływ na kierunek oraz siłę pola magnetycznego.</li>
                <li>Analizuj zależność siły pola magnetycznego od odległości — jakościowo i ilościowo.</li>
                <li>Identyfikuj warunki niezbędne do zajścia zjawiska indukcji.</li>
                <li>Porównuj, jak żarówka i woltomierz wskazują obecność i cechy prądu indukowanego.</li>
                <li>Przewiduj, jak zmieni się prąd indukowany w zależności od modyfikacji warunków eksperymentu.</li>
              </ul>
            </Typography>
          </Box>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Sterowanie apletem
          </Typography>

          <Typography paragraph sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            Aby uruchomić Laboratorium „Reguła Lenza”, wybierz początkowo <strong>Cewka</strong>:
            <img src={cewka} alt="Ikona uchwytu cewki" style={{ height: 52 }} />
          </Typography>

          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // jeden pod drugim na małych ekranach, obok siebie na większych
                gap: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* IFRAME */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: 300,
                  height: { xs: 300, sm: 400, md: 500 },
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src="https://phet.colorado.edu/sims/html/faradays-electromagnetic-lab/latest/faradays-electromagnetic-lab_pl.html"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  title="Experiment on magnetic induction"
                />
              </Box>

              {/* IMAGE */}
              <Box
                component="img"
                src={regulaLenza}
                alt="Reguła Lenza – ilustracja"
                sx={{
                  flex: 1,
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  borderRadius: 2,
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>


          <Box sx={{ backgroundColor: '#f5f5f5', p: 1, borderRadius: 1, mb: 2, height: { xs: 300, sm: 400, md: 500 }, minHeight: 200 }}>
            <iframe
              src="https://phet.colorado.edu/sims/html/faradays-electromagnetic-lab/latest/faradays-electromagnetic-lab_pl.html"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 8, display: 'block' }}
              allowFullScreen
              title="Experiment on magnetic induction"
            />
          </Box>


          <Typography paragraph>
            Poruszający się przewodnik przecina linie pola magnetycznego, co powoduje powstanie siły elektromotorycznej. Siła ta działa na swobodne elektrony w przewodniku, powodując ich przemieszczenie i wytworzenie napięcia.
          </Typography>

          <Typography paragraph>
            Wartość tego napięcia zależy od:
            <ul>
              <li>prędkości poruszania się przewodnika,</li>
              <li>długości odcinka przewodu w polu magnetycznym,</li>
              <li>wartości indukcji magnetycznej pola.</li>
            </ul>
          </Typography>

          <Typography paragraph>
            Jeżeli obwód nie jest zamknięty, prąd nie popłynie – obserwujemy jedynie obecność napięcia między końcami przewodu.
          </Typography>

          <Typography paragraph>
            Kierunek indukowanego napięcia można określić za pomocą <strong>reguły prawej ręki</strong>.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Zasada prawej ręki
          </Typography>
          <Typography paragraph>
            Ustaw prawą rękę tak, aby linie pola magnetycznego (od bieguna N do S) wchodziły do wnętrza dłoni, a kciuk wskazywał kierunek ruchu przewodu. Wtedy pozostałe palce wskazują zwrot indukującej się siły elektromotorycznej (SEM), czyli kierunek przepływu prądu.
          </Typography>

          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // jeden pod drugim na małych ekranach, obok siebie na większych
                gap: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* IFRAME */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: 300,
                  height: { xs: 300, sm: 400, md: 500 },
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src="https://sketchfab.com/models/fc4dac92f4344db188c37bc65a125288/embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  title="Determining the direction of the magnetic field of a direct current"
                />
              </Box>

              {/* IMAGE */}
              <Box
                component="img"
                src={zasadaPrawejReki}
                alt="Zasada prawej ręki – ilustracja"
                sx={{
                  flex: 1,
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  borderRadius: 2,
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>


          <Typography paragraph sx={{ fontFamily: 'monospace', backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
            e = B · l · v
          </Typography>

          <Typography paragraph>
            <strong>e</strong> – siła elektromotoryczna (V) <br />
            <strong>B</strong> – indukcja magnetyczna (T) <br />
            <strong>l</strong> – długość przewodnika w polu magnetycznym (m) <br />
            <strong>v</strong> – prędkość ruchu przewodnika (m/s)
          </Typography>

          <Typography paragraph>
            Indukcja elektromagnetyczna znajduje zastosowanie m.in. w prądnicach, transformatorach, mikrofonach dynamicznych oraz bezkontaktowym ładowaniu urządzeń elektronicznych. To jedno z kluczowych zjawisk umożliwiających przekształcanie energii mechanicznej w elektryczną.
          </Typography>
        </Box>
      </motion.div>


      {/* Dla bardziej zaawansowanych */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 3, mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Dla bardziej zaawansowanych
          </Typography>
          <Typography paragraph>
            Zmiany strumienia magnetycznego z cewką możemy uzyskać w dwojaki sposób, przez prąd zmienny płynący w uzwojeniu, lub przez ruch uzwojenia względem stałego lub zmiennego pola magnetycznego.
          </Typography>

          <Typography paragraph>
            Jeżeli skojarzony z cewką strumień magnetyczny zmienia się w czasie, w cewce tej indukuje się napięcie (SEM) którego wartość będzie zależała od szybkości zmian tego strumienia w czasie.
          </Typography>

          <Typography paragraph sx={{ fontFamily: 'monospace', backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
            e = -dΦ/dt
          </Typography>

          <Typography paragraph>
            <strong>e</strong> - siła elektromotoryczna<br />
            <strong>dΦ</strong> - przyrost strumienia magnetycznego skojarzonego z cewką<br />
            <strong>dt</strong> - przyrost czasu
          </Typography>

          <Typography paragraph>
            Zgodnie z regułą Lenza, znak tego napięcia będzie zawsze taki, aby prąd indukcyjny który popłynie pod jego wpływem tworzył strumień magnetyczny, który będzie się przeciwstawiał strumieniowi pierwotnemu.
          </Typography>

          <Typography paragraph>
            Ze względu na sposób powstawania siły elektromotorycznej możemy podzielić ją na dwa rodzaje. Jeżeli powstaje ona w wyniku umieszczenia zwojów w zmiennym polu magnetycznym, a uzwojenie nie wykonuje żadnego ruchu względem tego pola, wyindukowane w ten sposób napięcie nazywane jest napięciem transformacji. Natomiast, jeżeli napięcie indukuje się w wyniku ruchu uzwojeń w polu magnetycznym, nazywane jest napięciem rotacji. Nazwy te wzięły się od sposobu działania maszyn, w których wykorzystuje się zjawisko indukcji elektromagnetycznej: transformatorów (napięcie transformacji) i silników elektrycznych (napięcie rotacji).
          </Typography>

          <Typography paragraph>
            W ogólnym przypadku, gdy uzwojenie wykonuje ruch w zmiennym polu magnetycznym, siła elektromotoryczna składa się z dwóch członów: napięcia transformacji i napięcia rotacji.
          </Typography>

          <Typography paragraph sx={{ fontFamily: 'monospace', backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
            e = -dΦ/dt + B l v
          </Typography>

          <Typography paragraph>
            <strong>e</strong> - siła elektromotoryczna<br />
            <strong>dΦ</strong> - przyrost strumienia magnetycznego skojarzonego z cewką<br />
            <strong>dt</strong> - przyrost czasu<br />
            <strong>B</strong> - indukcja magnetyczna<br />
            <strong>l</strong> - długość przewodnika, która znajduje się w polu magnetycznym<br />
            <strong>v</strong> - prędkość z jaką porusza się przewodnik
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default BasicsPage;