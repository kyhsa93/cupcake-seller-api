import { Router } from 'express';
import { auth } from '../../controllers';
import couponPost from './post';

const router = Router();

router.post('/', auth.get, couponPost);

export default router;
