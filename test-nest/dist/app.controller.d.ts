import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createCheckOutSession(request: Request): Promise<string>;
}
