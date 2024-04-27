package com.example.demo.Controller;

import com.example.demo.Dto.ServicesDto;
import com.example.demo.Service.EventServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
@CrossOrigin
public class ServicesController {

    @Autowired
    private EventServiceService serviceService;

    @GetMapping("/{id}")
    public ResponseEntity<ServicesDto> getServiceById(@PathVariable Long id) {
        ServicesDto serviceDto = serviceService.getEventService(id);
        return ResponseEntity.ok(serviceDto);
    }

    @GetMapping
    public ResponseEntity<List<ServicesDto>> getAllServices() {
        List<ServicesDto> serviceDtos = serviceService.getAllEventService();
        return ResponseEntity.ok(serviceDtos);
    }

    @PostMapping
    public ResponseEntity<ServicesDto> createService(@RequestBody ServicesDto serviceDto) {
        ServicesDto createdService = serviceService.createEventService(serviceDto);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServicesDto> updateService(@PathVariable Long id, @RequestBody ServicesDto serviceDto) {
        ServicesDto updatedService = serviceService.updateEventService(id, serviceDto);
        return ResponseEntity.ok(updatedService);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        serviceService.deleteEventService(id);
        return ResponseEntity.noContent().build();
    }
}
