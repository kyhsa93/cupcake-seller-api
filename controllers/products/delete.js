import { Products, Shops } from '../../models';

export default async (params) => {
  const {
    id, shop, userId, name, price,
  } = params;

  const checkShop = await Shops.findOne({ where: { userId, id: shop, deletedAt: null } });

  if (!checkShop) return { code: 400, data: 'invalid shop' };

  const checkProduct = await Products.findOne({ where: { id, shopId: shop, deletedAt: null } });

  if (!checkProduct) return { code: 400, data: 'invalid product' };

  const data = { name, price, deletedAt: new Date() };

  const query = { where: { id, deletedAt: null } };

  const result = await Products.update(data, query);

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 200, data: result };
};
