import nodemailer from "nodemailer";

import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = async (from, name, email, message) => {
  const mailOptions = {
    from,
    to: "abdelrahmanemad24434@gmail.com",
    subject: "New Contact Form Submission",
    html: template(name, email, message),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const template = (name, email, message) => `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
      <h1 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h1>
      <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
      <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
      <div style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">
        <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    </div>
`;
