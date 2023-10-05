const MOVIE_SAMPLES = [
  {
    id: 980489,
    language: 'en',
    title: 'Gran Turismo',
    releasedate: '2023-08-09',
    overview: 'En gejmer från arbetarklassen, en misslyckad före detta racerförare och en idealistisk motorsportschef riskerar allt för att ta sig an den tuffaste sporten i världen.',
    poster: 'https://image.tmdb.org/t/p/w500/2cExvbCum8TPacO8SSaLmE41Yn8.jpg',
    background: 'https://image.tmdb.org/t/p/original/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg',
  },
  {
    id: 565770,
    language: 'en',
    title: 'Blue Beetle',
    releasedate: '2023-08-16',
    overview:
      'Nyutexaminerade Jaime Reyes återvänder hem med höga ambitioner inför framtiden, bara för att upptäcka att hemmet inte är riktigt som han lämnade det. Medan han söker efter sin plats i världen, ingriper ödet när Jaime oväntat hamnar i besittning av en urgammal artefakt av utomjordisk bioteknik: Skarabén. När Skarabén plötsligt väljer Jaime som sin symbiotiska värd, blir han utrustad med en otrolig rustning som har extraordinära och oförutsägbara krafter. Detta förändrar för alltid hans öde när han blir superhjälten Blue Beetle.',
    poster: 'https://image.tmdb.org/t/p/w500/xzXdyFygjKsnWFQviUAM9lAhSU4.jpg',
    background: 'https://image.tmdb.org/t/p/original/1syW9SNna38rSl9fnXwc9fP7POW.jpg',
  },
  {
    id: 678512,
    language: 'en',
    title: 'Sound of Freedom',
    releasedate: '2023-07-03',
    overview:
      'Sound of Freedom bygger på en sann historia om en amerikansk agent som ständigt sätter sitt liv på spel för att krossa traffickingligor specialiserade på barn. Men det svåraste är inte att sätta dit ligorna, det svåraste är att finna och rädda deras unga offer. Med mottot ”Guds barn är inte till salu” gör han och hans män ännu ett tillslag och lyckas rädda en liten mexikansk pojke. Efter att ha fått reda på att även pojkens syster kidnappats brister hans hjärta. Han kan inte släppa det. Vetskapen förtär honom inifrån. Han måste finna henne, till varje pris. Ett löfte som för honom och hans män på en farligare resa än någonsin – in i Columbias gerillaterritorier…',
    poster: 'https://image.tmdb.org/t/p/w500/aOi75Op88EeZkkvwDY51ALbs4DM.jpg',
    background: 'https://image.tmdb.org/t/p/original/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg',
  },
  {
    id: 968051,
    language: 'en',
    title: 'The Nun II',
    releasedate: '2023-09-06',
    overview: 'Frankrike år 1956. En präst mördas. En ondska sprider sig. Syster Irene hamnar återigen öga mot öga med Valak, demonnunnan.',
    poster: 'https://image.tmdb.org/t/p/w500/4VlM5oZkXRGCjB02N5k6vPFVKiV.jpg',
    background: 'https://image.tmdb.org/t/p/original/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg',
  },
  {
    id: 615656,
    language: 'en',
    title: 'Meg 2: The Trench',
    releasedate: '2023-08-02',
    overview:
      'Jonas Taylor leder ett djärvt forskarlag på en utforskande dykning till de djupaste delarna av havet. Deras resa utvecklas till kaos när hänsynslös gruvdrift hotar deras uppdrag och tvingar dem in i en strid för överlevnad. Konfronterade med kolossala megalodoner och obevekliga miljöförstörare måste forskarna överlista och fly från sina skoningslösa motståndare i en kamp mot klockan.',
    poster: 'https://image.tmdb.org/t/p/w500/7b2CXmMMg1gRrkhuh6dJkPp3ZbS.jpg',
    background: 'https://image.tmdb.org/t/p/original/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg',
  },
  {
    id: 385687,
    language: 'en',
    title: 'Fast X',
    releasedate: '2023-05-17',
    overview:
      'Efter alla uppdrag och mot omöjliga odds har Dom Toretto och hans familj varit smartare, modigare och mer drivna än alla sina fiender. Nu kommer de att möta sin dödligaste motståndare hittills. Ett skrämmande hot, som drivs av blodshämnd, träder fram ur det förflutnas skuggor, fast besluten att slita sönder familjen och förgöra allt - och alla - som Dom älskar, för alltid.',
    poster: 'https://image.tmdb.org/t/p/w500/dYhbTNtz9ix8F95YeiG8H6KsDGn.jpg',
    background: 'https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
  },
];

export const getAllMovies = () => {
  return MOVIE_SAMPLES;
};

export const getMovie = (id) => {
  return MOVIE_SAMPLES.find((m) => m.id === id);
};
