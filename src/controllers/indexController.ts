import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.render('index', { title: 'Welcome to work'});        
    }
}

export const indexController = new IndexController();