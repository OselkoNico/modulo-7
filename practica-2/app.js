import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 3000;

const mongoURI = 'mongodb://localhost:27017/LaLiga';
const options = {
    useNewUrlParser: true
}

mongoose.connect(mongoURI)
        .then(() => console.log('Conectado a la base de datos'))
        .catch(err => console.log(err))

import players from './routes/players.js'

app.use(express.json());
app.use('/players', players);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})