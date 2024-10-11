import DotenvFlow from "dotenv-flow"

DotenvFlow.config()

export const { ENV, PORT, SERVER_URL, DATABASE_URL } = process.env

