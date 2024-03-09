import { Request, Response, NextFunction } from "express";
import User from "../Model/User";
import { GeneratePassword, GenerateSalt, ValidatePassword } from "../Util/app-util";
import { GenerateToken } from "../Util/app-util";
import { v4 as uuidv4 } from "uuid"
import client from "../Sessions/store";

// const sendCookies = async (res: Response, email: string) => {
//     const token = await GenerateToken({ Email: email })

//     const cookieOptions = {
//         expires:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) ,
//         httpOnly: true,
//         secure: true,
//         sameSite: "none" as const
//     }

//     res.cookie("jwt", token, cookieOptions)
// }
const generateSession = async (email: string) => {
    const sessionId = uuidv4();

    (await client).setEx(sessionId, 7 * 24 * 60 * 60, email)

    return sessionId
}

const signUpUser = async (req: Request, res: Response) => {
    try {
        const email = req.body.Email;
        const user = await User.findOne({ Email: email })

        if (user) {
            return res.status(200).send()
        }

        const Salt = await GenerateSalt()

        const newPassword = await GeneratePassword(req.body.Password, Salt)

        const body = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: email,
            Password: newPassword,
            Salt: Salt
        }

        const sessionID = await generateSession(email);

        const newUser = new User(body)

        await newUser.save();

        res.status(200).json({
            Email: email,
            sessionID
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creating User"
        })
    }
}

const signInUser = async (req: Request, res: Response) => {
    try {
        const email = req.body.Email;
        const enteredPassword = req.body.Password
        const user = await User.findOne({ Email: email })

        if (!user) {
            throw new Error("User Not Found")
        }

        if (!ValidatePassword(enteredPassword, user.Password, user.Salt as string)) {
            throw new Error("InCorrect Password")
        }

        const sessionID = await generateSession(email);


        res.status(200).json({
            Email: email,
            sessionID
        })
    } catch (error: any) {
        res.status(500).json(
            error.message
        )
    }
}

export const sendhello = (req: Request, res: Response) => {
    res.json({
        message: "Hello World"
    })
}

export default {
    signUpUser,
    signInUser,
    sendhello
}