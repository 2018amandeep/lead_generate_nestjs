import { TypeOrmModuleOptions} from '@nestjs/typeorm'
require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    autoLoadEntities: true,
    synchronize: true,
} 

// import { TypeOrmModuleOptions } from "@nestjs/typeorm"
// import { DataSource } from "typeorm"

// export const typeOrmConfig = new DataSource({
//     type: "mongodb",
//     host: "localhost",
//     port: 27017,
//     database: "test",
// })