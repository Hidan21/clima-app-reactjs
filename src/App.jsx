import { useEffect, useState } from 'react';
import { getCountries } from './services/getCountries';
import { getCities } from './services/cities';
import { getCitiesWeater } from './services/weater';
import './App.css';

export default function App() {
  //estados
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weater, setWeater] = useState(null);
  //cuse efect para llamar ciudades
  useEffect(() => {
    //funcion autoinvocada para llamar a la api desde el archivo ajax
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  const ConuntryHandler = async (e) => {
    e.target.value && setCities(await getCities(e.target.value));
    setWeater(null);
  };
  const CityHandler = async (e) => {
    e.target.value && setWeater(await getCitiesWeater(e.target.value));
  };

  return (
    <div className='container-options'>
      <div className='container-select'>
        <div>
          <label>elige un pais</label>
          <select onChange={ConuntryHandler}>
            <option value=''>---seleciona---</option>
            {/*  mostrar paises en el select */}
            {countries.map((country) => (
              <option
                key={country.cca2}
                value={country.cca2}
              >{`${country.cca2} : ${country.name.common}`}</option>
            ))}
          </select>
        </div>

        {/* ocultar el select de las ciudades hasta elegir un pais */}
        {cities.length > 0 && (
          <div>
            <label>Elige Una Ciudad</label>
            <select onChange={CityHandler}>
              <option value=''>---seleciona---</option>
              {cities.map((city) => (
                <option key={city.id}>{city.name}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {weater && (
        <div className='respuesta'>
          <h2>Temperatura actual: {weater.main.temp}</h2>
          <p>temperatura min: {weater.main.temp_min}</p>
          <p>temperatura max: {weater.main.temp_max}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weater.weather[0].icon}.png`}
            alt=''
          />
        </div>
      )}
    </div>
  );
}
