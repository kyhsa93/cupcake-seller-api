import { Shops, Products } from '../../models';

export default async (params) => {
  const {
    id, name, price, shop,
  } = params;

  const checkShop = await Shops.findOne({ where: { userId: id, id: shop } });

  if (!checkShop) return { code: 400, data: 'invalid shop' };

  const result = await Products.create({
    name, price, shopId: shop, createdAt: new Date(),
  });

  if (!result) return { code: 500, data: 'interner server error' };

  return { code: 201, data: result };
};
