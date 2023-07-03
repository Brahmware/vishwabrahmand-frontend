const config = {
  defaultRotationSensitivity: 20,
  defaultRotation: 0,
  defaultNumberOfBrandsPerPage: 5,
  defaultStartPage: 1,
  defaultNewsPerPage: 12,
  letters: {
    en: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890-=+<>,./?[{()}]!@#$%^&*~`\\|_',
    sa: 'अआइईउऊऋॠऌॡएऐओऔंःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ1234567890।॥',
    hi: 'अआइईउऊऋॠऌॡएऐओऔंःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ1234567890।॥',
    bn: 'অআইঈউঊঋৠঌৡএঐওঔংঃকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলবশষসহক্ষত্রজ্ঞ1234567890।॥',
    or: 'ଅଆଇଈଉଊଋୠଌୡଏଐଓଔଂଃକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯରଲବଶଷସହକ୍ଷତ୍ରଜ୍ଞ1234567890।॥',
    te: 'అఆఇఈఉఊఋౠఌౡఏఐఓఔంఃకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహక్షత్రజ్ఞ1234567890।॥',
    ta: 'அஆஇஈஉஊஎஏஐஒஓஔஃக்கங்கச்சஞ்சட்டண்டத்தந்தப்பம்பய்யர்ரல்லவ்வழ்ழள்ளற்றன்னஜ்ஜஷ்ஷஸ்ஸஹ்ஹக்ஷ்க்ஷஸ்ர்ரஜ்ஜன்ன1234567890।॥',
    ml: 'അആഇഈഉഊഋൠഌൡഎഏഐഒഓഔംഃകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹക്ഷത്രജ്ഞ1234567890।॥',
    kn: 'ಅಆಇಈಉಊಋೠಌೡಎಏಐಒಓಔಂಃಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಕ್ಷತ್ರಜ್ಞ1234567890।॥',
  },
  page404Text: 'Page not found.',
  page404Link: 'Go back to home page',
  page404LinkUrl: '/',
  loadDelay: 1000 / 60,
  bgWallpapers: [
    '/images/homepage/homepage-background-1.webp',
    '/images/homepage/homepage-background-2.webp',
    '/images/homepage/homepage-background-3.webp',
    '/images/homepage/homepage-background-4.webp',
    '/images/homepage/homepage-background-5.webp',
    '/images/homepage/homepage-background-6.webp',
    '/images/homepage/homepage-background-7.webp',
    '/images/homepage/homepage-background-8.webp',
    '/images/homepage/homepage-background-9.webp',
    '/images/homepage/homepage-background-10.webp',
  ],
  languageIsoCodes: {
    'sanskrit': 'sa',
    'hindi': 'hi',
    'bengali': 'bn',
    'odia': 'or',
    'telugu': 'te',
    'tamil': 'ta',
    'malayalam': 'ml',
    'kannada': 'kn',
    'english': 'en',
  }
};

export default config;