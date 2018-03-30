import { orders } from '../../controllers';

export default async (request, response) => {
  try {
    const {
      customer, price, shop, product,
    } = request.body;

    if (!customer) {
      return response.status(400).send('invalid customer');
    }

    if (!price || price < 0) {
      return response.status(400).send('invalid price');
    }

    if (!shop) {
      return response.status(400).send('invalid shop');
    }

    if (!product) {
      return response.status(400).send('invalid product');
    }

    const { code, data } = await orders.post(request.body);

    if (!code || !data) {
      return response.status(500).send('internal server error').end();
    }

    return response.status(code).send(data).end();
  } catch (error) {
    return response.status(500).send('internal server error').end();
  }
};
