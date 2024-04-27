package com.example.demo.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventDto {
    private Long id;
    private String name;
    private String organization;
    private String email;
    private String mobile;
    private String city;
    private String venue;
    private LocalDate fromDate;
    private LocalDate toDate;
    private Integer attendees;
    private String eventName;
    private Double totalAmount;
    private String addon;
    private Integer userId;
    private String approval;
}
