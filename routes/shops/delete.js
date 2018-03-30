import { shops } from '../../controllers';

export default async (request, response) => {
  try {
    const userId = request.user.id;

    const { id } = request.params;

    if (id < 1) {
      return response.status(400).send('invalid id').end();
    }

    const { code, data } = await shops.delete({ id, userId });

    if (!code || !data) {
      return response.status(500).send('internal server error').end();
    }

    return response.status(code).send(data).end();
  } catch (error) {
    return response.status(500).send('internal server error').end();
  }
};
