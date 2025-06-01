import axios, { AxiosInstance } from 'axios';
import { env } from '../../../env';
import { IThirdPartyWeatherAdapter } from '../../../interfaces/ThirPartyWeather';

export class TimelineWeatherApiAdapter implements IThirdPartyWeatherAdapter {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: env.TIME_LINE_WEATHER_API_URL,
            params: {
                key: env.TIME_LINE_WEATHER_API_KEY
            }
        });
    }

    getWeather = async (location: string) => {
        const result = await this.client.get(`/${location}`);

        return result.data;
    };
}
