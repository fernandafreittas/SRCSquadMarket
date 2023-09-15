package com.example.SSquadDoScrum.SqadMarket.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.lang.NonNull;

@Entity
public class Administrador {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String email ;

    @NotNull
    private  Long cpf;

    @NotNull
    private String Senha;


    public Administrador() {
    }

    public Administrador(String email, Long cpf, String senha) {

        this.email = email;
        this.cpf = cpf;
        Senha = senha;
    }
}
