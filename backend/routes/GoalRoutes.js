// routes/goalRoutes.js
const express = require("express");
const router = express.Router();
const goalController = require("../controllers/GoalController");
const { extractUserId } = require("../middlewares/SimpleAuth");

// Simple auth applied to all goal routes
router.use(extractUserId);

router.post("/create", goalController.createGoal);
router.delete("/del/:goalId", goalController.deleteGoal);
router.get("/get-goals", goalController.getGoals);
router.patch("/update/:goalId", goalController.updateGoalProgress);

module.exports = router;
