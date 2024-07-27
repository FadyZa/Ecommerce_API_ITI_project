// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer';
import { emailTemplate } from './emailTemplate.js';




export default  async function sendOurEmail(email){
    const transporter = nodemailer.createTransport({
        service:"gmail",
         auth: {
           user: "noteappiti@gmail.com",
           pass: "aqap qnzf bwmh qrbc",
         },
       });
       
       
       
         // send mail with defined transport object
         const info = await transporter.sendMail({
           from: '"E-Commerce ITI 👻" <noteappiti@gmail.com>', // sender address
           to: email, // list of receivers
           subject: "Hello ✔", // Subject line
           text: "Hello world?", // plain text body
           html: emailTemplate(email), // html body
         });
       
         console.log("Message sent: %s", info.messageId);
        

}
