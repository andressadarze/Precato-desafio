import UserBusiness from "../business/UserBusiness";
import { Request, Response } from "express"
import { IGetReportInputDTO, ISignupInputDTO } from "../entities/User";

class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signup = async (req: Request, res: Response) => {
        try {
            const { name, email, cpf, phone } = req.body
            
            const input : ISignupInputDTO = {
                name,
                email,
                cpf,
                phone
            }

            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public getRegistersReport = async (req: Request, res: Response) => {
        try {
            const { startDate, endDate } = req.body

            const newStartDate = new Date(startDate)
            
            const date = new Date(endDate)
            const newDate = date.setHours(date.getHours() + 24)
            const newEndDate = new Date(newDate)

            const input: IGetReportInputDTO = {
                startDate: newStartDate,
                endDate: newEndDate
            }

            const response = await this.userBusiness.getRegistersReport(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }
}

export default UserController