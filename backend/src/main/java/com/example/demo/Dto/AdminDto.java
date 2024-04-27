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
public class AdminDto {
    private Long id;
    private String Name;
    private String email;
    private String mobileNumber;
    private String password;
    private Role role=Role.ADMIN;
}
