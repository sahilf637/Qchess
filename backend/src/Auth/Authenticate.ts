import { Jwt, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { ReturnPayload } from "../Util/app-util";
import User from "../Model/User";

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    const Payload = await ReturnPayload(req)

    if (Payload == null || undefined){
        res.status(403).json({
            message: "Unauthorized"
        })
        return;
    }

    const email = (Payload as JwtPayload).Email
    const user = await User.findOne({ Email: email })

    if(!user){
        res.status(404).json({
            message: "User Deleted"
        })
    }
    
    next()
}

