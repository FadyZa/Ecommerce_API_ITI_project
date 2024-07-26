const nodemailer = require("nodemailer");



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
           from: '"Note App ITI 👻" <noteappiti@gmail.com>', // sender address
           to: email, // list of receivers
           subject: "Hello ✔", // Subject line
           text: "Hello world?", // plain text body
           html: "<b>Hello world?</b>", // html body
         });
       
         console.log("Message sent: %s", info.messageId);
        

}
