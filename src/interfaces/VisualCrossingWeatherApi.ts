// Visual Crossing Weather API TypeScript Types
// Based on official documentation: https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/#response-section

/**
 * Main weather response interface
 */
export interface WeatherResponse {
    queryCost: number;
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    address: string;
    timezone: string;
    tzoffset: number;
    description?: string;
    days: DayWeather[];
    alerts?: WeatherAlert[];
    stations?: Record<string, WeatherStation>;
    currentConditions?: CurrentConditions;
}

/**
 * Daily weather data
 */
export interface DayWeather {
    datetime: string; // YYYY-MM-DD format
    datetimeEpoch: number;
    tempmax: number;
    tempmin: number;
    temp: number;
    feelslikemax: number;
    feelslikemin: number;
    feelslike: number;
    dew: number;
    humidity: number;
    precip: number;
    precipprob: number;
    precipcover: number;
    preciptype?: PrecipType[];
    snow: number;
    snowdepth: number;
    windgust: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    cloudcover: number;
    visibility: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    severerisk?: number;
    sunrise: string; // HH:MM:SS format
    sunriseEpoch: number;
    sunset: string; // HH:MM:SS format
    sunsetEpoch: number;
    moonphase: number;
    conditions: string;
    description: string;
    icon: WeatherIcon;
    stations?: string[];
    source: string;
    hours?: HourWeather[];
}

/**
 * Hourly weather data
 */
export interface HourWeather {
    datetime: string; // HH:MM:SS format
    datetimeEpoch: number;
    temp: number;
    feelslike: number;
    humidity: number;
    dew: number;
    precip: number;
    precipprob: number;
    preciptype?: PrecipType[];
    snow: number;
    snowdepth: number;
    windgust: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    visibility: number;
    cloudcover: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    severerisk?: number;
    conditions: string;
    icon: WeatherIcon;
    stations?: string[];
    source: string;
}

/**
 * Current weather conditions
 */
export interface CurrentConditions {
    datetime: string; // HH:MM:SS format
    datetimeEpoch: number;
    temp: number;
    feelslike: number;
    humidity: number;
    dew: number;
    precip: number;
    precipprob: number;
    preciptype?: PrecipType[];
    snow: number;
    snowdepth: number;
    windgust: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    visibility: number;
    cloudcover: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    conditions: string;
    icon: WeatherIcon;
    stations?: string[];
    source: string;
    sunrise: string; // HH:MM:SS format
    sunriseEpoch: number;
    sunset: string; // HH:MM:SS format
    sunsetEpoch: number;
    moonphase: number;
}

/**
 * Weather alert information
 */
export interface WeatherAlert {
    event: string;
    headline: string;
    ends: string; // ISO 8601 format
    endsEpoch: number;
    onset: string; // ISO 8601 format
    onsetEpoch: number;
    id: string;
    language: string;
    link: string;
    description: string;
}

/**
 * Weather station information
 */
export interface WeatherStation {
    distance: number;
    latitude: number;
    longitude: number;
    useCount: number;
    id: string;
    name: string;
    quality: number;
    contribution: number;
}

/**
 * Precipitation types
 */
export type PrecipType = 'rain' | 'snow' | 'freezingrain' | 'ice';

/**
 * Weather condition icons
 */
export type WeatherIcon =
    | 'snow'
    | 'rain'
    | 'fog'
    | 'wind'
    | 'cloudy'
    | 'partly-cloudy-day'
    | 'partly-cloudy-night'
    | 'clear-day'
    | 'clear-night';

/**
 * Query parameters for the API request
 */
export interface WeatherQueryParams {
    location: string;
    startdate?: string; // YYYY-MM-DD format
    enddate?: string; // YYYY-MM-DD format
    unitGroup?: 'us' | 'metric' | 'uk';
    include?: 'days' | 'hours' | 'current' | 'alerts' | 'obs' | 'remote' | 'fcst' | 'stats';
    elements?: string; // comma-separated list of elements
    iconSet?: 'icons1' | 'icons2';
    lang?: string;
    contentType?: 'json' | 'csv';
}

/**
 * Error response from the API
 */
export interface WeatherErrorResponse {
    errorCode: number;
    message: string;
}
