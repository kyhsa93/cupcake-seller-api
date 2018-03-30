import { products } from '../../controllers';

export default async (request, response) => {
  try {
    const { id } = request.params;

    if (typeof (id * 1) !== 'number' || id < 1) {
      return response.status(400).send('invalid id').end();
    }

    const { code, data } = await products.get({ id });

    if (!code || !data) {
      return response.status(500).send('internal server error').end();
    }

    return response.status(code).send(data).end();
  } catch (error) {
    return response.status(500).send('internal server error').end();
  }
};
