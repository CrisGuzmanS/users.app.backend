import { PasswordService } from "../Services/PasswordService.js";
import { User } from "../../Users/Models/User.js";

export const loginController = async (request, response) => {
    const { email, password } = request.body;

    const user = await User.findOne({
        where: { email: email }
    })

    const userExist = await PasswordService.check(password, user.password);

    if (!userExist) {
        return "error";
    }

    return "ok";
}