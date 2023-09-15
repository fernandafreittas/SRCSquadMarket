package com.example.SSquadDoScrum.SqadMarket.repository;

import com.example.SSquadDoScrum.SqadMarket.Models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {

    Cliente findByEmailAndSenha(String email, String senha);

}
