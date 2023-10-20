import { Request, Response } from "express"; 
import { send } from "process";

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
        console.log(req.body)
        res.send('recived')
    }
}

export  const usersController = new UsersController();
