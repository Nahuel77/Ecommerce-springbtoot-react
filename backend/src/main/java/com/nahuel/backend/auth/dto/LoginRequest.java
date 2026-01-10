package com.nahuel.backend.auth.dto;

public record LoginRequest(
        String email,
        String password
) {}