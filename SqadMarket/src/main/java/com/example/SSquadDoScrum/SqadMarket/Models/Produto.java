package com.example.SSquadDoScrum.SqadMarket.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private byte[] fotos;

    private String Descricao;

    private long valor;

    private Long idSetores;

    private long desconto;



}
