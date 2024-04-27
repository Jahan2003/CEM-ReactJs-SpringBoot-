package com.example.demo.Service;

import java.util.List;

import com.example.demo.Dto.AdminDto;

public interface AdminService {
    AdminDto createAdmin(AdminDto adminDto);

    AdminDto getAdminById(Long adminId);

    List<AdminDto> getAllAdmins();

    AdminDto updateAdmin(Long adminId, AdminDto adminDto);

    void deleteAdmin(Long adminId);

}
