import { Router } from 'express';
import { auth } from '../../controllers';
import ordersPost from './post';
import orderPut from './put';
import orderDelete from './delete';
import orderList from './list';
import orderGet from './get';

const router = Router();

router.post('/', ordersPost);
router.put('/:id', auth.get, orderPut);
router.delete('/:id', auth.get, orderDelete);
router.get('/', auth.get, orderList);
router.get('/:id', auth.get, orderGet);

export default router;
