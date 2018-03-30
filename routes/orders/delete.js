import { orders } from '../../controllers';

export default async (request, response) => {
  try {
    const userId = request.user.id;
    const { id } = request.params;
    const { shop } = request.query;
    const { status } = request.body;

    if (typeof (id * 1) !== 'number' || id < 1) {
      return response.status(400).send('invalid id').end();
    }

    if (!shop || typeof (shop * 1) !== 'number' || shop < 1) {
      return response.status(400).send('invalid shop').end();
    }

    const { code, data } = await orders.delete({
      id, shop, userId, status,
    });

    if (!code || !data) {
      return response.status(500).send('internal server error').end();
    }

    return response.status(code).send(data).end();
  } catch (error) {
    return response.status(500).send('internal server error').end();
  }
};
