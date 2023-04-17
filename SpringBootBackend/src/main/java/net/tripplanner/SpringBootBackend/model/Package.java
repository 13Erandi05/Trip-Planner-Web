package net.tripplanner.SpringBootBackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "packages")
public class Package {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "site_name")
    private String site_name;

    @Column(name = "town")
    private String town;

    @Column(name = "activities")
    private String activities;

    @Column(name = "tickets")
    private String tickets;

    @Column(name = "hotels")
    private String hotels;

    @Column(name = "restaurants")
    private String restaurants;

    @Column(name = "guide")
    private String guide;

}
