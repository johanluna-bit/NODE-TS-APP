import { Request, Response } from "express"; 
import userModel, {User} from "../models/users";


class UsersController {

    public renderFormUser (req: Request, res: Response):void {
        res.render ('users/add', {title:'Add a user'});
    }

    public async index (req:Request, res: Response): Promise <void> {
        const users = await userModel.find();
        res.render('users/index', {
            title: 'Users',
            users
        });
    }

    public async saveUser(req:Request, res: Response){
        const { id, name, lastname, email, password, adress, description, typeUser} = req.body;
        const user:User= new userModel(req.body);
        await user.save();
        console.log(req.body)
    }
}

export  const usersController = new UsersController();
