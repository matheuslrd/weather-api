import express from 'express';
import weatherRoutes from './routes/weather.routes';

const app = express();

app.use("/weather", weatherRoutes);

app.listen(3000, function () {
    console.log('Escutando na porta 3000');
});
