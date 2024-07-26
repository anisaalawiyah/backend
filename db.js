import mariadb from "mariadb";
import dotenv from "dotenv";
dotenv.config();
export const connection= await mariadb.createConnection({
    // host: "localhost",
    // user: "root",
    // password: "",
    // port:3306,
    // database: "testing",
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
})