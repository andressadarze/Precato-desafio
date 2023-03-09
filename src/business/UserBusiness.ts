import UserDatabase from "../database/UserDatabase";
import { ISignupInputDTO, User } from "../entities/User";
import { EmailExists, InvalidCPF, InvalidEmail, InvalidPhone, MissingFields } from "../errors/Error";
import IdGenerator from "../services/IdGenerator";

class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator
    ) {}

    public signup = async(input: ISignupInputDTO) => {
        const { name, email, cpf, phone } =  input

        if(!name || !email || !cpf || !phone) {
            throw new MissingFields()
        }

        if(email.indexOf("@") === -1 || email.length < 3) {
            throw new InvalidEmail()
        }

        if(cpf.length !== 11) {
            throw new InvalidCPF()
        }

        if(phone.length !== 9) {
            throw new InvalidPhone()
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(userDB) {
            throw new EmailExists()
        }

        const id = this.idGenerator.generate()
        const createdAt = new Date()

        const user = new User(
            id,
            name,
            email,
            cpf,
            phone,
            createdAt
        )

        await this.userDatabase.createRegister(user)

        const response = {
            message: "Inscrição realizada com sucesso!"
        }

        return response
    }
}

export default UserBusiness