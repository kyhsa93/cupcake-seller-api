import { Router } from 'express';
import { auth } from '../../controllers';
import shopPost from './post';
import shopList from './list';
import shopGet from './get';
import shopPut from './put';
import shopDelete from './delete';

const router = Router();

router.post('/', auth.get, shopPost);
router.get('/', auth.get, shopList);
router.get('/:id', auth.get, shopGet);
router.put('/:id', auth.get, shopPut);
router.delete('/:id', auth.get, shopDelete);

export default router;
