import { Router, Request } from "express";
const router:Router = Router();
import {usersController} from '../controllers/usersController';

router.get('/', usersController.index);
router.get('/add', usersController.renderFormUser)
router.post('/add', usersController.saveUser)
export default router;
