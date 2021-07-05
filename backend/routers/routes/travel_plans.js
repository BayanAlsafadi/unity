const express = require("express");
const authentication = require("../middlewares/authentication");


const {
  createTravelPlans,
  getAllTravelPlans,
  getTravelPlansById,
  updateTravelPlansById,
  deleteTravelPlansById,
  joinTravelPlanById,
  withDrawTravelPlanById,
  showAllCommentByPlanId,
  addPlanComment,
  showTravelPlanByCountry,
  updatePlanComment,
  deletePlanComment,
  getMember,
  getMembers
} = require("../controllers/travel_plans");
const travelPlansRouter = express.Router();
// we will use "/:id"  instead of "/" for development stage until the auth is ready to use , so we can retrieve users id from token instead of params
travelPlansRouter.post("/:user_id", createTravelPlans);
travelPlansRouter.get("/", getAllTravelPlans);
travelPlansRouter.get("/:id", getTravelPlansById);
travelPlansRouter.put("/:id", updateTravelPlansById);
travelPlansRouter.delete("/:id", deleteTravelPlansById);
travelPlansRouter.post("/plan/:id", authentication, joinTravelPlanById);
travelPlansRouter.delete("/plan/:id", authentication, withDrawTravelPlanById);
travelPlansRouter.get("/plans/:country", showTravelPlanByCountry);
travelPlansRouter.post("/comment/:id", authentication, addPlanComment);
travelPlansRouter.get("/comments/:id", showAllCommentByPlanId);
//update using comment id 
travelPlansRouter.put("/comment/:id", authentication, updatePlanComment);
//delete using comment id 
travelPlansRouter.delete("/comment/:id", authentication, deletePlanComment);
activitiesRouter.get("/member/:id" ,authentication, getMember)

activitiesRouter.get("/members/:id" , getMembers)


module.exports = travelPlansRouter;
