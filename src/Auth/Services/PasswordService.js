import bcrypt from 'bcrypt'

export class PasswordService {

    static saltRounds = 10;

    static async encrypt(password) {
        const salt = await bcrypt.genSalt(PasswordService.saltRounds);
        return bcrypt.hash(password, salt);
    }

    static async check(password, hashedPassword) {

        try {

            console.log(password, hashedPassword)

            await bcrypt.compare(password, hashedPassword, (error, result) => {

                console.log(result)

                if (error) {
                    throw new Error("Credenciales incorrectas.");
                }
            });
        } catch (error) {
            console.log('🟣 false')
            return false;
        }

        console.log('🟣 true')

        return true;

    }

}