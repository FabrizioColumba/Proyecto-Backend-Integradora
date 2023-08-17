import sessionController from "../controllers/session.controller.js";
import { passportCall } from "../services/auth.js";
import BaseRouter from "./BaseRouter.js";

export default class SessionsRouter extends BaseRouter {
    init() {
        this.post('/register',['NO_AUTH'],passportCall('register',{strategyType:"locals"}),sessionController.register)
        this.post('/login',['NO_AUTH'],passportCall('login',{strategyType:"locals"}),sessionController.login)
        this.post('/restoreRequest',['NO_AUTH'],sessionController.restoreRequest)
        this.post('/restorePassword',['PUBLIC'],sessionController.restorePassword)
    }
}