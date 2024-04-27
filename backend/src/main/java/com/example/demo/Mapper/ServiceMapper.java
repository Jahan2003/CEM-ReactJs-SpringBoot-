    package com.example.demo.Mapper;

    import com.example.demo.Dto.EventDetailsDto;
    import com.example.demo.Dto.ServicesDto;
    import com.example.demo.Model.EventDetails;
    import com.example.demo.Model.EventServices;


    public class ServiceMapper {

        public static ServicesDto mapToEventServicesDto(EventServices eventServices) {
            ServicesDto eventServicesDto = new ServicesDto();
            eventServicesDto.setId(eventServices.getId());
            eventServicesDto.setTitle(eventServices.getTitle());
            eventServicesDto.setSubtopics(eventServices.getSubtopics());
            eventServicesDto.setDescriptions(eventServices.getDescriptions());
            return eventServicesDto;
        }

        public static EventDetailsDto mapToEventDetailsDto(EventDetails eventDetails) {
            EventDetailsDto eventDetailsDto = new EventDetailsDto();
            eventDetailsDto.setName(eventDetails.getName());
            eventDetailsDto.setDescription(eventDetails.getDescription());
            eventDetailsDto.setServices(eventDetails.getServices());
            eventDetailsDto.setPrice(eventDetails.getPrice());
            eventDetailsDto.setService_id(eventDetails.getServiceId());
            return eventDetailsDto;
        }

        public static EventDetails mapToEventDetails(EventDetailsDto eventDetailsDto) {
            EventDetails eventDetails = new EventDetails();
            eventDetails.setId(eventDetailsDto.getId());
            eventDetails.setName(eventDetailsDto.getName());
            eventDetails.setDescription(eventDetailsDto.getDescription());
            eventDetails.setServices(eventDetailsDto.getServices());
            eventDetails.setPrice(eventDetailsDto.getPrice());
            eventDetails.setServiceId(eventDetailsDto.getService_id());
            return eventDetails;
        }

        public static EventServices mapToEventServices(ServicesDto eventServicesDto) {
            EventServices eventServices = new EventServices();
            eventServices.setId(eventServicesDto.getId());
            eventServices.setTitle(eventServicesDto.getTitle());
            eventServices.setSubtopics(eventServicesDto.getSubtopics());
            eventServices.setDescriptions(eventServicesDto.getDescriptions());
            return eventServices;
        }
    }
