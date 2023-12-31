import express from "express";
import {
  create,
  getAll,
  getDetail,
  update,
  remove,
} from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getDetail);  
// router.post("/", checkPermission, create);
// router.patch("/:id", checkPermission, update);
// router.delete("/:id", checkPermission, remove);
router.post("/",  create);
router.patch("/:id",  update);
router.delete("/:id",  remove);

export default router;
