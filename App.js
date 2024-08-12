import session from "express-session";
import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./Kanbas/User/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

console.log(process.env.MONGO_CONNECTION_STRING);
console.log(process.env.NETLIFY_URL);
console.log(process.env.REMOTE_SERVER);

const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
 );
 const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));
  
  
app.use(express.json());
ModuleRoutes(app);
Lab5(app);
CourseRoutes(app);
UserRoutes(app);
Hello(app)

app.listen(4000)