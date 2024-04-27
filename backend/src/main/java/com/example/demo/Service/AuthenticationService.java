package com.example.demo.Service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.example.demo.Model.Role;
import com.example.demo.Model.User;
import com.example.demo.Repository.AdminRepository;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Request.AuthenticationRequest;
import com.example.demo.Request.UserRegisterRequest;
import com.example.demo.Response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public String userRegister(UserRegisterRequest request) {
        Role role;
        role=Role.valueOf(request.getRole().toUpperCase());
        var user = User
                .builder()
                .name(request.getName())
                .email(request.getEmail())
                .mobileNumber(request.getMobileNumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .organizationName(request.getOrganizationName())
                .role(role)
                .build();
        userRepository.save(user);
        return "User Saved";
    }

    public AuthenticationResponse Userauthenticate(AuthenticationRequest request) {
            String jwtToken;
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
            jwtToken= jwtService.generateToken(user);       
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
    }
    public AuthenticationResponse Adminauthenticate(AuthenticationRequest request) {
        String jwtToken;
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var admin = adminRepository.findByEmail(request.getEmail()).orElseThrow();
        jwtToken= jwtService.generateToken(admin);       
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

}
