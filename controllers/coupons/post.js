import request from 'request-promise';
import { Shops, Coupons, Products } from '../../models';

const { api } = require('../../config').default;

export default async (params) => {
  const {
    id, name, price, emotion, shop, count, product, expire,
  } = params;

  const checkShop = await Shops.findOne({ where: { id: shop, userId: id, deletedAt: null } });

  if (!checkShop) return { code: 400, data: 'invalid shop' };

  if (product) {
    const checkProduct = await Products.findOne({ where: { id: product } });

    if (!checkProduct) return { code: 400, data: 'invalid product' };
  }

  api.user.url += `?emotion=${emotion}&count=${count}`;

  const responseData = await request.get(api.user);

  const customerList = responseData.data;

  if (!customerList || customerList.length < 1) {
    return { code: 204, data: 'customer is not exits' };
  }

  const coupon = {
    name, price, shopId: shop, productId: product, expire, createAt: new Date(),
  };

  const couponList = customerList.map(item => ({ ...coupon, customerId: item.id }));

  if (!sendCoupons) return { code: 500, data: 'can not create coupons' };

  const result = await Coupons.bulkCreate(couponList);

  const sendCoupons = await request.post({
    ...api.coupon,
    body: {
      title: coupon.name,
      amount: coupon.price,
      shopId: coupon.shopId,
      emotion,
      customerId: item.id,
      expiredDate: expire,
      mappingArray: customerList.map((item, index) => ({ userId: item.id, couponId: result[index].id })),
    },
  });

  if (!result) return { code: 500, data: 'can not create coupons' };

  return { code: 201, data: result };
};
