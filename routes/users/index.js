import { Router } from 'express';
import { auth } from '../../controllers';
import userGet from './get';
import userPost from './post';
import userPut from './put';
import userDelete from './delete';

const router = Router();

router.get('/', auth.get, userGet);
router.post('/', userPost);
router.put('/:id', auth.get, userPut);
router.delete('/:id', auth.get, userDelete);

export default router;
