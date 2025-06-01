import { IThirdPartyWeatherAdapter } from "../../interfaces/ThirPartyWeather";
import { TimelineWeatherApiAdapter } from "../implementations/TimelineWeatherApi/TimelineWeatherApiAdapter";

export class ThirdPartyWeatherAdapter implements IThirdPartyWeatherAdapter {
    private client: IThirdPartyWeatherAdapter;

    constructor() {
        this.client = new TimelineWeatherApiAdapter();
    }

    getWeather(location: string) {
        return this.client.getWeather(location);
    }
}