var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack_1', {
	logging: false
});

var Page = db.define('page', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	urlTitle: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.STRING,
		allowNull: false
	},
	status: {
		type: Sequelize.STRING
	}
});

var User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	}
});


module.exports = {
	Page: Page,
	User: User
};

