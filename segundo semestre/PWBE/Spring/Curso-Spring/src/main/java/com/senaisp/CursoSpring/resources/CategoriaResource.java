package com.senaisp.CursoSpring.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.senaisp.CursoSpring.domain.Categoria;
import com.senaisp.CursoSpring.services.CategoriaService;

@RestController
@RequestMapping(value = "/categorias")
public class CategoriaResource {

	@Autowired
	private CategoriaService servico;

	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public ResponseEntity<?> Listar(@PathVariable Integer id) {
		Categoria obj = servico.buscar(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Categoria> listarTudo() {
		return servico.retornaTudo();
	}


}
