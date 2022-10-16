const Sequelize = require('sequelize');

module.exports = class Question extends Sequelize.Model {
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
      check: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Question',
      tableName: 'questions',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.Question.belongsTo(db.User, { foreignKey: 'UserId', targetKey: 'idx'});
    db.Question.belongsTo(db.Team, { foreignKey: 'TeamId', targetKey: 'idx'});
  }  
};