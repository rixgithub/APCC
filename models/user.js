module.exports = function(sequelize, Sequelize) {
	var User = sequelize.define("user", {
		firstName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
		lastName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
		email: {
            type: Sequelize.STRING,
            notEmpty: true,
            validate: {
                isEmail: true
            }
        },
		password: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
		address: {
            type: Sequelize.STRING,
            notEmpty: true
        },
		address2: {
            type: Sequelize.STRING
        },
		city: {
            type: Sequelize.STRING,
            notEmpty: true
        },
		state: {
            type: Sequelize.STRING,
            notEmpty: true
        },
		zip: {
            type: Sequelize.INTEGER,
            isNumeric: true,
            notEmpty: true,
        }
	});
	return User;
}