import { BookingModel } from "../entity/bookingSchema.js";
import { AppDataSource } from "../index.js";
import chalk from 'chalk';


export const setCheckinStatusById = async (id) => {
    try {
        const result = await AppDataSource.createQueryBuilder()
        .update(BookingModel) // Update records in the BookingModel table
        .set({ "booking.checkedIn": true })   // Set the value of column "booking" to true
        .where("booking.listingId = :id", { id }) // Filter based on listingId
        .execute();            // Execute the update query
    

        return result;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UploadError: ${error}`;
    }
};