import { users } from '../../controllers';

export default async (request, response) => {
  try {
    const { id } = request.user;

    const { code, data } = await users.get(id);

    if (!data || !code) {
      return response.status(500).send('internal server error').end();
    }

    return response.status(code).send(data).end();
  } catch (error) {
    return response.status(500).send('internal server error').end();
  }
};
