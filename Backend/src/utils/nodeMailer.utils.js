import nodemailer from 'nodemailer';

export const sendingMail = async({from, to, subject, html}) =>{

  try {
    let mailOptions = ({
      from,
      to,
      subject,
      html
      }) 
      const Transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
            },
      });
      
      return await Transporter.sendMail(mailOptions) 
  } catch (error) {
    console.log(error)
  }
    
}