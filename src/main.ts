import { App } from "./app";
import { LogerService } from "./logger/logger.service";

 async function bootstrap() {
    const app = new App(new LogerService);
    await app.init();
 }

 bootstrap();