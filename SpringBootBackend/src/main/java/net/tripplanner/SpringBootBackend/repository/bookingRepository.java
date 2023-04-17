package net.tripplanner.SpringBootBackend.repository;

import net.tripplanner.SpringBootBackend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface bookingRepository extends JpaRepository<Booking,Integer> {
    //All crud Database Methods
}
