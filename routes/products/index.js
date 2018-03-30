import { Router } from 'express';
import { auth } from '../../controllers';
import productPost from './post';
import productList from './list';
import productGet from './get';
import productPut from './put';
import productDelete from './delete';

const router = Router();

router.post('/', auth.get, productPost);
router.get('/', auth.get, productList);
router.get('/:id', auth.get, productGet);
router.put('/:id', auth.get, productPut);
router.delete('/:id', auth.get, productDelete);

export default router;
