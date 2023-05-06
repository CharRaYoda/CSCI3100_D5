import mysql from "mysql"

// Database setting
export const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "19890418Jess!",
    database: "course"
})