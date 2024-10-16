import { config } from "./src/config/config"; // this config is obtained from the config.ts file
import app from "./src/app";
import connect_db from "./src/config/db";

const StartServer = async () => {
  const PORT = config.port || 5000; // here config.port is used from the _config object
  //using the "process.env.port" everywhere in the project is not the good practice so we can create a config.ts file in the config folder and can use it from there

  await connect_db(); // function to connect to database

  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
};

StartServer();

// The server has this file as the starting point and the get, post, put etc.. methods are  in the app.ts file
