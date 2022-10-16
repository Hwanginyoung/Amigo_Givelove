const Sequelize = require('sequelize');

module.exports = class Donation_money extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      idx: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      bank: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      account: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      owner_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      explanation: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Donation_money',
      tableName: 'donation_moneys',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.Donation_money.hasOne(db.Money, { foreignKey: 'Donation_moneyId', sourceKey: 'idx'}); 

    db.Donation_money.hasMany(db.Donation_money_category, { foreignKey: 'Donation_moneyId', sourceKey: 'idx'});
    db.Donation_money.hasMany(db.Donation_money_comment, { foreignKey: 'Donation_moneyId', sourceKey: 'idx'});
    db.Donation_money.hasMany(db.Donation_money_image, { foreignKey: 'Donation_moneyId', sourceKey: 'idx'});

    db.Donation_money.belongsTo(db.Team, { foreignKey: 'TeamId', targetKey: 'idx'});
  }
};