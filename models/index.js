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
		type: Sequelize.TEXT,
		allowNull: false
	},
	status: {
		type: Sequelize.ENUM('open','closed')
	},
	date: {
		type: Sequelize.STRING,
		defaultValue: Sequelize.NOW
	}
});

var User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
		isEmail: true
		}
}});

module.exports = {
	db: db,
	Page: Page,
	User: User
};

