import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from '../controllers';
import { createBodyValidator } from '../controllers/cidades/Create';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});


router.post(
  '/cidades', 
  CidadesController.createBodyValidator, 
  CidadesController.createQueryValidator, 
  CidadesController.create
);


export { router };