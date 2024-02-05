import { User } from '../Models/User.js';
import { PasswordService } from '../../Auth/Services/PasswordService.js';

export const createUserController = async (request, response) => {

    const { name, password, email } = request.body;

    const user = await User.create({
        name: name,
        password: await PasswordService.encrypt(password),
        email: email
    });

    return response.set(201).json({});
}