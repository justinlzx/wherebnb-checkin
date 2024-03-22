import { AppDataSource } from '../index.js'
import { create } from '../service/checking.service.js'
import * as bookingService from '../service/checking.service.js'
import Res from '../Res/response.js'



export const setCheckinStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await bookingService.setCheckinStatusById(id);

        return Res.successResponse(res, result)
    }
    catch (error) {
        return Res.errorResponse(res, error)
    }

};
