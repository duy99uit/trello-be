import express from "express";
import { mapOrder } from "./utilities/sortArray";

const app = express();

const hostname = "localhost";
const port = 4000;
app.get("/", (req, res) => {
  res.end("<h1>Heyyy</h1>");
});
app.listen(port, hostname, () => {
  console.log(`Server is running at hostname ${hostname}:${port}/`);
});
