import { User } from "../../Users/Models/User.js";

export const deleteController = async (request, response) => {
    const userId = request.params.id;

    await User.destroy({
        where: {
            id: userId
        }
    });

    response.status(204).json({});
}