import jwt, { JwtPayload } from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Request } from "express"

declare global {
    namespace Express {
        interface Request {
            user: any
        }
    }
}

export const GenerateSalt = async () => {
    return await bcrypt.genSalt()
}

export const GeneratePassword = async (Password: string, Salt: string) => {
    return await bcrypt.hash(Password, Salt)
}

export const ValidatePassword = async (enteredPassword: string, savedPassword: string, Salt: string) => {
    return await GeneratePassword(enteredPassword, Salt) == savedPassword;
}

export const GenerateToken = async (Payload: { Email: string }) => {
    try {
        return await jwt.sign(Payload, process.env.SECRET as string, { expiresIn: "30d" })
    } catch (error) {
        return error
    }
}

export const ReturnPayload = async (req: Request) => {
    const Btoken = req.cookies.jwt

    if(!Btoken){
        return null;
    }

    const jwtToken = Btoken;

    const Payload = jwt.verify(jwtToken as string, process.env.SECRET as string)

    if (typeof Payload === 'string') {
        return null;
    }

    return Payload
}