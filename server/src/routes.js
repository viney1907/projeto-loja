 import express from "express";

 const routes = express.Router();

 // set cors to allow all origins
routes.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

routes.get("/" , (req, res, next) => {
  res.send(":")
})


 

 export default routes;

