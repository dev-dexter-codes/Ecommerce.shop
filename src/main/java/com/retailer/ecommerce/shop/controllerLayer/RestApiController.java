package com.retailer.ecommerce.shop.controllerLayer;

import com.retailer.ecommerce.shop.entity.Product;
import com.retailer.ecommerce.shop.service.ProductServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/products")
public class RestApiController {

    @Autowired
    private ProductServiceImplementation service;

    @GetMapping
    public String getAllProducts() {
        return service.getAllProducts().toString();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable long id) {
        Optional<Product> product = service.getProductById(id);
        return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Product createProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct (@PathVariable long id, @RequestBody Product productDetails) {
        try {
            return ResponseEntity.ok(service.updateProduct(id, productDetails));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable long id) {
        try {
            service.deleteProduct(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
