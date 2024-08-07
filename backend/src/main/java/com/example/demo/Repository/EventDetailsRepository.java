package com.example.demo.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.EventDetails;


@Repository
public interface EventDetailsRepository extends JpaRepository<EventDetails, Long> {
    public List<EventDetails> findByServiceId(Long id);
    public EventDetails findByName(String name);
    public void deleteByName(String name);
}
