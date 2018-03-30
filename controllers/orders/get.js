import { Shops, Orders } from '../../models';

export default async (params) => {
  const { id, shop, userId } = params;

  const checkShop = await Shops.findOne({ where: { userId, id: shop } });

  if (!checkShop) return { code: 400, data: 'invalid shop' };

  const result = await Orders.findOne({ where: { id } });

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 200, data: result };
};
