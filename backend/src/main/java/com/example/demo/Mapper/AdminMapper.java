package com.example.demo.Mapper;

import com.example.demo.Dto.AdminDto;
import com.example.demo.Model.Admin;

public class AdminMapper {
    public static AdminDto mapToAdminDto(Admin admin) {
        return new AdminDto(
            admin.getId(),
            admin.getName(),
            admin.getEmail(),
            admin.getMobileNumber(),
            admin.getPassword(),
            admin.getRole()
        );
    }
    
    public static Admin mapToAdmin(AdminDto adminDto) {
        return new Admin(
            adminDto.getId(),
            adminDto.getName(),
            adminDto.getEmail(),
            adminDto.getMobileNumber(),
            adminDto.getPassword(),
            adminDto.getRole()
        );
    }
}
