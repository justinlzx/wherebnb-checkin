export class Booking {
    constructor( bookingId, listingId, startDate, endDate, guestId, createdAt, updatedAt) {
        this.bookingId = bookingId
        this.listingId = listingId
        this.startDate = startDate
        this.endDate = endDate
        this.guestId = guestId
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

