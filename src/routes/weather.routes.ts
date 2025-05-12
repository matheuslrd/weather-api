import express from 'express';
import { ThirdPartyWeatherAdapter } from '../adapters/base/ThirdPartyWeatherAdapter';

const router = express.Router();

router.get('/', (req, res) => {
    const thirdPartyApi = new ThirdPartyWeatherAdapter();
    res.json(thirdPartyApi.getWeather());
});

export default router;
