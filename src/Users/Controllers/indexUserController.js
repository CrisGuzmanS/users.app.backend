import { User } from '../Models/User.js';

export const indexUserController = async (request, response) => {

    const { page } = request.query.page ?? 1;

    const records = 5

    const users = await User.findAll({
        limit: records,
        offest: records*page
    });

    const jsonResponse = {
        data: users,
        meta: {
            current: page,
            records: records,
            next: page+1
        }
    };

    response.json(jsonResponse);
}