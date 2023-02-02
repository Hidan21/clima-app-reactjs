import { ajax } from '../tools/ajax';

export const getCitiesWeater = async (city) => {
  const optionsRequest = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',

    params: {
      q: city,
      appid: 'a8a0a5e66c54456e91da5adc60eb0aed',
      units: 'metric', //grados Celsius
    },
  };
  return await ajax(optionsRequest);
};
