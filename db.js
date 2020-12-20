const Sequelize = require('sequelize');
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
module.exports = sequelize;