import { Shops, Products } from '../../models';

export default async (params) => {
  const { shop } = params;

  const shopCheck = await Shops.findOne({ where: { id: shop, deletedAt: null } });

  if (!shopCheck) return { code: 400, data: 'invalid shop' };

  const result = await Products.findAll({ where: { shopId: shop, deletedAt: null } });

  if (!result) return { code: 500, data: 'internal server error' };

  if (result.length === 0) return { code: 204, data: 'no product list' };

  return { code: 200, data: { data: result } };
};
