import express from "express";
import {
  getAll,
  getDetail,
  create,
  update,
  remove,
} from "../controllers/category.js";
import { checkPermission } from "../middlewares/checkPermission.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getDetail);
router.post("/",  create);
router.put("/:id",  update);
router.delete("/:id",  remove);

export default router;
