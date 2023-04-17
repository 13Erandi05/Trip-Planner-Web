package net.tripplanner.SpringBootBackend.repository;

import net.tripplanner.SpringBootBackend.model.Package;
import org.springframework.data.jpa.repository.JpaRepository;

public interface packageRepository extends JpaRepository<Package,Integer> {
    //All crud Database Methods
}
