const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./app/models")

// Production
db.sequelize.sync();

// Development
// db.sequelize.sync({ force : true}).then(() => {
//     console.log( "Drop and re-sync db. ");
// })


var corsOptions = {
    origin : "http://localhost:3000"
};

app.use(cors(corsOptions));

// Parse request of content type - application/json

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));




require("./app/routes/user.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})