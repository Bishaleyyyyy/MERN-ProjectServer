import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";
import User from "./models/UserModel";




const sequelize = new Sequelize(envConfig.connectionString as string,{
            models : [__dirname + '/models']
});

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

sequelize.sync({force : false}).then(()=>{
  console.log("synced !!")
})

export default sequelize