import { IUserDB, User } from "../entities/User"
import { BaseDatabase } from "./BaseDatabase"

class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Precato_Forms_Answer"

    public createRegister = async(user: User) => {
        const userDB : IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            cpf: user.getCPF(),
            phone: user.getPhone(),
            created_at: user.getCreatedAt()
        }

        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB)
    }

    public findByEmail = async(email: string) => {
        const userDB: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ email })

        return userDB[0]
    }

    public registersReport = async(startDate: Date, endDate: Date) => {
        const usersDB : IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .whereBetween(`created_at`, [startDate, endDate])

        return usersDB
    }
}

export default UserDatabase