import { Shops } from '../../models';

export default async (params) => {
  const { id, userId } = params;

  const data = { deletedAt: new Date() };

  const query = { where: { id, userId, deletedAt: null } };

  const result = await Shops.update(data, query);

  if (!result) return { code: 500, data: 'internal server error' };

  if (!result[0]) return { code: 404, data: 'not found' };

  return { code: 200, data: result };
};
