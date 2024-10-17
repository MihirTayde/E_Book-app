import { config as conf } from "dotenv";  // here conf is used to avoid conflict of variable declerations

conf();

const _config = {

  port: process.env.port,
  database_URL: process.env.mongo_connection_string,

  enviornment: process.env.NODE_ENV,

};

export const config = Object.freeze(_config);

//Object.freeze() is a js method which means that the object is read only and can not be overwritten by any of the function/variable in the entire project

//.env file is created so that important information is not shared on github
