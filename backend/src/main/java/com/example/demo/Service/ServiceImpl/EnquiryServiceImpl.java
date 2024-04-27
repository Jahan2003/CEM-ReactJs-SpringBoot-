package com.example.demo.Service.ServiceImpl;

import com.example.demo.Dto.EnquiryDto;
import com.example.demo.Mapper.EnquiryMapper;
import com.example.demo.Model.Enquiry;
import com.example.demo.Repository.EnquiryRepository;
import com.example.demo.Service.EnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EnquiryServiceImpl implements EnquiryService {

    @Autowired
    private EnquiryRepository enquiryRepository;

    @Override
    public List<EnquiryDto> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryRepository.findAll();
        return enquiries.stream()
                       .map(EnquiryMapper::mapToEnquiryDto)
                       .collect(Collectors.toList());
    }

    @Override
    public EnquiryDto createEnquiry(EnquiryDto enquiryDto) {
        Enquiry enquiry = EnquiryMapper.mapToEnquiry(enquiryDto);
        Enquiry savedEnquiry = enquiryRepository.save(enquiry);
        return EnquiryMapper.mapToEnquiryDto(savedEnquiry);
    }
    @Override
    public void deleteEnquiryById(Long id) {
        enquiryRepository.deleteById(id);
    }
}

