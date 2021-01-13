<?php

	require("../../domain/connection.php");
	require("../../domain/Vagas.php");

	class VagaProcess {
		var $Ed;

		//Concuido
		function doGet($arr){
			$Ed = new VagaDAO();
			if($arr["id_v"] == "0"){ //Lê o id e se for igual a zero imprime todos
				$sucess = $Ed->readAll();
			} else { //Se não lê qual foi informado
				$sucess = $Ed->read($arr["id_v"]);
			}
			http_response_code(200);
			echo json_encode($sucess);
		}

		//Concluido
		function doPost($arr){
			$Ed = new VagaDAO();
			$vaga = new Vaga();
			$vaga->setId_v($arr["id_v"]);
			$vaga->setHora_E($arr["Hora_E"]);
			$vaga->setHora_S($arr["Hora_S"]);
			$sucess = $Ed->create($vaga);
			http_response_code(200);
			echo json_encode($sucess);
		}

		//Concluido
		function doPut($arr){
			$Ed = new VagaDAO();
			$vaga = new Vaga();
			$vaga->setId_v($arr["id_V"]);
			/*$vaga->setDat($arr["Dat"]);
			$vaga->setHora_E($arr["Hora_E"]);*/
			$vaga->setHora_S($arr["Hora_S"]);
			$sucess = $Ed->update($vaga);
			http_response_code(200);
			echo json_encode($sucess);
		}

		//Concluido
		function doDelete($arr){
			$Ed = new VagaDAO();
			$id_v = $arr["id_v"];
			$sucess = $Ed->delete($id_v);
			http_response_code(200);
			echo json_encode($sucess);
		}
	}