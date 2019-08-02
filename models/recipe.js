'use strict';
module.exports = (sequelize, DataTypes) => {
	const Recipe = sequelize.define('Recipe', {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		steeptime: {
			type: DataTypes.STRING,
			allowNull:false
		}
	},{});
	Recipe.associate = function(models) {
		Recipe.belongsTo(models.User, {foreignKey: 'UserId'})
	};
	return Recipe;
};
