package com.example.demo.Mapper;

import com.example.demo.Dto.AddonsDto;
import com.example.demo.Model.Addons;

public class AddonsMapper{
    public static AddonsDto mapToAddonsDto(Addons addons) {
        return new AddonsDto(
            addons.getId(),
            addons.getName(),
            addons.getPrice(),
            addons.getDescription()
        );
    }
    
    public static Addons mapToAddons(AddonsDto addonsDto) {
        return new Addons(
            addonsDto.getId(),
            addonsDto.getName(),
            addonsDto.getPrice(),
            addonsDto.getDescription()
        );
    }
}

