module.exports = (sequelize, DataTypes) => {
    const Employer = sequelize.define('employer', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false
        }
     });
    
    return Employer
};