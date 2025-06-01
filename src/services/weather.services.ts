import { ThirdPartyWeatherAdapter } from '../adapters/base/ThirdPartyWeatherAdapter';

export async function getWeather(location: string) {
    const thirdPartyApi = new ThirdPartyWeatherAdapter();

    return await thirdPartyApi.getWeather(location);
}
