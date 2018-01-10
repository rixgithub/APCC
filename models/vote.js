module.exports = function(sequelize, Sequelize) {
	
	var Vote = sequelize.define("vote", {
		prop_id: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
		email: {
            type: Sequelize.STRING,
            notEmpty: true,
            validate: {
                isEmail: true
            }
        },
        voted: {
        	type: Sequelize.BOOLEAN
        }    
	});
	return Vote;
}