package com.example.SSquadDoScrum.SqadMarket.Controller;

import com.example.SSquadDoScrum.SqadMarket.Models.Cliente;
import com.example.SSquadDoScrum.SqadMarket.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api") // Removi a barra final para evitar conflitos
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @PostMapping("/login")
    public ResponseEntity<?> fazerLogin(@RequestBody Map<String, String> dadosLogin) {

        System.out.println("oiii***********************************");

        String email = dadosLogin.get("email");
        String senha = dadosLogin.get("senha");

        // Verifique as credenciais no banco de dados
        Cliente usuario = clienteRepository.findByEmailAndSenha(email, senha);

        if (usuario != null) {

            System.out.println("login realizado com sucesso");

            return ResponseEntity.ok("Login bem-sucedido");
        } else {
            System.out.println("falha ao realizar o login");
            // Credenciais inválidas, retorne uma resposta de erro
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");

        }
    }

    @PostMapping("/cadastro")
    public ResponseEntity<?> RealizaCadastro(@RequestBody Cliente cliente) {
        clienteRepository.save(cliente);
        return ResponseEntity.ok("Cadastro realizado com sucesso");
    }


}