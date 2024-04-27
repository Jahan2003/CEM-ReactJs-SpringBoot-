package com.example.demo.Service;

import com.example.demo.Dto.EnquiryDto;
import java.util.List;

public interface EnquiryService {
    List<EnquiryDto> getAllEnquiries();
    EnquiryDto createEnquiry(EnquiryDto enquiryDto);
    void deleteEnquiryById(Long id);
}
