// const express = require("express");
// const app = express();
// const port = 5000;

// function sendEmail(){

//     return new Promise((resolve , reject) => {

//         var transporter = nodemailer.createTransport({
//             service:"gmail",
//             auth:{
//                 user: "ragulr2023@gmail.com",
//                 pass: "HP_u8YRW5aUq._K"
//             }
//         })

//     const mail_configs ={
//         from:"ragulr2023@gmail.com",
//         to:"ragulranatheeran28@gmail.com",
//         subject:"testing mail using node mailer",
//         text:"just checking if this email will be sent"
//     }
//     transporter.sendMail(mail_configs, function(error, info){
//         if (error){
//             console.log(error)
//             return reject({message:"An error has occured"})
//         }
//         return resolve({message:"email sent sucessfully"})
//     })

//     })
// }

// app.get("/", (req,res)=> {

//     sendEmail()
//     .then(response => res.send(response.message))
//     .catch(error => res.status(500).send(error.messsage))
// })


// app.listen(port, () => {
//     console.log(`nodemailer project is listening: at http://localhost:${port}`)
// })

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:'ragulr2023@gmail.com',
        pass:'tdijytlidjzwmfaw'    
        }
});

var mailOptions = {
    from: 'ragulr2023@gmail.com',
    to: 'ragulranatheeran28@gmail.com',
    subject: "Sending Email using Node.js",
    text:"Hi nodemail succesfully sent"

};

transporter.sendMail(mailOptions, function(error,info){
    if (error) {
        console.log(error);
    }
    else{
        console.log("Emailsent:"+ info.response);
    }
});