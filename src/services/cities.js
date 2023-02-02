import { ajax } from '../tools/ajax';

export const getCities = async (countryCode) => {
  const optionsRequest = {
    method: 'GET',
    url: 'https://spott.p.rapidapi.com/places',

    headers: {
      'X-RapidAPI-Key': '09a635cf47msh3a91174d01180e8p163bf3jsn18325da92841',
      'X-RapidAPI-Host': 'spott.p.rapidapi.com',
    },
    params: {
      limit: 100,
      type: 'CITY',
      country: countryCode,
    },
  };
  return await ajax(optionsRequest);
};
