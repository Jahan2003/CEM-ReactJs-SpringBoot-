package com.example.demo.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisterRequest{
    private String name;
    private String email;
    private String mobileNumber;
    private String password;
    private String organizationName;
    private String role;
}
