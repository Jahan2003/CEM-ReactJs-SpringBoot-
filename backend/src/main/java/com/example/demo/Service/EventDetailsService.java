package com.example.demo.Service;

import java.util.List;

import com.example.demo.Dto.EventDetailsDto;

public interface EventDetailsService {
    EventDetailsDto getEventDetails(Long id);
    EventDetailsDto createEventDetails(EventDetailsDto eventDetailsDto);
    EventDetailsDto updateEventDetails(String name, EventDetailsDto eventDetailsDto);
    void deleteEventDetails(String name);
    List<EventDetailsDto> getEventDetailsByServiceId(Long serviceId);
    EventDetailsDto getEventDetailsByName(String name);
}
