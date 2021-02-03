module.exports = (sequelize, DataTypes) => {
    const review = sequelize.define('review', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        entry: {
            type: DataTypes.TEXT,
            allowNull: false
        }
 
    });

    return review;
}