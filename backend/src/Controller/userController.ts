import { Request, Response, NextFunction } from "express";
import User from "../Model/User";
import { GeneratePassword, GenerateSalt, ValidatePassword } from "../Util/app-util";
import { GenerateToken } from "../Util/app-util";

const sendCookies = async (res: Response, email: string) => {
    const token = await GenerateToken({ Email: email })

        const cookieOptions = {
            expire: new Date( Date.now() + 7*24*60*60),
            httpOnly: false,
            secure: false 
        }

        res.cookie("jwt", token, cookieOptions)
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

        await sendCookies(res, email)

        const newUser = new User(body)

        await newUser.save();

        res.status(200).json({
            newUser
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

        if(!user){
            throw new Error("User Not Found")
        }
        
        if(!ValidatePassword(enteredPassword, user.Password, user.Salt as string)){
            throw new Error("InCorrect Password")
        }

        await sendCookies(res, email)

        res.status(200).json({
            user
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