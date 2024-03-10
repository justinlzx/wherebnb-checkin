import { BookingModel } from "../entity/bookingSchema.js";
import { AppDataSource } from "../index.js";
import chalk from 'chalk';

export const create = async (payload) => {
    try{
        const result = await AppDataSource.createQueryBuilder()
            .insert()
            .into(BookingModel)
            .values(payload)
            .execute();

        return result;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UploadError: ${error}`;
    }
}

export const getBookingsByListingId = async (id) => {
    try {
        const result = await AppDataSource.createQueryBuilder()
            .select("booking")
            .from(BookingModel, "booking")
            .where("booking.listingId = :id", { id })
            .getMany();

        return result;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UploadError: ${error}`;
    }
};