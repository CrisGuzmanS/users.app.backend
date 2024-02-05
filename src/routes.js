import express from 'express';
import { indexUserController } from './Users/Controllers/indexUserController.js';
import { createUserController } from './Users/Controllers/createUserController.js';
import { loginController } from './Auth/Controllers/loginController.js';
import { deleteController } from './Auth/Controllers/deleteController.js';
import { showController } from './Auth/Controllers/showController.js';
import { updateController } from './Auth/Controllers/updateController.js';
import { verifyTokenController } from './Auth/Controllers/verifyTokenController.js';
import { tokenMiddleware } from './Auth/Middlewares/tokenMiddleware.js';

const router = express.Router()

router.post('/api/v1/login', loginController);
router.get('/api/v1/token/verify', verifyTokenController);
router.get('/api/v1/usuarios', tokenMiddleware, indexUserController);
router.post('/api/v1/usuarios', tokenMiddleware, createUserController);
router.delete('/api/v1/usuarios/:id', tokenMiddleware, deleteController);
router.get('/api/v1/usuarios/:id', tokenMiddleware, showController);
router.patch('/api/v1/usuarios/:id', tokenMiddleware, updateController);

export { router };