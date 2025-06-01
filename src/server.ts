import 'dotenv/config';
import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import weatherRoutes from './routes/weather.routes';

const app = express();

app.use('/weather', weatherRoutes);

app.use(errorHandler);

app.listen(3000, function () {
    console.log('Escutando na porta 3000');
});
