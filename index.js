import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

// import path from 'path';
// import { fileURLToPath } from "url";

// const __filename=fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename);


const app = express();

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname,'/Frontend/dist')))

// app.get('*',(req,res)=> res.sendFile(path.join(__dirname,'/Frontend/dist/index.html'))
// );

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});