package net.tripplanner.SpringBootBackend.service;

import net.tripplanner.SpringBootBackend.Dto.LoginDTO;
import net.tripplanner.SpringBootBackend.Dto.UserDTO;
import net.tripplanner.SpringBootBackend.Response.LoginResponse;

public interface UserService {
    String addUser(UserDTO userDTO);

    LoginResponse LoginUser(LoginDTO loginDTO);
}
