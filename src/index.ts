import express from "express";
import { router } from "./routes/loginRoute";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { router as ControllerRouter } from "./controller/decorators/controller";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["lastKey"] }));
app.use(router);
app.use(ControllerRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
