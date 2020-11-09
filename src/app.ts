import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";
import { createServer } from "http";
import cors from "cors";
import { WebSocket } from "./websocket";

const webSocket = new WebSocket();

const app = express();
const server = createServer(app);
webSocket.setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://dbUser-Leo:dbUser-Leo@cluster0-nojmj.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to db!")
);

app.use(cors());
app.use(express.json());
app.use(router);

export { server, app };
