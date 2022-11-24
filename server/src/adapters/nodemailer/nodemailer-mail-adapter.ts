
import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
      user: "e692c0bcadd1bc",
      pass: "9c72523c22b6ba",
  },
});

export class NodeMailerAdapter implements MailAdapter {
  async sendMail({subject,body}: SendMailData){
    await transport.sendMail({
        from: "Equipe FeedGet",
        to: "Gabriela Dutra <gabriela_ddutra@outlook.com>",
        subject,
        html: body
        
    });
    
  }
  
}