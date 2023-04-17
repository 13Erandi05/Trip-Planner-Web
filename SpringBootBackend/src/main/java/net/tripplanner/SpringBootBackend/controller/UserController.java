package net.tripplanner.SpringBootBackend.controller;

import net.tripplanner.SpringBootBackend.Dto.LoginDTO;
import net.tripplanner.SpringBootBackend.Dto.UserDTO;
import net.tripplanner.SpringBootBackend.Response.LoginResponse;
import net.tripplanner.SpringBootBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*" , allowedHeaders = "*")
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDTO userDTO){
        String id = userService.addUser(userDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> logInUser(@RequestBody LoginDTO loginDTO){
        LoginResponse loginMessage = userService.LoginUser(loginDTO);
        return ResponseEntity.ok(loginMessage);
    }
}
