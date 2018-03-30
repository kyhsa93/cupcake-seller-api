import { products } from '../../controllers';

export default async (request, response) => {
  try {
    const { shop } = request.query;

    if (!shop) {
      return response.status(400).send('invalid shop');
    }

    const { code, data } = await products.list({ shop });

    if (!code || !data) {
      return response.status(500).send('internal server error').end();
    }

    return response.status(code).send(data).end();
  } catch (error) {
    return response.status(500).send('internal server error').end();
  }
};
