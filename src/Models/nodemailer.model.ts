import nodemailer from 'nodemailer';

export const gmail =  () => {

}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aj.mailerservice@gmail.com',
        pass: 'qtilzbfqmtnuwqxn'
    }
});

gmail.SendEmail = async (email: string, subject: string, body:string) => {
    return new Promise(function (resolve, reject) {
        const mailOptions = {
            from: 'aj.mailerservice@gmail.com',
            to: email,
            subject: subject,
            html: body
        };
        
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                resolve({message: error.message});
            } 
            else {
                resolve({message: info.response});
            }
        });
    });
  };
