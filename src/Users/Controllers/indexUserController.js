import { User } from '../Models/User.js';

export const indexUserController = async (request, response) => {

    const { page = 1 } = request.query.page ?? 1;

    const records = 5

    const users = await User.findAll({
        limit: records,
        offest: records*page
    });

    const lastPage = Math.ceil((await User.count()) / records)

    console.log("🟣", (lastPage >= page+1) ? page+1 : null, lastPage, page+1)

    const jsonResponse = {
        data: users,
        meta: {
            current: page,
            records: records,
            next: (lastPage >= page+1) ? page+1 : null,
            last: lastPage
        }
    };

    response.json(jsonResponse);
}