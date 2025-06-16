import { WeatherResponse } from './VisualCrossingWeatherApi';

export interface IThirdPartyWeatherAdapter {
    getWeather: (location: string) => Promise<WeatherResponse>;
}
