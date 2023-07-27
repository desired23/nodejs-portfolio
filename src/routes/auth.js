import express from "express";
import { getInfo, signin, signup } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/info", getInfo);

export default router;
