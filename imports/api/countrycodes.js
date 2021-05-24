
export const country_names = {
    'AD': 'Andorra',
    'AE': 'United Arab Emirates',
    'AM': 'Armenia',
    'AR': 'Argentina',
    'AO': 'Angola',
    'AT': 'Austria',
    'AU': 'Australia',
    'AZ': 'Azerbaijan',
    'BA': 'Bosnia',
    'BE': 'Belgium',
    'BF': 'Burkna Faso',
    'BO': 'Bolivia',
    'BG': 'Burin Faso',
    'BG': 'Bulgaria',
    'BR': 'Brazil',
    'BY': 'Belarus',
    'CA': 'Canada',
    'CH': 'Switzerland',
    'CL': 'Chile',
    'CN': 'China',
    'CO': 'Colombia',
    'CR': 'Costa Rica',
    'CY': 'Cyprus',
    'CZ': 'Czech Republic',
    'DE': 'Germany',
    'DK': 'Denmark',
    'DZ': 'Algeria',
    'EC': 'Ecuador',
    'EE': 'Estonia',
    'ES': 'Spain',
    'FI': 'Finland',
    'FO': 'Faroe Islands',
    'FR': 'France',
    'GB': 'Great Britain',
    'GE': 'Georgia',
    'GR': 'Greece',
    'HU': 'Hungary',
    'HR': 'Croatia',
    'IE': 'Ireland',
    'IL': 'Israel',
    'IN': 'India',
    'IR': 'Iran',
    'IS': 'Iceland',
    'IT': 'Italy',
    'JM': 'Jamaica',
    'JP': 'Japan',
    'KP': 'North Korea',
    'LU': 'Luxembourg',
    'LT': 'Lithuania',
    'LV': 'Latvia',
    'MN': 'Mongolia',
    'MA': 'Morocco',
    'NE': 'Niger',
    'NL': 'Netherlands',
    'NO': 'Norway',
    'NZ': 'New Zealand',
    'PA': 'Panama',
    'PE': 'Peru',
    'PH': 'Philippines',
    'PL': 'Poland',
    'PT': 'Portugal',
    'PY': 'Paraguay',
    'MX': 'Mexico',
    'MY': 'Malaysia',
    'RO': 'Romania',
    'RU': 'Russia',
    'RS': 'Serbia',
    'SE': 'Sweden',
    'SI': 'Slovenia',
    'SK': 'Slovakia',
    'SS': 'Wakanda', //South Soudan
    'SV': 'Salvador',
    'SA': 'Saudi Arabia',
    'TR': 'Turkey',
    'TW': 'Taiwan',
    'UA': 'Ukraine',
    'US': 'United States',
    'UY': 'Uruguay',
    'VE': 'Venezuela',
    'ZA': 'South Africa'
  };
  
 export function getCountryName(cn) {
    if (cn in country_names)
      return country_names[cn];
    return cn;
 };

