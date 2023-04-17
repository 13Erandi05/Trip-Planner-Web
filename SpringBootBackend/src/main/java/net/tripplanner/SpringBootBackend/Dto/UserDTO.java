package net.tripplanner.SpringBootBackend.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private int userId;
    private String user_name;
    private String email;
    private String password;

    @Override
    public String toString() {
        return "UserDTO{" +
                "userId=" + userId +
                ", user_name='" + user_name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
