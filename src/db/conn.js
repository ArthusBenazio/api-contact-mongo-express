const mongoose = require('mongoose');
const { config } = require('dotenv');

config();

async function main() {
  try {
    mongoose.set('strictQuery', true)

    await mongoose.connect(
      process.env.MONGODB_URL
    );

    console.log("Connected in DB!")
  } catch(error) {
    console.log(`Erro: ${error}`)
  }
}

module.exports = main;