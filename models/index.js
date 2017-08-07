
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack_1', {
	logging: false
});

var Page = db.define('page', {
	title: {
		type: Sequelize.STRING
	},
	urlTitle: {
		type: Sequelize.STRING
	},
	content: {
		type: Sequelize.STRING
	},
	status: {
		type: Sequelize.STRING
	}
});

var User = db.define('user', {
	name: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	}
});


module.exports = {
	Page: Page,
	User: User
};

