import { Router } from 'express';
import users from './users';
import auth from './auth';
import shops from './shops';
import coupons from './coupons';
import orders from './orders';
import products from './products';

const router = Router();

router.use('/users', users);
router.use('/auth', auth);
router.use('/shops', shops);
router.use('/coupons', coupons);
router.use('/orders', orders);
router.use('/products', products);

export default router;
