export default (sequelize, DataTypes) => sequelize.define('shops', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  modelName: 'shops',
  timestamps: false,
  paranoid: true,
  freezeTableName: true,
  tableName: 'shops',
  sequelize,
});
