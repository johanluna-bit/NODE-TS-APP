import { Request, Response } from "express"; 
import User from '../models/users';

class UsersController {

    public renderFormUser (req: Request, res: Response):void {
        res.render ('users/add', {title:'Add a user'});
    }

    public index (req:Request, res: Response):void{
        res.render('./users/index', {
            title: 'Users'
        });
    }

    public saveUser(req:Request, res: Response){
        const { name, lastname, email, password, adress, description, typeUser} = req.body;
        const user = new User(req.body);
        
        console.log(req.body)
        res.send('recived')
    }
}

export  const usersController = new UsersController();
