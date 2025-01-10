import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";

const sequelize = new Sequelize(envConfig.connectionString as string);

try {
  sequelize.authenticate()
    .then(() => {
      console.log("Password milyo hai!");
    })
    .catch((err) => {
      console.log("Error aayo", err);
    });
} catch (error) {
    console.log(error)
}

export default sequelize