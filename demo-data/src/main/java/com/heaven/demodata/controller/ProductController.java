package com.heaven.demodata.controller;

import com.heaven.demodata.entity.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ProductController {
    private List<Product> products;
    public ProductController() {
        List<Product> products = List.of(
                new Product(1L,"Camera"),
                new Product(2L,"Book"),
                new Product(3L,"Desktop")
        );
        this.products=products;
    }

    @GetMapping
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(products);
    }
}
