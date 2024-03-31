import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { getMappedTargets } from "./services/targets.service.js";
import { targets } from "./data/targets.js";
import { getMappedSoldiers } from "./services/soldiers.service.js";
import soldierRouter from "./routes/soliderRouter.js";
import targetRouter from "./routes/targetRouter.js";
import cors from "cors";
import generateTarget from "./producer/dataGenerator.js";
import { createServer } from "http";
import { Server } from "socket.io";

var app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

// view engine setup
app.set("views", path.join("./views"));
app.set("view engine", "pug");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("./public")));

app.use("/soldiers", soldierRouter);
app.use("/targets", targetRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
const port = 3000;

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

let index = 0;

io.on("connection", (socket) => {

  console.log("client connected " + index++);

});

setInterval(() => {
  io.emit("event", generateTarget());
}, 25 * 1000);

httpServer.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  let ExTargets = await getMappedTargets("apiKey");
  let ExSoldiers = await getMappedSoldiers("apiKey");
});
