import express from "express";
import {getUsers} from "../controller/user.js"
const router = express.Router();

router.get("/users",getUsers)
//router.get("/id",getUserByid)
export default router
