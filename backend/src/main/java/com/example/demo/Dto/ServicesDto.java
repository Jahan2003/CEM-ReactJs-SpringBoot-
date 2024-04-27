    package com.example.demo.Dto;

    import lombok.AllArgsConstructor;
    import lombok.Getter;
    import lombok.NoArgsConstructor;
    import lombok.Setter;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class ServicesDto{

        private Long id;
        private String title;
        private String[] subtopics;
        private String[] descriptions;
    }
