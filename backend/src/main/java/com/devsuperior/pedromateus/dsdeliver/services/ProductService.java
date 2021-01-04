package com.devsuperior.pedromateus.dsdeliver.services;

import com.devsuperior.pedromateus.dsdeliver.dto.ProductDTO;
import com.devsuperior.pedromateus.dsdeliver.entities.Product;
import com.devsuperior.pedromateus.dsdeliver.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public List<ProductDTO> findAll(){
        List<Product> list = repository.findAllByOrderByNameAsc();
        return list.stream().map(x->new ProductDTO(x)).collect(Collectors.toList());
    }
}
