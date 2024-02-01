import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send('Hola mundo');
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});