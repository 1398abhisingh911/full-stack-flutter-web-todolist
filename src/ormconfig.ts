import { ConnectionOptions } from "typeorm";
import path from "path";
import dotenv from "dotenv";
import { TodoList } from "./database/entities/todo.entity";
const isCompiled = path.extname(__filename).includes("js");

dotenv.config();

export default   {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456789",
  database: "postgres",
  synchronize: !process.env.DB_NO_SYNC,
  logging: !process.env.DB_NO_LOGS,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 2000,
  entities: [TodoList],
  migrations: [`src/migration/**/*.${isCompiled ? "js" : "ts"}`],
} as ConnectionOptions;
