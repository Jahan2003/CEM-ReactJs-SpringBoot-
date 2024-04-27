package com.example.demo.Mapper;

import com.example.demo.Dto.EnquiryDto;
import com.example.demo.Model.Enquiry;

public class EnquiryMapper {

    public static EnquiryDto mapToEnquiryDto(Enquiry enquiry) {
        return new EnquiryDto(
            enquiry.getId(),
            enquiry.getName(),
            enquiry.getEmail(),
            enquiry.getMessage(),
            enquiry.getSelectedTimeSlot(),
            enquiry.getDate(),
            enquiry.getEventName()
        );
    }

    public static Enquiry mapToEnquiry(EnquiryDto enquiryDto) {
        return new Enquiry(
            enquiryDto.getId(),
            enquiryDto.getName(),
            enquiryDto.getEmail(),
            enquiryDto.getMessage(),
            enquiryDto.getSelectedTimeSlot(),
            enquiryDto.getDate(),
            enquiryDto.getEventName()
        );
    }
}
