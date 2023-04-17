package net.tripplanner.SpringBootBackend.controller;

import net.tripplanner.SpringBootBackend.exception.ResourceNotFoundException;
import net.tripplanner.SpringBootBackend.model.Booking;
import net.tripplanner.SpringBootBackend.repository.bookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/v1/")
public class BookingController {
    @Autowired
    bookingRepository bookRepo;

    @PostMapping("/bookedtrips")
    public Booking createbooking(@RequestBody Booking book){
        return bookRepo.save(book);
    }

    @GetMapping("/bookedtrips")
    List<Booking> getAllBookedTrips(){
        return bookRepo.findAll();
    }

    //get trip details by ID
    @GetMapping("/bookedtrips/{id}")
    public ResponseEntity<Booking> getTravelDetailsById(@PathVariable Integer id){
        Booking booking = bookRepo.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Booking was not found with id: " +id));
        return ResponseEntity.ok(booking);
    }
}
