import express, { Application } from 'express'
import cors from 'cors'
import { AppRoutes } from './routes'
import { mongoDb } from './database'

class App {
    port: string

    constructor() {
        this.port = process.env.PORT || '3050'
    }

    private buildMiddlewares(app: Application) {
        app.use(express.json())
        app.use(
            cors({
                origin: 'http://localhost:5000', //TODO: Adicionar como .env
                credentials: true,
                optionsSuccessStatus: 200,
                methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            })
        )
    }

    private buildRoutes(app: Application) {
        const router = new AppRoutes(app)
        router.buildRoutes();
    }

    public buildServer() {
        const server = express();
        this.buildMiddlewares(server);
        this.buildRoutes(server);
        mongoDb.connectDatabase();
        
        server.listen(this.port, () => {
            console.log(`Servidor iniciado na porta: ${this.port}`)
        });
    }
}

export const app = new App();
app.buildServer();