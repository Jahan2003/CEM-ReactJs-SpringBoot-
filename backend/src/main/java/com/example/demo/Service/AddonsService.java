package com.example.demo.Service;

import com.example.demo.Dto.AddonsDto;

import java.util.List;

public interface AddonsService {
    List<AddonsDto> getAllAddons();
    AddonsDto getAddonsById(Long id);
    AddonsDto createAddons(AddonsDto addonsDto);
    AddonsDto updateAddons(Long id, AddonsDto addonsDto);
    void deleteAddons(Long id);
}
