import { AppDataSource } from '../index.js'
import { create } from '../service/booking.service.js'
import * as bookingService from '../service/booking.service.js'
import Res from '../Res/response.js'

export const createBooking = async (req, res) => {
    try {

        const payload = req.body;

        const result = await create(payload);

        return Res.successResponse(res, result)
    }
    catch (error) {
        return Res.errorResponse(res, error)
    }
};

export const getBooking = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await bookingService.getBookingsByListingId(id);

        return Res.successResponse(res, result)
    }
    catch (error) {
        return Res.errorResponse(res, error)
    }

};
