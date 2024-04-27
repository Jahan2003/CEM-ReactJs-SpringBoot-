package com.example.demo.Service.ServiceImpl;

import com.example.demo.Dto.ServicesDto;
import com.example.demo.Mapper.ServiceMapper;
import com.example.demo.Model.EventServices;
import com.example.demo.Repository.EventServicesRepository;
import com.example.demo.Service.EventServiceService;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventServiceServiceImpl implements EventServiceService {

    private final EventServicesRepository eventServicesRepository;

    @Autowired
    public EventServiceServiceImpl(EventServicesRepository eventServicesRepository) {
        this.eventServicesRepository = eventServicesRepository;
    }

    @Override
    public ServicesDto getEventService(Long id) {
        EventServices eventServices = eventServicesRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("EventService not found"));
        return ServiceMapper.mapToEventServicesDto(eventServices);
    }

    @Override
    public ServicesDto createEventService(ServicesDto servicesDto) {
        EventServices eventServices = ServiceMapper.mapToEventServices(servicesDto);
        EventServices savedEventServices = eventServicesRepository.save(eventServices);
        return ServiceMapper.mapToEventServicesDto(savedEventServices);
    }

    @Override
    public ServicesDto updateEventService(Long id, ServicesDto servicesDto) {
        EventServices existingEventServices = eventServicesRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("EventService not found"));
        EventServices updatedEventServices = ServiceMapper.mapToEventServices(servicesDto);
        updatedEventServices.setId(existingEventServices.getId());
        updatedEventServices.setTitle(existingEventServices.getTitle());
        updatedEventServices.setDescriptions(existingEventServices.getDescriptions());
        updatedEventServices.setSubtopics(existingEventServices.getSubtopics());
        EventServices savedEventServices = eventServicesRepository.save(updatedEventServices);
        return ServiceMapper.mapToEventServicesDto(savedEventServices);
    }

    @Override
    public void deleteEventService(Long id) {
        eventServicesRepository.deleteById(id);
    }

    @Override
    public List<ServicesDto> getAllEventService() {
       List<EventServices> eventServicesList=eventServicesRepository.findAll();
       return eventServicesList.stream()
                .map(ServiceMapper::mapToEventServicesDto)
                .collect(Collectors.toList());
    }
}
