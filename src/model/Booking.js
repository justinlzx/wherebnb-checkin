export class Booking {
    constructor( bookingId, listingId, startDate, endDate, guestId, createdAt, updatedAt, checkedIn) {
        this.bookingId = bookingId
        this.listingId = listingId
        this.startDate = startDate
        this.endDate = endDate
        this.checkedIn = checkedIn
        this.guestId = guestId
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

