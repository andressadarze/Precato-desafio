import UserBusiness from "../business/UserBusiness";
import { Request, Response } from "express"
import { ISignupInputDTO } from "../entities/User";

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
}

export default UserController