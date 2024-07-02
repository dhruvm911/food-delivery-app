import express from "express";
import Restaurant from "../models/restaurant";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get("/:restaurantId", 
param("city")
.isString()
.trim()
.notEmpty()
.withMessage("City parameter must be a valid string"),
RestaurantController.getRestaurant
);

router.get(
    "/search/:city",
    param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string"),
    RestaurantController.searchRestaurant
);