export default (sequelize, DataTypes) => sequelize.define('shop_categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  modelName: 'shop_categories',
  timestamps: false,
  paranoid: true,
  freezeTableName: true,
  tableName: 'shop_categories',
  sequelize,
});
