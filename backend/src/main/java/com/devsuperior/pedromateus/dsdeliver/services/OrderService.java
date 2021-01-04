package com.devsuperior.pedromateus.dsdeliver.services;

import com.devsuperior.pedromateus.dsdeliver.dto.OrderDTO;
import com.devsuperior.pedromateus.dsdeliver.entities.Order;
import com.devsuperior.pedromateus.dsdeliver.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    public List<OrderDTO> findAll(){
        List<Order> list = repository.findOrdersWithProducts();
        return list.stream().map(x->new OrderDTO(x)).collect(Collectors.toList());
    }
}
