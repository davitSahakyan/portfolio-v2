export const WEDDING_PATH = '/davittatevwedding';
export const INVITATION_PATH = `${WEDDING_PATH}/invitation`;
export const SITE_URL = 'https://www.sahakyan.dev';

export const wedding = {
  names: ['Դավիթ', 'Տաթևիկ'],
  initials: 'Դ & Տ',
  date: {
    year: 2026,
    month: 10,
    day: 31,
    short: '31 · 10 · 2026',
    long: 'Շաբաթ, 31 հոկտեմբերի 2026',
    monthName: 'Հոկտեմբեր',
  },
  // Armenia is UTC+4 all year
  countdownTarget: '2026-10-31T15:50:00+04:00',
  greeting: {
    formal: 'Հարգելի',
    warm: 'Սիրելի',
    generic: 'Սիրելի հյուրեր',
  },
  heroKicker: 'Մենք ամուսնանում ենք',
  invitationText: 'Սիրով հրավիրում ենք Ձեզ մեր հարսանեկան արարողությանը։',
  invitationNote: 'Ձեր ներկայությունը կդարձնի այս օրն ավելի գեղեցիկ ու անմոռանալի։',
  closingText: 'Անհամբեր սպասում ենք Ձեզ',
  events: [
    {
      icon: 'church',
      time: '15:50',
      title: 'Պսակադրություն',
      place: 'Սուրբ Հռիփսիմե եկեղեցի',
      location: 'ք. Էջմիածին',
      mapUrl: 'https://maps.app.goo.gl/cQJEnVPF9v1nAVUo7',
    },
    {
      icon: 'rings',
      time: '17:00',
      title: 'Հարսանյաց հանդիսություն',
      place: '«Լիաննա Գարդեն Հոլլ»',
      location: 'Մեծ դահլիճ',
      mapUrl: 'https://maps.app.goo.gl/7mYg8pRouP4QPwGC8',
    },
  ],
  musicSrc: '/assets/wedding/music.mp3',
  photo: {
    src: '/assets/wedding/couple.jpg',
    width: 1200,
    height: 1800,
  },
} as const;

export const coupleNames = wedding.names.join(' & ');
