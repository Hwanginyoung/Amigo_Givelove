const Sequelize = require('sequelize');

module.exports = class Donation_money_image extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      idx: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      address: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Donation_money_image',
      tableName: 'donation_money_images',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.Donation_money_image.belongsTo(db.Donation_money, { foreignKey: 'Donation_moneyId', targetKey: 'idx'});
  }
};