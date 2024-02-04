import { User } from '../Models/User.js';
import { TokenService } from '../../Auth/Services/TokenService.js';

export const indexUserController = async (request, response) => {

    const token = request.headers.authorization;

    if (!TokenService.isValid(token)) {
        return response.status(403).json({
            message: 'Credenciales inválidas'
        });
    }

    response.json(await User.findAll());
}