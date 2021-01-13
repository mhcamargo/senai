<?php

	require("../domain/conexao.php");//Importa a classe Conexao que utiliza o objeto PDO
	require("../domain/usuario.php");
	require("../domain/pessoa.php");
	$ud = new UsuarioDAO();
	$pd = new PessoaDAO();
	
	header("Access-Control-Allow-Origin:*");
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Max-Age: 1000');
	header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
	header("Content-type: application/json; charset=UTF-8");

	$method = $_SERVER['REQUEST_METHOD'];
	

?>