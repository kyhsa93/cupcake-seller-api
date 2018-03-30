import request from 'request-promise';
import { Shops } from '../../models';

const { api } = require('../../config').default;

export default async (params) => {
  const {
    id, name, category, latitude, longitude,
  } = params;

  const duplicated = await Shops.findOne({
    where: { userId: id, name, deletedAt: null },
  });

  if (duplicated) {
    return { code: 409, data: 'confilct' };
  }

  let address = '';

  api.maps.url += `${latitude}%2C+${longitude}`;

  const responseData = await request.get(api.maps);

  address = responseData.results[0].formatted_address;

  const query = {
    userId: id, name, shopCategoryId: category, latitude, longitude, address, createdAt: new Date(),
  };

  const result = await Shops.create(query);

  if (!result) {
    return { code: 500, data: 'can not create data' };
  }

  return { code: 201, data: result };
};
