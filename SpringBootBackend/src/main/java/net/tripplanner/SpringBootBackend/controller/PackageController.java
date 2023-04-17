package net.tripplanner.SpringBootBackend.controller;

import net.tripplanner.SpringBootBackend.exception.ResourceNotFoundException;
import net.tripplanner.SpringBootBackend.model.Booking;
import net.tripplanner.SpringBootBackend.repository.packageRepository;
import net.tripplanner.SpringBootBackend.model.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/")
public class PackageController {
    @Autowired
    packageRepository packageRepo;

    @PostMapping("/addPackage")
    public Package createPackage(@RequestBody Package pack){
        return packageRepo.save(pack);
    }

    @GetMapping("/addPackage")
    public List<Package> getAllPackages(){
        return packageRepo.findAll();
    }

    //get trip details by ID
    @GetMapping("/addPackage/{id}")
    public ResponseEntity<Package> getTravelDetailsById(@PathVariable Integer id){
        Package pack = packageRepo.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Package was not found with id: " +id));
        return ResponseEntity.ok(pack);
    }

    //update packages
    @PutMapping("/addPackage/{id}")
    public ResponseEntity<Package> updatePackage(@PathVariable Integer id,
                                                 @RequestBody Package uppack){
        Package pack = packageRepo.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Package was not found with id: " +id));

        pack.setSite_name(uppack.getSite_name());
        pack.setTown(uppack.getTown());
        pack.setActivities(uppack.getActivities());
        pack.setHotels(uppack.getHotels());
        pack.setRestaurants(uppack.getRestaurants());
        pack.setGuide(uppack.getGuide());
        pack.setTickets(uppack.getTickets());

        Package updatedPack = packageRepo.save(pack);
        return ResponseEntity.ok(updatedPack);
    }

    //delete packages rest API
    @DeleteMapping("/addPackages/{id}")
    public ResponseEntity<Map<String,Boolean>> deletePackages(@PathVariable Integer id){
        Package pack = packageRepo.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Package was not found with id: " +id));
        packageRepo.delete(pack);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
