package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Model.Enquiry;

@Repository
public interface EnquiryRepository extends JpaRepository<Enquiry,Long>{
}
