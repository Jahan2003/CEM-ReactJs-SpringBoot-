package com.example.demo.Service;

import java.util.List;

import com.example.demo.Dto.ServicesDto;

public interface EventServiceService{
    List<ServicesDto>getAllEventService();
    ServicesDto getEventService(Long id);
    ServicesDto createEventService(ServicesDto servicesDto);
    ServicesDto updateEventService(Long id, ServicesDto servicesDto);
    void deleteEventService(Long id);
}

