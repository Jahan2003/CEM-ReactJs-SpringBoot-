package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Addons;

@Repository
public interface AddonsRepository extends JpaRepository<Addons,Long>{
}