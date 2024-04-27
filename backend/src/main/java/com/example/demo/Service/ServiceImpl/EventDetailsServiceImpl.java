package com.example.demo.Service.ServiceImpl;

import com.example.demo.Dto.EventDetailsDto;
import com.example.demo.Mapper.ServiceMapper;
import com.example.demo.Model.EventDetails;
import com.example.demo.Repository.EventDetailsRepository;
import com.example.demo.Service.EventDetailsService;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventDetailsServiceImpl implements EventDetailsService {

    @Autowired
    private EventDetailsRepository eventDetailsRepository;


    @Override
    public EventDetailsDto getEventDetails(Long id) {
        EventDetails eventDetails = eventDetailsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("EventDetails not found"));
        return ServiceMapper.mapToEventDetailsDto(eventDetails);
    }

    @Override
    public EventDetailsDto createEventDetails(EventDetailsDto eventDetailsDto) {
        EventDetails eventDetails = ServiceMapper.mapToEventDetails(eventDetailsDto);
        EventDetails savedEventDetails = eventDetailsRepository.save(eventDetails);
        return ServiceMapper.mapToEventDetailsDto(savedEventDetails);
    }

    @Override
    public EventDetailsDto updateEventDetails(String name, EventDetailsDto eventDetailsDto) {
        EventDetails existingEventDetails = eventDetailsRepository.findByName(name);
        // Update all fields
        existingEventDetails.setName(eventDetailsDto.getName());
        existingEventDetails.setDescription(eventDetailsDto.getDescription());
        existingEventDetails.setServices(eventDetailsDto.getServices());
        existingEventDetails.setPrice(eventDetailsDto.getPrice());
        existingEventDetails.setServiceId(eventDetailsDto.getService_id());
        
        EventDetails savedEventDetails = eventDetailsRepository.save(existingEventDetails);
        return ServiceMapper.mapToEventDetailsDto(savedEventDetails);
    }
    
    @Transactional
    @Override
    public void deleteEventDetails(String name) {
        eventDetailsRepository.deleteByName(name);
    }

    @Override
    public List<EventDetailsDto> getEventDetailsByServiceId(Long serviceId) {
        List<EventDetails> eventDetailsList = eventDetailsRepository.findByServiceId(serviceId);
        return eventDetailsList.stream()
                .map(ServiceMapper::mapToEventDetailsDto)
                .collect(Collectors.toList());
    }
    @Override
    public EventDetailsDto getEventDetailsByName(String name) {
        EventDetails eventDetails = eventDetailsRepository.findByName(name);
        return ServiceMapper.mapToEventDetailsDto(eventDetails);
    }
}
