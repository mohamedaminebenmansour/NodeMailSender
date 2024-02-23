//1. install nodemailer libararay

//2. import nodemailer
const nodemailer = require('nodemailer');

//3. cofigure mail and send it
async function sendMail(){
    //1. create an email transporter.
    //SMTP (Simple Mail Transfer Protocol)
   const transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'your email address',
            pass: 'your password',
        }
    })


    //2.configure email content.
    const mailOptions = {
        from:'put ur email adress',
        to: 'mohahjfffmlm@gmail.com',
        subject: 'Welcome ',
        text: 'This is an email using nodemail in expressjs',
    }

    //3. send email
    try {
       const result = await transporter.sendMail(mailOptions);
       console.log('Eamil sent successfully')
    } catch (error) {
        console.log('Email send failed with error:', error)
    }
}

sendMail()