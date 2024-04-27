package com.example.demo.Service.ServiceImpl;


import com.example.demo.Service.AddonsService;
import com.example.demo.Dto.AddonsDto;
import com.example.demo.Mapper.AddonsMapper;
import com.example.demo.Model.Addons;
import com.example.demo.Repository.AddonsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddonsServiceImpl implements AddonsService {

    @Autowired
    private AddonsRepository addonsRepository;

    @Override
    public List<AddonsDto> getAllAddons() {
        List<Addons> addonsList = addonsRepository.findAll();
        return addonsList.stream().map(AddonsMapper::mapToAddonsDto).collect(Collectors.toList());
    }

    @Override
    public AddonsDto getAddonsById(Long id) {
        Addons addons = addonsRepository.findById(id).orElse(null);
        if (addons != null) {
            return AddonsMapper.mapToAddonsDto(addons);
        }
        return null;
    }

    @Override
    public AddonsDto createAddons(AddonsDto addonsDto) {
        Addons addons = AddonsMapper.mapToAddons(addonsDto);
        addons = addonsRepository.save(addons);
        return AddonsMapper.mapToAddonsDto(addons);
    }

    @Override
    public AddonsDto updateAddons(Long id, AddonsDto addonsDto) {
        Addons existingAddons = addonsRepository.findById(id).orElse(null);
        if (existingAddons != null) {
            existingAddons.setName(addonsDto.getName());
            existingAddons.setPrice(addonsDto.getPrice());
            existingAddons.setDescription(addonsDto.getDescription());
            existingAddons = addonsRepository.save(existingAddons);
            return AddonsMapper.mapToAddonsDto(existingAddons);
        }
        return null;
    }

    @Override
    public void deleteAddons(Long id) {
        addonsRepository.deleteById(id);
    }
}
