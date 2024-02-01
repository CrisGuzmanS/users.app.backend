import express from 'express';
import { User } from './Users/Models/User.js';

const app = express();

app.get('/', (request, response) => {
    response.send('Hola mundo');
});

app.listen(3000, async () => {
    console.log(await User.findAll());
    console.log('App listening on port 3000');
});