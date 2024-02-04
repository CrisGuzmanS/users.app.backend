import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("🟢",join(__dirname, '.env'))

dotenv.config({
    path: join(__dirname, '.env')
})

export const env = (variable) => {

    console.log(process.env)

    return process.env[variable];
}