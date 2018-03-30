import { sequelize } from '../models';
import orderStatus from './orderStatus';
import shopCategories from './shopCategories';

const { server, database } = require('../config').default;

export default async () => {
  if (server.production || !database.sync) return {};

  return sequelize.transaction(async (transaction) => {
    const orderStatusSeeds = await orderStatus(transaction);
    const shopCategoriesSeeds = await shopCategories(transaction);
    return { orderStatusSeeds, shopCategoriesSeeds };
  });
};
