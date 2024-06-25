import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import createConnection from "./database/databaseConnection.js";
import router from "./routes/router.js";

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/', router);

const PORT = process.env.PORT || 8000;

createConnection();

app.listen(PORT, () => {
    console.log(`Server has started at ${PORT}`);
})