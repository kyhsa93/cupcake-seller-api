import { ShopCategories } from '../models';

export default async (transaction) => {
  const data = [
    'food',
    'fashion',
  ];

  return ShopCategories.bulkCreate(data.map(item => ({ name: item })), transaction);
};
