import { Application } from "express";

export class AppRoutes {
    app: Application

    constructor(server: Application) {
        this.app = server
    }

    public buildRoutes() {
        this.app.get('/ping', (_req, res) => {
            return res.json({
                message: 'Pong'
            })
        })
    }
}