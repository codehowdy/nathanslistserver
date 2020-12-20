module.exports = (sequelize, DataTypes) => {
    const review = sequelize.define('answer', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        entry: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        entry: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        likes: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
        
        
       
    });

    return review;
}