const app = require('./app')
const mongoose = require('mongoose');

const DB_HOST =
  'mongodb+srv://Vitalii:PTgi6bB89pDbeAaa@cluster0.mw6mnan.mongodb.net/contacts_reader?retryWrites=true&w=majority';

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000)
    console.log('Database connection successful')
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
