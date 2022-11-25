import dotenv from 'dotenv'

class Config {
    PORT: string
    MONGO_DB_URL: string

    constructor() {
        dotenv.config()
        
        this.PORT = process.env.PORT || ''
        this.MONGO_DB_URL = process.env.MONGO_DB_URL || ''
    }
}

export const configs = new Config();