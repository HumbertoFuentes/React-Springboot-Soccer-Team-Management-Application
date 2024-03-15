package com.example.SoccerManager.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.impl.lang.Function;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Map;

@Service
public class JwtService {

    private static final String SECRET_KEY = "e2a3e783fcb2be47fe5a7a60e9834cc80a123d7396e9194834bd5c52c58568c5";
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

//    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
//        return Jwt
//    }

    public <T> T extractClaim (String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(getSignInKey()).build().parseSignedClaims(token).getPayload();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
