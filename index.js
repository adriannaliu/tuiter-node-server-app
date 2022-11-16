import express from 'express';
import cors from 'cors';
import process from 'node:process';
import HelloController
  from "./controllers/hello-controller.js";
import UserController
  from "./controllers/users/users-controller.js";
import TuitsController
  from "./controllers/tuits/tuits-controller.js";

const index = express();
index.use(cors());
index.use(express.json());
TuitsController(index);
HelloController(index);
UserController(index);
index.listen(process.env.PORT || 4000);