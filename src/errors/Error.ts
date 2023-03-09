export class BaseError extends Error {
    constructor(
        message: string,
        public statusCode: number
    ) {
        super(message)
    }
}

export class EmailExists extends BaseError {
    constructor(){
        super("Email já está cadastrado", 401)
    }
}

export class MissingFields extends BaseError {
    constructor(){
        super("Informações devem ser passadas!", 400)
    }
}

export class InvalidEmail extends BaseError {
    constructor(){
        super("Email inválido", 401)
    }
}

export class InvalidCPF extends BaseError {
    constructor(){
        super("O CPF deve ter 11 dígitos", 401)
    }
}

export class InvalidPhone extends BaseError {
    constructor(){
        super("O número deve ter 9 dígitos", 401)
    }
}

export class NullReport extends BaseError {
    constructor(){
        super("Não há registro de inscrições nesse período", 404)
    }
}