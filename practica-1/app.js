import express from 'express';
const app = express();
const port = 3000;

app.get('/users', (req, res) => {

})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})