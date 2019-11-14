const nodemailer = require('nodemailer');

//Step1

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        // user: 'erpportaliiitk@gmail.com',
        // pass : 'IIITkota'
        user: 'pranjalagrawal85@gmail.com',
        pass : 'pranjal2000'
    }
});

//Step2

let mailOptions = {
    from:'pranjalagrawal85@gmail.com',
    to: '2018kucp1127@iiitkota.ac.in',
    subject:'New assignment',
    text:`hi, this is pranjal agrawal
    
    
        <br/ > we appritiate your dedication `,
    attachments: [{ filename: 'test.pdf', path: './assets/logo.jpg' }]

}

//Step 3

transporter.sendMail(mailOptions,(err,data) =>{
    if(err)console.log('error',err)
    else console.timeLog('mail sent!!!!!!!!!')
})