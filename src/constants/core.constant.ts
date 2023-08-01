export const constants = {
  appName: '👋 Hello ISRO',
} as const;

export const urlIsro = {
  base: 'https://isro.vercel.app/api/',
  spacecrafts: 'spacecrafts',
  launchers: 'launchers',
  customerSatellites: 'customer_satellites',
  centres: 'centres',
};

export const urlRestCountries = {
  base: 'https://restcountries.com/v3.1/all?fields=flags,name',
  all: 'all?fields=flags,name',
}