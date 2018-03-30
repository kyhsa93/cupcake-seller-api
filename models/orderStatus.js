export default (sequelize, DataTypes) => sequelize.define('order_status', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  modelName: 'order_status',
  timestamps: false,
  paranoid: true,
  freezeTableName: true,
  tableName: 'order_status',
  sequelize,
});
