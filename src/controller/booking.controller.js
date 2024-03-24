import Res from '../Res/response.js'
import axios from 'axios'

export const setCheckinStatus = async (req, res) => {
    try {
        const id = +req.query.id;
        const {
            guestEmail,
            guestName,
            hostId,
        } = req.body

        await axios.put(`${process.env.BOOKINGS_URL}`, {
            id,
            checkedIn: true,
        })
        .then(async (resp) => {
            console.log('Booking updated successfully')

            //TODO: connect to accounts repo 
            const hostInfo = await axios.get(`${process.env.ACCOUNTS_URL}/${hostId}`)

            // const payload = {
            //     emailType: "bookingConfirmation",
            //     travelerEmail: guestEmail,
            //     travelerName: guestName,
            //     hostEmail: hostInfo.data.email,
            //     hostName: hostInfo.data.firstName,
            //     bookingDates: "3 May",
            //     totalPrice: "400",
            // }

            const payload = {
                emailType: "bookingConfirmation",
                travelerEmail: guestEmail,
                travelerName: guestName,
                // hostEmail: hostInfo.data.email,
                // hostName: hostInfo.data.firstName,
                hostEmail: "zxlee.2022@scis.smu.edu.sg",
                hostName: "Mary",
                bookingDates: "3 May",
                totalPrice: "400",
            }

            await axios.post(`${process.env.NOTIFICATIONS_URL}`, payload)
            .then(() => {
                console.log('Notification sent successfully')
            })
        })

        return Res.successResponse(res, result)
    }
    catch (error) {
        return Res.errorResponse(res, error)
    }

};
