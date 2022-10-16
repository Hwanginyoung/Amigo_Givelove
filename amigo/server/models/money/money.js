const Sequelize = require('sequelize');

module.exports = class Money extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      idx: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      money: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Money',
      tableName: 'moneys',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.Money.belongsTo(db.User, { foreignKey: 'UserId', targetKey: 'idx'}); // Item(N) : User(1) 
    db.Money.belongsTo(db.Donation_money, { foreignKey: 'Donation_moneyId', targetKey: 'idx'});
  }
};