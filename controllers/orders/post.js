import { Orders, Products } from '../../models';

export default async (params) => {
  const {
    customer, price, shop, product,
  } = params;

  const query = { where: { id: product, shopId: shop, deletedAt: null } };

  const checkProduct = await Products.findOne(query);

  if (!checkProduct) return { code: 400, data: 'invalid product' };

  const data = {
    customerId: customer,
    price,
    shopId: shop,
    productId: product,
    orderStatusId: 1,
    createdAt: new Date(),
  };

  const result = await Orders.create(data);

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 201, data: result };
};
