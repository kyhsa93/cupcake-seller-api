import crypto from 'crypto';

export default (sequelize, DataTypes) => sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  hooks: {
    beforeCreate: (user) => {
      if (user.password !== '') {
        Object.assign(user, {
          password: crypto.createHash('sha512').update(user.password).digest('hex'),
        });
      }
    },
    beforeBulkUpdate: (user) => {
      if (user.attributes.password !== '') {
        Object.assign(user.attributes, {
          password: crypto.createHash('sha512').update(user.attributes.password).digest('hex'),
        });
      }
    },
  },
  modelName: 'users',
  timestamps: false,
  paranoid: true,
  freezeTableName: true,
  tableName: 'users',
  sequelize,
});
