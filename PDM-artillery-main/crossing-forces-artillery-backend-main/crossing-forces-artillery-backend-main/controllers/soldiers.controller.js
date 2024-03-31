import { StatusCodes } from "http-status-codes";
import { getMappedSoldiers } from "../services/soldiers.service.js"

const getAllSoldiersHandler = async(req, res, next) => {
    try{
        const soldiers = await getMappedSoldiers(req.header);

        res.status(StatusCodes.OK).send(soldiers);
    } catch (error) {
        next(
        )
    }
}

export{ getAllSoldiersHandler };