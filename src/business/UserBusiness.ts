import UserDatabase from "../database/UserDatabase";
import { IGetReportInputDTO, IGetReportOutputDTO, ISignupInputDTO, IUserDB, User } from "../entities/User";
import { EmailExists, InvalidCPF, InvalidEmail, InvalidPhone, MissingFields, NullReport } from "../errors/Error";
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

    public getRegistersReport = async(input: IGetReportInputDTO) => {
        const { startDate, endDate } = input

        if(!startDate || !endDate) {
            throw new MissingFields()
        }
        
        const reportDB = await this.userDatabase.getRegistersReport(startDate, endDate)

        if(!reportDB || reportDB.length === 0) {
            throw new NullReport()
        }

        const report = reportDB.map((user: IUserDB) => {
            const newUser = new User(
                user.id,
                user.name,
                user.email,
                user.cpf,
                user.phone,
                user.created_at
            )

            const date = newUser.getCreatedAt()

            const formatDate = (date: Date) => {
                const year = date.getFullYear()
                const month = String(date.getMonth() + 1).padStart(2, '0')
                const day = String(date.getDate()).padStart(2, '0')
              
                return `${year}-${month}-${day}`
            }

            const createdAt = formatDate(date)

            const reportResponse : IGetReportOutputDTO = {
                id: newUser.getId(),
                name: newUser.getName(),
                email: newUser.getEmail(),
                cpf: newUser.getCPF(),
                phone: newUser.getPhone(),
                createdAt
            }
            return reportResponse
        })
        
        return report
    }
}

export default UserBusiness