import express from 'express';
import { User } from './Users/Models/User.js';

const app = express();

app.get('/api/v1/usuarios', async (request, response) => {
    response.json(await User.findAll());
});

app.listen(3000, async () => {
    console.log('App listening on port 3000');
});