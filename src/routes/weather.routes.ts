import express from 'express';
import { wrapAction } from '../middlewares/wrapAction';
import { getWeather } from '../services/weather.services';

const router = express.Router();

router.get(
    '/',
    wrapAction(async (req, res) => {
        // @ts-ignore
        const weather = await getWeather(req.query.location);
        console.log('🚀 ~ router.get ~ req.query.location:', req.query.location);
        res.json(weather);
    })
);

export default router;
