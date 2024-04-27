package com.example.demo.Dto;

import com.example.demo.Model.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private String mobileNumber;
    private String password;
    private String organizationName;
    private Role role;
}
