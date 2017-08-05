var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:4000/wikistack_1');

var page = db.define('page',  {
	title: {
		type: Sequelize.STRING
	},
	urlTitle: 	{
		type: Sequelize.STRING
	},
	content: {
		type: Sequelize.STRING
	},
	status: {
		type: Sequelize.STRING
	}
});

var User = db.define('user',  {
	name: {
		type: Sequelize.STRING
	},
	email: 	{
		type: Sequelize.STRING
	}
	});

db.sync().then(ret  => console.log('good job!'));

module.exports = {
Page: Page,
User: User
};






































module.exports = sequelize;
