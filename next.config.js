const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    HOST: process.env.HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PORT: process.env.DB_PORT,
    PORT: process.env.PORT,
    EMAIL_SECRET: process.env.EMAIL_SECRET,
    SECRET_KEY: process.env.SECRET_KEY,
    TEMP_EMAIL: process.env.TEMP_EMAIL,
    TEMP_MAILPASS: process.env.TEMP_MAILPASS,
  }
}