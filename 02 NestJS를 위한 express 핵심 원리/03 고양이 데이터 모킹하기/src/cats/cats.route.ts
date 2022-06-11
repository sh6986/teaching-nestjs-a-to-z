import { Router } from 'express';
import {
  createCat,
  deleteCat,
  readAllcat,
  readCat,
  updataePartialCat,
  updateCat,
} from './cats.service';

const router = Router();

router.get('/cats', readAllcat);
router.get('/cats/:id', readCat);
router.post('/cats', createCat);
router.put('/cats/:id', updateCat);
router.patch('/cats/:id', updataePartialCat);
router.delete('/cats/:id', deleteCat);

export default router;
