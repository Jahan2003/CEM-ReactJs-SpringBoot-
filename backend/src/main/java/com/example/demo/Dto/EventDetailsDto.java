    package com.example.demo.Dto;


    import lombok.AllArgsConstructor;
    import lombok.Getter;
    import lombok.NoArgsConstructor;
    import lombok.Setter;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class EventDetailsDto{
        private Long id;
        private String name;
        private String description;
        private String services;
        private double price;
        private int service_id;
    }
