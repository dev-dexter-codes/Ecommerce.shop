package com.retailer.ecommerce.shop.service;

import com.retailer.ecommerce.shop.entity.Product;
import com.retailer.ecommerce.shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImplementation {

    @Autowired
    private ProductRepository repository;

    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return repository.findById(id);
    }

    public Product saveProduct(Product product) {
        return repository.save(product);
    }

    public Product updateProduct(Long id, Product productDetails) {
        return repository.findById(id).map(product -> {
            product.setName(productDetails.getName());
            product.setPrice(productDetails.getPrice());
            return repository.save(product);
        }).orElseThrow(() -> new RuntimeException("Product not found with id " + id));
    }

    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }
}
