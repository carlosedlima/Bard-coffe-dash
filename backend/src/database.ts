import { connect } from 'mongoose'
import { configs } from './config';

class MongoDbDatabase {
    connectionString: string;

    constructor() {
        if(!configs.MONGO_DB_URL) {
            throw new Error('É necessário configurar a URL do banco de dados')
        }
        
        this.connectionString = configs.MONGO_DB_URL
    }

    public async connectDatabase() {
        connect(this.connectionString)
            .then(() => {
                console.log('Banco de dados conectado com sucesso')
            })
            .catch(err => {
                console.log('Ocorreu um erro ao conectar com o banco de dados', err)
            })
    }
}
export const mongoDb = new MongoDbDatabase();