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
