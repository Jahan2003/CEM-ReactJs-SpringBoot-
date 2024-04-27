package com.example.demo.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class EnquiryDto {
    private Long id;
    private String name;
    private String email;
    private String message;
    private String selectedTimeSlot;
    private String date;
    private String eventName;

}

