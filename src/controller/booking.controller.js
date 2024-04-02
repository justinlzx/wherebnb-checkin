import Res from '../Res/response.js'
import axios from 'axios'

export const setCheckinStatus = async (req, res) => {
    try {
        const {
            guestEmail,
            guestName,
            bookingId,
            listingId,
            propertyName,
            hostId,
            startDate,
            endDate
        } = req.body


        const result = await axios.put(`${process.env.BOOKINGS_URL}/booking/${bookingId}`, {
            checkedIn: true,
        })
        .then(async (resp) => {
            console.log('Booking updated successfully')

            const hostInfo = await axios.get(`${process.env.ACCOUNTS_URL}/view/${hostId}`)

            const checkInInstructions = await axios.get(`${process.env.ACCOMS_URL}/listings/instructions/${listingId}`)

            const payload = {
                emailType: "checkIn",
                travelerEmail: guestEmail,
                travelerName: guestName,
                propertyName,
                hostEmail: hostInfo.data.data.email,
                hostName: hostInfo.data.data.firstName,
                bookingStart: formatDate(startDate),
                bookingEnd: formatDate(endDate),
                instructions: checkInInstructions.data.data.instructions,
            }

            await axios.post(`${process.env.NOTIFICATIONS_URL}/rabbit`, payload)
            .then((resp) => {
                return 'Notification sent successfully'
            })
            .catch((err) => {
                console.log('ERROR:', err)
                return err
            })
        })

        return Res.successResponse(res, result)
    }
    catch (error) {
        console.log(error)
        return Res.errorResponse(res, error)
    }
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}