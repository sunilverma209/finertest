module.exports = {
    HOST : "./user.sqlite",
    USER : "root",
    PASSWORD: "password",
    DB: "finervision",
    dialect : "sqlite",
    pool: {
        max : 5,
        min : 0,
        acquire: 30000,
        idle: 10000
    }
}