import axios from "axios";

const BOOKING_API_BASE_URL = "http://localhost:8080/api/v1/bookedtrips";

class BookingService{
    getBookedTrips(){
        return axios.get(BOOKING_API_BASE_URL);
    }

    createbookind(tripdet){
        return axios.post(BOOKING_API_BASE_URL,tripdet);
    }
}

export default new BookingService()