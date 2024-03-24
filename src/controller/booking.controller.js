import Res from '../Res/response.js'
import axios from 'axios'

export const setCheckinStatus = async (req, res) => {
    try {
        const {
            guestEmail,
            guestName,
            bookingId,
            hostId,
        } = req.body


        const result = await axios.put(`${process.env.BOOKINGS_URL}/booking/${bookingId}`, {
            checkedIn: true,
        })
        .then(async (resp) => {
            console.log('Booking updated successfully')

            //TODO: connect to accounts repo 
            // const hostInfo = await axios.get(`${process.env.ACCOUNTS_URL}/${hostId}`)

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

            
            await axios.post(`${process.env.NOTIFICATIONS_URL}/rabbit`, payload)
            .then((resp) => {
                console.log('Notification sent successfully', resp)

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
