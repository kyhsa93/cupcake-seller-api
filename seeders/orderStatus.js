import { OrderStatus } from '../models';

export default async (transaction) => {
  const data = [
    'orderd',
    'started',
    'ended',
  ];

  return OrderStatus.bulkCreate(data.map(item => ({ name: item })), transaction);
};
