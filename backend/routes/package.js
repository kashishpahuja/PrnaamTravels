import express from "express";
import {
  createPackage,
  getPackages,
  deletePackage,
} from "../controllers/packageController.js";
import { verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyAdmin, createPackage);
router.get("/", getPackages);
router.delete("/:id", verifyAdmin, deletePackage);

export default router;