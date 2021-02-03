const Sequelize = require('sequelize');
const review = require('./models/review');
const sequelize = new Sequelize('nathanslist',
'postgres', 'conan', {
    host: 'localhost',
    dialect: 'postgres'
});
sequelize.authenticate().then(
    function() {
        console.log('Connected to nathanslist postgres database');
    },
    function(err){
        console.log(err);
    }
);
const User = sequelize.import ('./models/user')
const employer = sequelize.import('./models/employer')
const Review = sequelize.import('./models/review')
// ONE TO MANY
User.hasMany(employer) 
employer.belongsTo(User)
//ONE TO ONE
employer.hasOne(Review)
Review.belongsTo(employer)


module.exports = sequelize;