import { Shops } from '../../models';

export default async (params) => {
  const { id } = params;

  const result = await Shops.findOne({ where: { id } });

  if (!result) return { code: 404, data: 'not found' };

  return { code: 200, data: result };
};
