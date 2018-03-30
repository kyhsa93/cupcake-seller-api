import { Products } from '../../models';

export default async (params) => {
  const { id } = params;

  const result = await Products.findOne({ where: { id, deleteAt: null } });

  if (!result) return { code: 404, data: 'not found' };

  return { code: 200, data: result };
};
