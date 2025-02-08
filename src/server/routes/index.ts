import { Router } from 'express';

import {
  CidadesController,
  PessoasController,
  UsuariosController,
} from './../controllers';
import { ensureAuthenticated } from '../shared/middleware';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

router.get(
  '/cidades',
  CidadesController.getAllValidation,
  ensureAuthenticated,
  CidadesController.getAll
);
router.get(
  '/cidades/:id',
  ensureAuthenticated,
  CidadesController.getByIdValidation,
  ensureAuthenticated,
  CidadesController.getById
);
router.post(
  '/cidades',
  ensureAuthenticated,
  CidadesController.createValidation,
  ensureAuthenticated,
  CidadesController.create
);
router.put(
  '/cidades/:id',
  ensureAuthenticated,
  CidadesController.updateByIdValidation,
  ensureAuthenticated,
  CidadesController.updateById
);
router.delete(
  '/cidades/:id',
  ensureAuthenticated,
  CidadesController.deleteByIdValidation,
  ensureAuthenticated,
  CidadesController.deleteById
);

// * Pessoas Routes * //
router.get(
  '/pessoas',
  ensureAuthenticated,
  PessoasController.getAllValidation,
  ensureAuthenticated,
  PessoasController.getAll
);
router.post(
  '/pessoas',
  ensureAuthenticated,
  PessoasController.createValidation,
  ensureAuthenticated,
  PessoasController.create
);
router.get(
  '/pessoas/:id',
  ensureAuthenticated,
  PessoasController.getByIdValidation,
  ensureAuthenticated,
  PessoasController.getById
);
router.put(
  '/pessoas/:id',
  ensureAuthenticated,
  PessoasController.updateByIdValidation,
  ensureAuthenticated,
  PessoasController.updateById
);
router.delete(
  '/pessoas/:id',
  ensureAuthenticated,
  PessoasController.deleteByIdValidation,
  ensureAuthenticated,
  PessoasController.deleteById
);

// * Authentication Routes * //

router.post(
  '/entrar',
  UsuariosController.signInValidation,
  UsuariosController.signIn
);
router.post(
  '/cadastrar',
  UsuariosController.signUpValidation,
  UsuariosController.signUp
);

export { router };
