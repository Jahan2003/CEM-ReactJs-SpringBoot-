package com.example.demo.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Request.AuthenticationRequest;
import com.example.demo.Request.UserRegisterRequest;
import com.example.demo.Response.AuthenticationResponse;
import com.example.demo.Service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
@CrossOrigin(origins="*",allowedHeaders="*")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegisterRequest request) {
        return ResponseEntity.ok(authenticationService.userRegister(request));
    }
    
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> Userauthenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.Userauthenticate(request));
    }
}
