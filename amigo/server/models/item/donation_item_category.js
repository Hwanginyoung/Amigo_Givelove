const Sequelize = require('sequelize');

module.exports = class Donation_item_category extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      idx: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      depth: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Donation_item_category',
      tableName: 'donation_item_categorys',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.Donation_item_category.belongsTo(db.Donation_item, { foreignKey: 'Donation_itemId', targetKey: 'idx'});
  }  
};