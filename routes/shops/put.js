import { shops } from '../../controllers';

export default async (request, response) => {
  try {
    const { id } = request.params;

    const userId = request.user.id;

    const {
      name, latitude,
      longitude, category,
    } = request.body;


    if (!name) {
      return response.status(400).send('invalid name').end();
    }

    if (!latitude) {
      return response.status(400).send('invalid latitude').end();
    }

    if (!longitude) {
      return response.status(400).send('invalid longitude').end();
    }

    if (!category) {
      return response.status(400).send('invalid category').end();
    }

    const { code, data } = await shops.put({ id, userId, ...request.body });

    if (!code || !data) {
      return response.status(500).send('internal server error').end();
    }

    return response.status(code).send(data).end();
  } catch (error) {
    return response.status(500).send('internal server error').end();
  }
};
