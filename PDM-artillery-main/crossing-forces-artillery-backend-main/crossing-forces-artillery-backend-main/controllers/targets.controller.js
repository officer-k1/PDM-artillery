import { StatusCodes } from "http-status-codes";
import { getMappedTargets } from "../services/targets.service.js";

const getAllTargetsHandler = async(req, res, next) => {
    try{
        const targets = await getMappedTargets("apiToken");
        //console.log(targets);

        res.status(StatusCodes.OK).send(targets);
    } catch (error) {
        next(
        )
    }
}

export{ getAllTargetsHandler };