package com.senaisp.CursoSpring.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senaisp.CursoSpring.domain.Categoria;
import com.senaisp.CursoSpring.repositories.CategoriaRepository;

@Service
public class CategoriaService {
	@Autowired
	private CategoriaRepository repo;
	
	public Categoria buscar (Integer id) {
		Optional<Categoria> obj= repo.findById(id);
		return obj.orElse(null) ;
	}
	
	public List<Categoria> retornaTudo() {
		List<Categoria> obj = repo.findAll();
		return obj;
	}

}
