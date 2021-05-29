import { Router } from "express"
import { Signup } from "../controllers";

const AuthRouter = Router();

AuthRouter.post("/signup", Signup)

export default AuthRouter