import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect();
    }

}

export default new App().app;