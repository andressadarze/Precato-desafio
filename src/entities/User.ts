export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private cpf: string,
        private phone: string,
        private createdAt: Date
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getEmail = () => {
        return this.email
    }

    public getCPF = () => {
        return this.cpf
    }

    public getPhone = () => {
        return this.phone
    }

    public getCreatedAt = () => {
        return this.createdAt
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setPhone = (newPhone: string) => {
        this.phone = newPhone
    }

}

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    cpf: string,
    phone: string
    created_at: Date 
}

export interface ISignupInputDTO {
    name: string,
    email: string,
    cpf: string,
    phone: string
}
