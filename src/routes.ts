import express,{Application }  from "express";
const app: Application = express();
const router = express.Router();

//base route
app.use("/api/v1", router);

router.get("/", (req, res) => {
    res.send("Welcome to Anudeep Jami's version 1 routes of API").status(200);
});

import {email} from './Controllers/email.controller';

router.get("/email", email.SendEmail);


export default router;