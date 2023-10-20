import { Router, Request } from "express";
const router:Router = Router();
import {usersController} from '../controllers/usersController';

router.get('/users', usersController.index);
router.get('/users/add', usersController.renderFormUser)

export default router;
