import cors from 'cors';
import { env } from './Shared/env.js';

const allowedOrigins = [
    env('ALLOWED_ORIGIN'),
];

const corsOptions = {
    origin: (origin, callback) => {
        if(allowedOrigins.indexOf(origin) == -1){
            return callback(new Error('Not allowed by CORS'));
        }

        return callback(null, true);
    }
}

export default cors(corsOptions);