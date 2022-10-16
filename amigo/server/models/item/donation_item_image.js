const Sequelize = require('sequelize');

module.exports = class Donation_item_image extends Sequelize.Model {
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
      modelName: 'Donation_item_image',
      tableName: 'donation_item_images',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.Donation_item_image.belongsTo(db.Donation_item, { foreignKey: 'Donation_itemId', targetKey: 'idx'});
  }  
};