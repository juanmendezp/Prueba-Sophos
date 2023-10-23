package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cliente;


@RestController
@RequestMapping("/clientes")
public class ClienteController {
	@GetMapping("/{tipo}/{numeroDocumento}")
    public ResponseEntity<Cliente> obtenerInformacionCliente(
        @PathVariable String tipo,
        @PathVariable String numeroDocumento) {
		try {
			if (!("C".equals(tipo) || "P".equals(tipo)) || numeroDocumento.isEmpty()) {
			       return ResponseEntity.badRequest().body(new Cliente()); // 400 
		    }
	        if ("C".equals(tipo) && "23445322".equals(numeroDocumento)) {
	            Cliente cliente = new Cliente();
	            cliente.setPrimerNombre("Juan");
	            cliente.setSegundoNombre("Pablo");
	            cliente.setPrimerApellido("Mendez");
	            cliente.setSegundoApellido("Perdomo");
	            cliente.setTelefono("123456789");
	            cliente.setDireccion("Dirección de prueba");
	            cliente.setCiudadResidencia("Ciudad de prueba");
	            return ResponseEntity.ok(cliente); // 200 OK
	        } else {
	            return ResponseEntity.notFound().build(); // 404 Not Found
	        }
		}catch(Exception ex) {
			throw ex; // 500
		}
    }
}
