const Sequelize = require('sequelize');

module.exports = class Notice extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      idx: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      day: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Notice',
      tableName: 'notices',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.Notice.belongsTo(db.User, { foreignKey: 'UserId', targetKey: 'idx'});
  }  
};