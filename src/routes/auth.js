import express from "express";
import { getInfo, signin, signup } from "../controllers/auth";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/info", getInfo);

export default router;
