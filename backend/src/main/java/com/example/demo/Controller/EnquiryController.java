package com.example.demo.Controller;

import com.example.demo.Dto.EnquiryDto;
import com.example.demo.Service.EnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/enquiries")
public class EnquiryController {

    @Autowired
    private EnquiryService enquiryService;

    @GetMapping
    public ResponseEntity<List<EnquiryDto>> getAllEnquiries() {
        List<EnquiryDto> enquiries = enquiryService.getAllEnquiries();
        return new ResponseEntity<>(enquiries, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<EnquiryDto> createEnquiry(@RequestBody EnquiryDto enquiryDto) {
        EnquiryDto createdEnquiry = enquiryService.createEnquiry(enquiryDto);
        return new ResponseEntity<>(createdEnquiry, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnquiry(@PathVariable("id") Long id) {
        enquiryService.deleteEnquiryById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

