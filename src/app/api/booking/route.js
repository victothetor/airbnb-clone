import bookingService from "@/server/service/Booking";

export async function POST(request) {
    const requestBody = await request.json();

    const propertyId = requestBody.propertyId;
    const checkin = requestBody.checkin;
    const checkout = requestBody.checkout;
    const guests = requestBody.guests;
  
    const cardHolder = requestBody.card.cardHolder;
    const cardNumber = requestBody.card.cardNumber;
    const expiryDate = requestBody.card.expiryDate;
    const cvv = requestBody.card.cvv;
  
    const message = requestBody.message;
  
    const booking = {
        propertyId,
        checkin,
        checkout,
        guests,
        card: {
            cardHolder,
            cardNumber,
            expiryDate,
            cvv
        },
        message
    };

    bookingService.addBooking(booking);
    console.log("Added booking", booking);

    const response = {};
    response.message = "Success";

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200
    });
}