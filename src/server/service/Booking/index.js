class BookingService {
    constructor() {
      this.bookings = [];
    }
    addBooking(booking) {
      this.bookings.push(booking);
    }
}
const bookingService = new BookingService()
export default bookingService;
