import express from 'express';
import { getWeather } from '../services/weather.services';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // @ts-ignore
        const weather = await getWeather(req.query.location);
        console.log('🚀 ~ router.get ~ req.query.location:', req.query.location);
        res.json(weather);
    } catch (error: any) {
        res.json({
            error: true,
            message: error.message
        });
    }
});

export default router;
