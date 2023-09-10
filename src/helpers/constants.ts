export enum MOVIE_RATINGS {
    'G',
    'PG',
    'PG-13',
    'R',
}

// https://developer.themoviedb.org/reference/genre-tv-list
// https://developer.themoviedb.org/reference/genre-movie-list
export enum GENRE_IDS {
    Action = 28, // movie only
    Adventure = 12, // movie only
    ActionAdventure = 10759, // tv only
    Animation = 16,
    Comedy = 35,
    Crime = 80,
    Documentary = 99,
    Drama = 18,
    Family = 10751,
    Kids = 10762, // tv only
    Fantasy = 14, // movie only
    History = 36, // movie only
    Horror = 27, // movie only
    Music = 10402, // movie only
    Mystery = 9648,
    News = 10763, // tv only
    Reality = 10764, // tv only
    Romance = 10749, // movie only
    SciFi = 878, // movie only
    SciFiFantasy = 10765, // tv only
    Soap = 10766, // tv only
    Talk = 10767, // tv only
    TvMovie = 10770, // movie only
    Thriller = 53, // movie only
    War = 10752, // movie only
    WarPolitics = 10768, // tv only
    Western = 37,
}

export const COUNTRIES = [
    { country: 'Andorra', abbrev: 'AD' },
    { country: 'United Arab Emirates', abbrev: 'AE' },
    { country: 'Antigua and Barbuda', abbrev: 'AG' },
    { country: 'Albania', abbrev: 'AL' },
    { country: 'Angola', abbrev: 'AO' },
    { country: 'Argentina', abbrev: 'AR' },
    { country: 'Austria', abbrev: 'AT' },
    { country: 'Australia', abbrev: 'AU' },
    { country: 'Azerbaijan', abbrev: 'AZ' },
    { country: 'Bosnia and Herzegovina', abbrev: 'BA' },
    { country: 'Barbados', abbrev: 'BB' },
    { country: 'Belgium', abbrev: 'BE' },
    { country: 'Burkina Faso', abbrev: 'BF' },
    { country: 'Bulgaria', abbrev: 'BG' },
    { country: 'Bahrain', abbrev: 'BH' },
    { country: 'Bermuda', abbrev: 'BM' },
    { country: 'Bolivia', abbrev: 'BO' },
    { country: 'Brazil', abbrev: 'BR' },
    { country: 'Bahamas', abbrev: 'BS' },
    { country: 'Belarus', abbrev: 'BY' },
    { country: 'Belize', abbrev: 'BZ' },
    { country: 'Canada', abbrev: 'CA' },
    { country: 'Congo', abbrev: 'CD' },
    { country: 'Switzerland', abbrev: 'CH' },
    // eslint-disable-next-line
    { country: 'Cote D\'Ivoire', abbrev: 'CI' },
    { country: 'Chile', abbrev: 'CL' },
    { country: 'Cameroon', abbrev: 'CM' },
    { country: 'Colombia', abbrev: 'CO' },
    { country: 'Costa Rica', abbrev: 'CR' },
    { country: 'Cuba', abbrev: 'CU' },
    { country: 'Cape Verde', abbrev: 'CV' },
    { country: 'Cyprus', abbrev: 'CY' },
    { country: 'Czech Republic', abbrev: 'CZ' },
    { country: 'Germany', abbrev: 'DE' },
    { country: 'Denmark', abbrev: 'DK' },
    { country: 'Dominican Republic', abbrev: 'DO' },
    { country: 'Algeria', abbrev: 'DZ' },
    { country: 'Ecuador', abbrev: 'EC' },
    { country: 'Estonia', abbrev: 'EE' },
    { country: 'Egypt', abbrev: 'EG' },
    { country: 'Spain', abbrev: 'ES' },
    { country: 'Finland', abbrev: 'FI' },
    { country: 'Fiji', abbrev: 'FJ' },
    { country: 'France', abbrev: 'FR' },
    { country: 'United Kingdom', abbrev: 'GB' },
    { country: 'French Guiana', abbrev: 'GF' },
    { country: 'Ghana', abbrev: 'GH' },
    { country: 'Gibraltar', abbrev: 'GI' },
    { country: 'Guadaloupe', abbrev: 'GP' },
    { country: 'Equatorial Guinea', abbrev: 'GQ' },
    { country: 'Greece', abbrev: 'GR' },
    { country: 'Guatemala', abbrev: 'GT' },
    { country: 'Guyana', abbrev: 'GY' },
    { country: 'Hong Kong', abbrev: 'HK' },
    { country: 'Honduras', abbrev: 'HN' },
    { country: 'Croatia', abbrev: 'HR' },
    { country: 'Hungary', abbrev: 'HU' },
    { country: 'Indonesia', abbrev: 'ID' },
    { country: 'Ireland', abbrev: 'IE' },
    { country: 'Israel', abbrev: 'IL' },
    { country: 'India', abbrev: 'IN' },
    { country: 'Iraq', abbrev: 'IQ' },
    { country: 'Iceland', abbrev: 'IS' },
    { country: 'Italy', abbrev: 'IT' },
    { country: 'Jamaica', abbrev: 'JM' },
    { country: 'Jordan', abbrev: 'JO' },
    { country: 'Japan', abbrev: 'JP' },
    { country: 'Kenya', abbrev: 'KE' },
    { country: 'South Korea', abbrev: 'KR' },
    { country: 'Kuwait', abbrev: 'KW' },
    { country: 'Lebanon', abbrev: 'LB' },
    { country: 'St. Lucia', abbrev: 'LC' },
    { country: 'Liechtenstein', abbrev: 'LI' },
    { country: 'Lithuania', abbrev: 'LT' },
    { country: 'Luxembourg', abbrev: 'LU' },
    { country: 'Latvia', abbrev: 'LV' },
    { country: 'Libyan Arab Jamahiriya', abbrev: 'LY' },
    { country: 'Morocco', abbrev: 'MA' },
    { country: 'Monaco', abbrev: 'MC' },
    { country: 'Moldova', abbrev: 'MD' },
    { country: 'Montenegro', abbrev: 'ME' },
    { country: 'Madagascar', abbrev: 'MG' },
    { country: 'Macedonia', abbrev: 'MK' },
    { country: 'Mali', abbrev: 'ML' },
    { country: 'Malta', abbrev: 'MT' },
    { country: 'Mauritius', abbrev: 'MU' },
    { country: 'Malawi', abbrev: 'MW' },
    { country: 'Mexico', abbrev: 'MX' },
    { country: 'Malaysia', abbrev: 'MY' },
    { country: 'Mozambique', abbrev: 'MZ' },
    { country: 'Niger', abbrev: 'NE' },
    { country: 'Nigeria', abbrev: 'NG' },
    { country: 'Nicaragua', abbrev: 'NI' },
    { country: 'Netherlands', abbrev: 'NL' },
    { country: 'Norway', abbrev: 'NO' },
    { country: 'New Zealand', abbrev: 'NZ' },
    { country: 'Oman', abbrev: 'OM' },
    { country: 'Panama', abbrev: 'PA' },
    { country: 'Peru', abbrev: 'PE' },
    { country: 'French Polynesia', abbrev: 'PF' },
    { country: 'Papua New Guinea', abbrev: 'PG' },
    { country: 'Philippines', abbrev: 'PH' },
    { country: 'Pakistan', abbrev: 'PK' },
    { country: 'Poland', abbrev: 'PL' },
    { country: 'Palestinian Territory', abbrev: 'PS' },
    { country: 'Portugal', abbrev: 'PT' },
    { country: 'Paraguay', abbrev: 'PY' },
    { country: 'Qatar', abbrev: 'QA' },
    { country: 'Romania', abbrev: 'RO' },
    { country: 'Serbia', abbrev: 'RS' },
    { country: 'Russia', abbrev: 'RU' },
    { country: 'Saudi Arabia', abbrev: 'SA' },
    { country: 'Seychelles', abbrev: 'SC' },
    { country: 'Sweden', abbrev: 'SE' },
    { country: 'Singapore', abbrev: 'SG' },
    { country: 'Slovenia', abbrev: 'SI' },
    { country: 'Slovakia', abbrev: 'SK' },
    { country: 'San Marino', abbrev: 'SM' },
    { country: 'Senegal', abbrev: 'SN' },
    { country: 'El Salvador', abbrev: 'SV' },
    { country: 'Turks and Caicos Islands', abbrev: 'TC' },
    { country: 'Chad', abbrev: 'TD' },
    { country: 'Thailand', abbrev: 'TH' },
    { country: 'Tunisia', abbrev: 'TN' },
    { country: 'Turkey', abbrev: 'TR' },
    { country: 'Trinidad and Tobago', abbrev: 'TT' },
    { country: 'Taiwan', abbrev: 'TW' },
    { country: 'Tanzania', abbrev: 'TZ' },
    { country: 'Ukraine', abbrev: 'UA' },
    { country: 'Uganda', abbrev: 'UG' },
    { country: 'United States of America', abbrev: 'US' },
    { country: 'Uruguay', abbrev: 'UY' },
    { country: 'Holy See', abbrev: 'VA' },
    { country: 'Venezuela', abbrev: 'VE' },
    { country: 'Kosovo', abbrev: 'XK' },
    { country: 'Yemen', abbrev: 'YE' },
    { country: 'South Africa', abbrev: 'ZA' },
    { country: 'Zambia', abbrev: 'ZM' },
    { country: 'Zimbabwe', abbrev: 'ZW' },
];
