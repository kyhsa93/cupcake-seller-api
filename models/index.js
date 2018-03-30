import Sequelize from 'sequelize';
import sequelize from './sequelize';

import users from './users';
import shops from './shops';
import products from './products';
import orders from './orders';
import orderStatus from './orderStatus';
import coupons from './coupons';
import shopCategories from './shopCategories';

const Users = users(sequelize, Sequelize);
const Shops = shops(sequelize, Sequelize);
const Products = products(sequelize, Sequelize);
const Orders = orders(sequelize, Sequelize);
const OrderStatus = orderStatus(sequelize, Sequelize);
const Coupons = coupons(sequelize, Sequelize);
const ShopCategories = shopCategories(sequelize, Sequelize);

Users.hasMany(Shops);
Shops.hasMany(Products);
Shops.hasMany(Orders);
Shops.hasMany(Coupons);
Products.hasMany(Orders);
Products.hasMany(Coupons);
OrderStatus.hasMany(Orders);
ShopCategories.hasMany(Shops);

export {
  sequelize, Users, Shops, Products, Orders, OrderStatus, Coupons,
  ShopCategories,
};
