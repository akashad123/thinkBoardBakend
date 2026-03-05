import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

//Get
router.get("/", getAllNotes);
//Get single note
router.get("/:id", getNoteById);
//Post
router.post("/", createNote);
//Put
router.put("/:id", updateNote);
//Delete
router.delete("/:id", deleteNote);

export default router;
