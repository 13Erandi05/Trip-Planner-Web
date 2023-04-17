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
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "location")
    private int location;

    @Column(name = "guestA")
    private int guestA;

    @Column(name = "guestC")
    private int guestC;

    @Column(name = "arrivals")
    private String arrivals;

    @Column(name = "leavedate")
    private String leavedate;

}
