import { Shops, Orders } from '../../models';

export default async (params) => {
  const {
    id, shop, userId, status,
  } = params;

  const checkShop = await Shops.findOne({ where: { id: shop, userId, deletedAt: null } });

  if (!checkShop) return { code: 400, data: 'invalid shop' };

  const checkOrder = await Orders.findOne({ where: { id, shopId: shop, deletedAt: null } });

  if (!checkOrder) return { code: 400, data: 'invalid order' };

  const query = { status, deletedAt: new Date() };

  const data = { where: { id, deletedAt: null } };

  const result = await Orders.update(query, data);

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 200, data: result };
};
