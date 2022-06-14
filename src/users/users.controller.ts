import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { HTTPError } from "../errors/http-error.class";
import { LoggerService } from "../logger/logger.service";

export class UserController extends BaseController {
    constructor(
        looger: LoggerService
    ){
        super(looger);
        this.bindRoutes([
            { path: '/register', method: 'post', func: this.register },
            { path: '/login', method: 'post', func: this.login }
        ])
    }
    login(req: Request, res: Response, next: NextFunction){
        next(new HTTPError(401, 'Помилка авторизації', 'login'));
    }
    register(req: Request, res: Response, next: NextFunction){
        this.ok(res, 'register');
    }
}