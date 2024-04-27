package com.example.demo.Controller;

import com.example.demo.Dto.EventDetailsDto;
import com.example.demo.Service.EventDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event-details")
@CrossOrigin(origins="*",allowedHeaders="*")
public class EventDetailsController {

    private final EventDetailsService eventDetailsService;

    @Autowired
    public EventDetailsController(EventDetailsService eventDetailsService) {
        this.eventDetailsService = eventDetailsService;
    }

    @GetMapping("/{id}")
    public EventDetailsDto getEventDetails(@PathVariable Long id) {
        return eventDetailsService.getEventDetails(id);
    }

    @PostMapping("/create")
    public EventDetailsDto createEventDetails(@RequestBody EventDetailsDto eventDetailsDto) {
        return eventDetailsService.createEventDetails(eventDetailsDto);
    }

    @PutMapping("/{name}/update")
    public EventDetailsDto updateEventDetails(@PathVariable String name, @RequestBody EventDetailsDto eventDetailsDto) {
        return eventDetailsService.updateEventDetails(name, eventDetailsDto);
    }

    @DeleteMapping("/{name}/delete")
    public void deleteEventDetails(@PathVariable String name) {
        eventDetailsService.deleteEventDetails(name);
    }

    @GetMapping("/service/{serviceId}")
    public List<EventDetailsDto> getEventDetailsByServiceId(@PathVariable Long serviceId) {
        return eventDetailsService.getEventDetailsByServiceId(serviceId);
    }
    @GetMapping("/name/{name}")
    public EventDetailsDto getEventDetailsByName(@PathVariable String name) {
        return eventDetailsService.getEventDetailsByName(name);
    }
}
