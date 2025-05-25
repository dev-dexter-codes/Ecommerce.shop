package com.retailer.ecommerce.shop.requestResponseDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationRequest {
    private String username;
    private String password;

    // Getters and setters
}
