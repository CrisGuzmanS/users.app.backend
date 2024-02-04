import { PasswordService } from "../Services/PasswordService.js";
import { User } from "../../Users/Models/User.js";
import jwt from "jsonwebtoken";
import { env } from "../../Shared/env.js";

export const loginController = async (request, response) => {
    const { email, password } = request.body;

    const user = await User.findOne({
        where: { email: email }
    })

    const userExist = await PasswordService.check(password, user.password);

    if (!userExist) {
        return response.status(401).json({ message: 'Credenciales incorrectas' });
    }

    console.log(env('JWT_SECRET_KEY'));

    // const token = jwt.sign({userId: user.id}, );

    // return response.json({})

    return "ok";
}