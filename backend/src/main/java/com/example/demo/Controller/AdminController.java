// package com.example.demo.Controller;

// import java.util.List;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.Dto.AdminDto;
// import com.example.demo.Service.AdminService;

// import lombok.AllArgsConstructor;

// @AllArgsConstructor
// @RestController
// @RequestMapping("/api/admins")
// public class AdminController {

//     private AdminService adminService;

//     @PostMapping
//     @PreAuthorize("hasAuthority('ROLE_ADMIN')")
//     public ResponseEntity<AdminDto> createAdmin(@RequestBody AdminDto adminDto) {
//         AdminDto savedAdmin = adminService.createAdmin(adminDto);
//         return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
//     }

//     @GetMapping("/{id}")
//     @PreAuthorize("hasAuthority('ROLE_ADMIN')")
//     public ResponseEntity<AdminDto> getAdminById(@PathVariable("id") Long adminId) {
//         AdminDto adminDto = adminService.getAdminById(adminId);
//         return ResponseEntity.ok(adminDto);
//     }

//     @GetMapping
//     @PreAuthorize("hasAuthority('ROLE_ADMIN')")
//     public ResponseEntity<List<AdminDto>> getAllAdmins() {
//         List<AdminDto> admins = adminService.getAllAdmins();
//         return ResponseEntity.ok(admins);
//     }

// @PostMapping("/{id}")
// @PreAuthorize("hasAuthority('ROLE_ADMIN')")
// public ResponseEntity<AdminDto> updateAdmin(@PathVariable("id") Long adminId, @RequestBody AdminDto adminDto) {
//     AdminDto updatedAdmin = adminService.updateAdmin(adminId, adminDto);
//     return ResponseEntity.ok(updatedAdmin);
// }
// @DeleteMapping("/{id}")
// @PreAuthorize("hasAuthority('ROLE_ADMIN')")
// public ResponseEntity<String> deleteAdmin(@PathVariable("id") Long adminId) {
//     adminService.deleteAdmin(adminId);
//     return ResponseEntity.ok("Admin with ID " + adminId + " has been deleted.");
// }
// }
