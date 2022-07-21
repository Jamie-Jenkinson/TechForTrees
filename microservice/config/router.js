import express from "express";
import techController from "../controllers/techController.js";

const Router = express.Router();

Router.route("/").get((req, res, next) => {
  res.send("Hello world! from config/router.js");
});

Router.route("/tech")
  .get(techController.getALLTech)
  .post(techController.buyNEWTech);

Router.route("/tech/:id")
  .get(techController.getSingleTech)
  .put(techController.updateTech)
  .delete(techController.deleteTech);

export default Router;
