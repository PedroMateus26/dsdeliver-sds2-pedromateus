package com.devsuperior.pedromateus.dsdeliver.repositories;

import com.devsuperior.pedromateus.dsdeliver.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {

    List<Product> findAllByOrderByNameAsc();

}
