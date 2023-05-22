const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'vitalii_melnyk@meta.ua',
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: 'cebefi3514@duscore.com',
//   from: 'vitalii_melnyk@meta.ua',
//   subject: 'Test email',
//   html: '<p>Test email for homework 6</p>',
// };

// transport
//   .sendMail(email)
//   .then(() => console.log('Email send succsess'))
//   .catch((error) => console.log(error.message));

const sendEmail = async (data) => {
  const email = { ...data, from: 'vitalii_melnyk@meta.ua' };
  await transport.sendMail(email);
  return true;
}

module.exports = sendEmail;
