import express from "express";
import { db } from "./db";
import { users } from "./db/schema";
import bodyParser from "body-parser";
import authRouter from "./routes/authentication";
import { errorController } from "./utils/errors/ErrorController";
import path from "path";

const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const publicDirPath = path.join(__dirname, "../public");
app.use(express.static(publicDirPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  console.log("Hello world!");
  const result = await db.select().from(users);
  res.send(result);
});

app.use("/v1/auth", authRouter);

app.use(errorController);

app.listen(port, () => {
  console.log(`[server]: Server is listening on port: ${port}`);
});
