import express from 'express';
import { wrapAction } from '../middlewares/wrapAction';
import { getWeather } from '../services/weather.services';

const router = express.Router();

router.get(
    '/',
    wrapAction<any, any, { location: string }>(async (req, res) => {
        const weather = await getWeather(req.query.location);
        res.json(weather);
    })
);

export default router;
