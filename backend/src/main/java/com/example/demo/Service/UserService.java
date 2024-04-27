package com.example.demo.Service;

import java.util.List;

import com.example.demo.Dto.UserDto;

public interface UserService {
    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long  userId, UserDto userDto);

    void deleteUser(Long userId);

    UserDto findByEmail(String curName);

}
