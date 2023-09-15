package com.example.SSquadDoScrum.SqadMarket.service;


import com.example.SSquadDoScrum.SqadMarket.Models.Cliente;
import com.example.SSquadDoScrum.SqadMarket.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    


    @Autowired
    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public void cadastrarCliente(String nome, String email, String senha, String cpf,String Telefone, String DataDeNascimento) {
        Cliente cliente = new Cliente(nome, email, cpf, senha, Telefone,DataDeNascimento);
        clienteRepository.save(cliente);
    }

    public boolean autenticarLogin(String email, String senha) {
        Cliente cliente = clienteRepository.findByEmailAndSenha(email, senha);
        return cliente != null;
    }




}