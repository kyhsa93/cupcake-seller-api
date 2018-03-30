import { coupons } from '../../controllers';

export default async (request, response) => {
  try {
    const { id } = request.user;
    const {
      name, price, emotion, shop, count, expire,
    } = request.body;

    if (!name) {
      return response.status(400).send('invalid name').end();
    }

    if (!price) {
      return response.status(400).send('invalid price').end();
    }

    if (!emotion) {
      return response.status(400).send('invalid emotion').end();
    }

    if (!shop) {
      return response.status(400).send('invalid shop').end();
    }

    if (!count) {
      return response.status(400).send('invalid count').end();
    }

    if (!expire) {
      return response.status(400).send('invalid expire').end();
    }

    const { code, data } = await coupons.post({ id, ...request.body });

    if (!code || !data) {
      return response.status(500).send('internal server error').end();
    }

    return response.status(code).send(data).end();
  } catch (error) {
    return response.status(500).send('internal server error').end();
  }
};
