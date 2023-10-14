import express from "express";
import routes from "../src/routes.js";

const app = express();
app.use(routes);
app.use(express.json());

app.listen(5678,()=>{
  console.log(" quack quack 🦆🦆🦆🦆🦆");
})

