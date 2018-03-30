import { Shops } from '../../models';

export default async (params) => {
  const { id } = params;

  const result = await Shops.findAll({ where: { userId: id } });

  if (!result) {
    return { code: 500, data: 'internal server error' };
  }

  return { code: 200, data: { data: result } };
};
