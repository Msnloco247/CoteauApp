import Page from '../Page';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const API_KEY = '47a47ca087e9cfb4271fe31526dd797b';  // Reemplaza 'TU_CLAVE_API_AQUI' con tu clave API de OpenWeatherMap
const CITY = 'Santo Domingo';
const COUNTRY = 'DO';

interface WeatherData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

const Clima: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
              q: `${CITY},${COUNTRY}`,
              appid: API_KEY,
              units: 'metric',
            }
          });
          setWeatherData(response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
          setError('Error fetching weather data');
        } finally {
          setLoading(false);
        }
      };
  
      fetchWeather();
    }, []);
  
    if (loading) {
      return <p>Cargando...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!weatherData) {
      return <p>No weather data available</p>;
    }
  
    const { main, weather, wind } = weatherData;
    const weatherDescription = weather[0]?.description;
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`;
  return (
   <Page name='Clima'>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{`Clima en Santo Domingo`}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <img src={weatherIcon} alt={weatherDescription} />
            <p>{weatherDescription}</p>
            <p>{`Temperatura: ${main.temp}°C`}</p>
            <p>{`Temperatura mínima: ${main.temp_min}°C`}</p>
            <p>{`Temperatura máxima: ${main.temp_max}°C`}</p>
            <p>{`Humedad: ${main.humidity}%`}</p>
            <p>{`Viento: ${wind.speed} m/s`}</p>
          </IonCardContent>
        </IonCard>
   </Page>
  );
};

export default Clima;