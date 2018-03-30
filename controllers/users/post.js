import jwt from 'jsonwebtoken';
import { Users } from '../../models';

const config = require('../../config').default.auth;

export default async (data) => {
  const {
    email,
  } = data;

  const duplicated = await Users.findAll({
    where: { email },
  });

  if (duplicated && duplicated.length > 0) {
    return { code: 409, data: 'already exists' };
  }

  const created = await Users.create({ ...data, createdAt: new Date() });

  const payload = { id: created.id, email: created.email };

  const options = { algorithm: config.algorithm, expiresIn: config.expiresIn };

  const access = jwt.sign(payload, config.secret, options);

  const refreshPayload = { access, ...payload };

  const refreshOptions = { algorithm: config.algorithm, expiresIn: config.refreshExpiresIn };

  const refresh = jwt.sign(refreshPayload, config.refreshSecret, refreshOptions);

  return { code: 201, data: { access, refresh } };
};
