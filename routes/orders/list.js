import { orders } from '../../controllers';

export default async (request, response) => {
  try {
    const userId = request.user.id;
    const { shop } = request.query;

    if (!shop || typeof (shop * 1) !== 'number') {
      return response.status(500).send('invalid shop').end();
    }

    const { code, data } = await orders.list({ userId, shop });

    if (!code || !data) {
      return response.status(500).send('internal server error').end();
    }

    return response.status(code).send(data).end();
  } catch (error) {
    return response.status(500).send('internal server error').end();
  }
};
