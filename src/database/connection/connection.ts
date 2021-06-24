import { Connection, createConnection, getConnection } from "typeorm";
import ormconfig from "../../ormconfig";

 const DBConnect = async () => {
  let connection: Connection | undefined;
  connection = getConnection();
  try {
    if (connection) {
      if (!connection.isConnected) {
        await connection.connect();
      }
    } else {
      await createConnection(ormconfig);
    }
    console.log("🌴 Database connection was successful!");
  } catch (e) {
    console.error("ERROR: Database connection failed!!", e);
    throw e;
  }
};

export const TryDBConnect = async () => {
  try {
    await DBConnect();
   
  } catch (e) {
  }
};
