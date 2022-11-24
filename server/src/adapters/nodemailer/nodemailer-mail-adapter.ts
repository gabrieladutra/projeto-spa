
import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3ab9cdfffa60b2",
    pass: "4495a6436b1537"
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
        from: "Equipe FeedGet",
        to: "Gabriela Dutra <gabriela_ddutra@outlook.com>",
        subject,
        html: body,
    });
    
  }
  
}