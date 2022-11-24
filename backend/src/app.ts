import express, { Application } from 'express'
import cors from 'cors'

class App {
    port: string

    constructor() {
        this.port = process.env.PORT || '3030'
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

    public buildServer() {
        const server = express();
        this.buildMiddlewares(server);
        
        server.listen(this.port, () => {
            console.log(`Servidor iniciado na porta: ${this.port}`)
        });
    }
}

export const app = new App();
app.buildServer();