import nodemailer from 'nodemailer'

export const enviarCorreoSES = async ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SES_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SES_USER,
      pass: process.env.SES_PASSWORD,
    },
  })

  const mailOptions = {
    from: process.env.SES_FROM,
    to,
    subject,
    text,
  }

  await transporter.sendMail(mailOptions)
}
