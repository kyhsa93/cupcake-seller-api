import { Orders, Shops } from '../../models';

export default async (params) => {
  const { userId, shop } = params;

  const checkShop = await Shops.findOne({ where: { userId, id: shop } });

  if (!checkShop) return { code: 400, data: 'invalid shop' };

  const result = await Orders.findAll({ where: { shopId: shop } });

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 200, data: { data: result} };
};
