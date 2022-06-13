import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from 'http';
import { LogerService } from './logger/logger.service'

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LogerService;
    constructor(logger: LogerService) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        
    }
    useRoutes(){
        this.app.use('/users', userRouter);
    }
    public async init(){
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
    }
}