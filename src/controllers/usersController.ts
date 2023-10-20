import { Request, Response } from "express"; 

class UsersController {

    public renderFormUser (req: Request, res: Response):void {
        res.render ('users/add', {title:'Add a user'});
    }

    public index (req:Request, res: Response):void{
        res.render('/users/index', {
            title: 'Users'
        });
    }
}

export  const usersController = new UsersController();
