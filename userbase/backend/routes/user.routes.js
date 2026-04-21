import { Router } from 'express';
import {
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';

const router = Router();

router.post('/',         createUser);   // POST   /api/users
router.get('/',          readUsers);    // GET    /api/users
router.get('/:email',    readUser);     // GET    /api/users/:email
router.put('/:email',    updateUser);   // PUT    /api/users/:email
router.delete('/:email', deleteUser);   // DELETE /api/users/:email

export default router;
