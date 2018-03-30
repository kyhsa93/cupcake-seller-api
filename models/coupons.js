export default (sequelize, DataTypes) => sequelize.define('coupons', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  expire: DataTypes.DATE,
  usedAt: DataTypes.DATE,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  modelName: 'coupons',
  timestamps: false,
  paranoid: true,
  freezeTableName: true,
  tableName: 'coupons',
  sequelize,
});
