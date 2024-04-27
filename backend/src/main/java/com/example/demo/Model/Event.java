package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "organization_name")
    private String organization;

    @Column(name = "contact_email")
    private String email;

    @Column(name = "contact_mobile")
    private String mobile;

    @Column(name = "event_city")
    private String city;

    @Column(name = "event_venue")
    private String venue;

    @Column(name = "start_date")
    private LocalDate fromDate;

    @Column(name = "end_date")
    private LocalDate toDate;

    @Column(name = "attendee_count")
    private Integer attendees;

    @Column(name = "event")
    private String eventName;

    @Column(name = "total_amt")
    private Double totalAmount;

    @Column(name = "addon")
    private String addon;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "approval")
    private String approval;

}

