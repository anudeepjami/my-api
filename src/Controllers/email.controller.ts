import {Request, Response}  from "express";
import {gmail} from '../Models/nodemailer.model';

export const email =  () => {

}

email.SendEmail = async (req:Request, res:Response) => {
    //const {email, subject, body} = req.body;
    const response = await gmail.SendEmail("anudeep.jami@gmail.com", "testing", "testing");
    res.send(response).status(200);
}