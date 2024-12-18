import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import createConnection from "./database/databaseConnection.js";
import router from "./routes/router.js";
import AppRouter from "./routes/appRouter.js";
// import { Server } from "socket.io";
import http from "http";

const app = express();

const server = http.createServer(app);

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000"
//     }
// });

const corsOptions = {
    origin: ["http://localhost:3000", "http://192.168.250.198:8081"],
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/', router);
app.use('/app', AppRouter);

const PORT = process.env.PORT || 8000;

createConnection();

// io.on('connection', (socket) => {
//     console.log("New User Connected.");
// })

server.listen(PORT, () => {
    console.log(`Server has started at ${PORT}`);
})