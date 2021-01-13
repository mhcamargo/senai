package com.senaisp.CursoSpring.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senaisp.CursoSpring.domain.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria,Integer>{

	//@Autowired CategoriaRepository categoriaRepository;
	//categoriaRepository.saveAll(Arrays.asList(cat1,cat2));

}
