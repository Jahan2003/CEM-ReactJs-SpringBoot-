package com.example.demo.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Dto.AdminDto;
import com.example.demo.Model.Admin;
import com.example.demo.Model.Role;
import com.example.demo.Mapper.AdminMapper;
import com.example.demo.Repository.AdminRepository;
import com.example.demo.ResourceNotFoundException.ResourceNotFoundException;
import com.example.demo.Service.AdminService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    private final AdminRepository adminRepository;

    @Override
    public AdminDto createAdmin(AdminDto adminDto) {
        adminDto.setPassword(passwordEncoder.encode(adminDto.getPassword()));
        Admin admin = AdminMapper.mapToAdmin(adminDto);
        Admin savedAdmin = adminRepository.save(admin);
        return AdminMapper.mapToAdminDto(savedAdmin);
    }

    @Override
    public AdminDto getAdminById(Long adminId) {
        Admin admin = adminRepository.findById(adminId)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + adminId));
        return AdminMapper.mapToAdminDto(admin);
    }

    @Override
    public List<AdminDto> getAllAdmins() {
        List<Admin> admins = adminRepository.findAll();
        List<AdminDto> adminDtos = new ArrayList<>();
        for (Admin admin : admins) {
            adminDtos.add(AdminMapper.mapToAdminDto(admin));
        }
        return adminDtos;
    }

    @Override
public AdminDto updateAdmin(Long adminId, AdminDto adminDto) {
    Admin existingAdmin = adminRepository.findById(adminId)
            .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + adminId));
            existingAdmin.setName(adminDto.getName());
            existingAdmin.setEmail(adminDto.getEmail());
            existingAdmin.setMobileNumber(adminDto.getMobileNumber());
            existingAdmin.setPassword(passwordEncoder.encode(adminDto.getPassword()));
            existingAdmin.setRole(Role.ADMIN);
    Admin updatedAdmin = adminRepository.save(existingAdmin);
    return AdminMapper.mapToAdminDto(updatedAdmin);
}
@Override
public void deleteAdmin(Long adminId) {
    if (!adminRepository.existsById(adminId)) {
        throw new ResourceNotFoundException("Admin not found with id: " + adminId);
    }
    adminRepository.deleteById(adminId);
}
}
