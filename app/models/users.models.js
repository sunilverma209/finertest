module.exports = (sequelize , Sequelize) => {
    const Users = sequelize.define("users", {
            firstname :{
                type :Sequelize.STRING
            },
            surnmae : {
                type :Sequelize.STRING
            },
            email : {
                type :Sequelize.STRING
            },
            telephone : {
                type :Sequelize.INTEGER
            },
            gender : {
                type :Sequelize.STRING
            },
            dob : {
                type :Sequelize.STRING
            },
            comments : {
                type :Sequelize.STRING
            }
        }
    )
    return Users;
}