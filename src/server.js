import express from "express";
import { mapOrder } from "@/utilities/sortArray";
import { connnectDatabase, listDatabases } from "@/config/mongodb";

const app = express();

const hostname = "localhost";
const port = 4000;
connnectDatabase().catch(console.log("..Fail to connect database....."));

app.get("/", (req, res) => {
  res.end("<h1>Heyyy</h1>");
});
app.listen(port, hostname, () => {
  console.log(`Server is running at hostname ${hostname}:${port}/`);
});
