import { users } from '../../controllers';

export default async (request, response) => {
  try {
    const { id } = request.user;
    const {
      email, password, latitude, longitude,
    } = request.body;

    if (!email && !password && !latitude && !longitude) {
      return response.status(400).send('all data is empty');
    }

    if (!email || typeof email !== 'string' || email.length > 30) {
      return response.status(400).send('invalid email').end();
    }

    if (!password || typeof password !== 'string' || password.length < 8 || password.length > 14) {
      return response.status(400).send('invalid password').end();
    }

    const params = {
      id, email, password, latitude, longitude,
    };

    const { code, data } = await users.put(params);

    if (!code || !data) {
      return response.status(500).send('internal server error').end();
    }

    return response.status(code).send(data).end();
  } catch (error) {
    return response.status(500).send('internal server error').end();
  }
};
