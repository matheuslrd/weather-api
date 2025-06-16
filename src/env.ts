import zod from 'zod';

const envSchema = zod.object({
    TIME_LINE_WEATHER_API_KEY: zod.string(),
    TIME_LINE_WEATHER_API_URL: zod.string().url()
});

export const env = envSchema.parse(process.env);
