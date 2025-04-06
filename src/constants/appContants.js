import { NEWS_BASE_URL, API_KEY } from  '@env';
import business from '@assets/images/business.jpg';
import entertainment from '@assets/images/entertainment.jpg';
import general from '@assets/images/general.jpg';
import health from '@assets/images/health.jpg';
import science from '@assets/images/science.jpg';
import sports from '@assets/images/sports.jpg';
import technology from '@assets/images/technology.jpg';

export const BASE_URL = NEWS_BASE_URL;
export const API_AUTH = API_KEY;

export const countryCodeList = [
  { name: 'Argentina', code: 'ar', flag: '🇦🇷' },
  { name: 'Australia', code: 'au', flag: '🇦🇺' },
  { name: 'Austria', code: 'at', flag: '🇦🇹' },
  { name: 'Belgium', code: 'be', flag: '🇧🇪' },
  { name: 'Brazil', code: 'br', flag: '🇧🇷' },
  { name: 'Bulgaria', code: 'bg', flag: '🇧🇬' },
  { name: 'Canada', code: 'ca', flag: '🇨🇦' },
  { name: 'China', code: 'cn', flag: '🇨🇳' },
  { name: 'Colombia', code: 'co', flag: '🇨🇴' },
  { name: 'Cuba', code: 'cu', flag: '🇨🇺' },
  { name: 'Czech Republic', code: 'cz', flag: '🇨🇿' },
  { name: 'Egypt', code: 'eg', flag: '🇪🇬' },
  { name: 'France', code: 'fr', flag: '🇫🇷' },
  { name: 'Germany', code: 'de', flag: '🇩🇪' },
  { name: 'Greece', code: 'gr', flag: '🇬🇷' },
  { name: 'Hong Kong', code: 'hk', flag: '🇭🇰' },
  { name: 'Hungary', code: 'hu', flag: '🇭🇺' },
  { name: 'India', code: 'in', flag: '🇮🇳' },
  { name: 'Indonesia', code: 'id', flag: '🇮🇩' },
  { name: 'Ireland', code: 'ie', flag: '🇮🇪' },
  { name: 'Israel', code: 'il', flag: '🇮🇱' },
  { name: 'Italy', code: 'it', flag: '🇮🇹' },
  { name: 'Japan', code: 'jp', flag: '🇯🇵' },
  { name: 'Latvia', code: 'lv', flag: '🇱🇻' },
  { name: 'Lithuania', code: 'lt', flag: '🇱🇹' },
  { name: 'Malaysia', code: 'my', flag: '🇲🇾' },
  { name: 'Mexico', code: 'mx', flag: '🇲🇽' },
  { name: 'Morocco', code: 'ma', flag: '🇲🇦' },
  { name: 'Netherlands', code: 'nl', flag: '🇳🇱' },
  { name: 'New Zealand', code: 'nz', flag: '🇳🇿' },
  { name: 'Nigeria', code: 'ng', flag: '🇳🇬' },
  { name: 'Norway', code: 'no', flag: '🇳🇴' },
  { name: 'Philippines', code: 'ph', flag: '🇵🇭' },
  { name: 'Poland', code: 'pl', flag: '🇵🇱' },
  { name: 'Portugal', code: 'pt', flag: '🇵🇹' },
  { name: 'Romania', code: 'ro', flag: '🇷🇴' },
  { name: 'Russia', code: 'ru', flag: '🇷🇺' },
  { name: 'Saudi Arabia', code: 'sa', flag: '🇸🇦' },
  { name: 'Serbia', code: 'rs', flag: '🇷🇸' },
  { name: 'Singapore', code: 'sg', flag: '🇸🇬' },
  { name: 'Slovakia', code: 'sk', flag: '🇸🇰' },
  { name: 'Slovenia', code: 'si', flag: '🇸🇮' },
  { name: 'South Africa', code: 'za', flag: '🇿🇦' },
  { name: 'South Korea', code: 'kr', flag: '🇰🇷' },
  { name: 'Sweden', code: 'se', flag: '🇸🇪' },
  { name: 'Switzerland', code: 'ch', flag: '🇨🇭' },
  { name: 'Taiwan', code: 'tw', flag: '🇹🇼' },
  { name: 'Thailand', code: 'th', flag: '🇹🇭' },
  { name: 'Turkey', code: 'tr', flag: '🇹🇷' },
  { name: 'UAE', code: 'ae', flag: '🇦🇪' },
  { name: 'Ukraine', code: 'ua', flag: '🇺🇦' },
  { name: 'United Kingdom', code: 'gb', flag: '🇬🇧' },
  { name: 'United States', code: 'us', flag: '🇺🇸' },
  { name: 'Venezuela', code: 've', flag: '🇻🇪' },
];

export   const categories = [
  { id: 'business', title: 'Business', image: business },
  { id: 'entertainment', title: 'Entertainment', image: entertainment},
  { id: 'general', title: 'General', image: general },
  { id: 'health', title: 'Health', image: health },
  { id: 'science', title: 'Science', image: science  },
  { id: 'sports', title: 'Sports', image: sports },
  { id: 'technology', title: 'Technology', image:technology  },
];
