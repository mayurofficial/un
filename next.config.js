require("dotenv").config({
  path: `environments/.env.${process.env.NODE_ENV || "dev"}`
})

module.exports = {
  reactStrictMode: true,
  env: process.env.NODE_ENV
}
