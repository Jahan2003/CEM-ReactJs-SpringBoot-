package com.example.demo.Controller;

import com.example.demo.Dto.AddonsDto;
import com.example.demo.Service.AddonsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/addons")
public class AddonsController {

    @Autowired
    private AddonsService addonsService;

    @GetMapping
    public ResponseEntity<List<AddonsDto>> getAllAddons() {
        List<AddonsDto> addonsList = addonsService.getAllAddons();
        return new ResponseEntity<>(addonsList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddonsDto> getAddonsById(@PathVariable Long id) {
        AddonsDto addonsDto = addonsService.getAddonsById(id);
        if (addonsDto != null) {
            return new ResponseEntity<>(addonsDto, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<AddonsDto> createAddons(@RequestBody AddonsDto addonsDto) {
        AddonsDto createdAddons = addonsService.createAddons(addonsDto);
        return new ResponseEntity<>(createdAddons, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddonsDto> updateAddons(@PathVariable Long id, @RequestBody AddonsDto addonsDto) {
        AddonsDto updatedAddons = addonsService.updateAddons(id, addonsDto);
        if (updatedAddons != null) {
            return new ResponseEntity<>(updatedAddons, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAddons(@PathVariable Long id) {
        addonsService.deleteAddons(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

