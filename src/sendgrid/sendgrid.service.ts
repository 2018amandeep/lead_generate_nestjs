import { Injectable } from '@nestjs/common';
import { CreateSendgridDto } from './dto/create-sendgrid.dto';
import { UpdateSendgridDto } from './dto/update-sendgrid.dto';
import { Request } from 'express';
const nodemailer = require("nodemailer");

@Injectable()
export class SendgridService {
  async sendEmail() {
    // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'bethany24@ethereal.email',
        pass: 'TvwTuA7dPNFPPFshRY'
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'amandeep.p.2015@gmail.com', // sender address
    to: "704mamtakumari@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello Mamta", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


}
}
