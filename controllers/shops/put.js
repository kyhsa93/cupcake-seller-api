import request from 'request-promise';
import { Shops } from '../../models';

const { api } = require('../../config').default;

export default async (params) => {
  const { id, userId, category, latitude, longitude } = params;

  api.maps.url += `${latitude}%2C+${longitude}`;

  const responseData = await request.get(api.maps);

  const address = responseData.results[0].formatted_address;

  const data = { shopCategoryId: category, ...params, address, updatedAt: new Date() };

  const query = { where: { id, userId, deletedAt: null } };

  const result = await Shops.update(data, query);

  if (!result) return { code: 500, data: 'internal server error' };

  if (!result[0]) return { code: 404, data: 'not found' };

  return { code: 200, data: result };
};
