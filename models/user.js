module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email: DataTypes.STRING,
		username: DataTypes.STRING, 
		password: DataTypes.STRING,
		address: DataTypes.STRING,
		address2: DataTypes.STRING,
		city: DataTypes.STRING,
		state: DataTypes.STRING,
		zip: DataTypes.STRING
	});
	return User;
}