<?php

	require("../../domain/connection.php");
	require("../../domain/Veiculos.php");

	class VeiculosProcess {
		var $vd;

		//Concluido
		function doGet($arr){
			$vd = new VeiculosDAO();
			if($arr["id_v"] == "0"){
				$sucess = $vd->readAll();
			} else {
				$sucess = $vd->read($arr["id_v"]);
			}
			http_response_code(200);
			echo json_encode($sucess);
		}

		//Concluido
		function doPost($arr){
			$vd = new VeiculosDAO();
			$veiculo = new Veiculo();
			$veiculo->setId_v($arr["id_v"]);
			$veiculo->setPlaca($arr["Placa"]);
			$veiculo->setTipo($arr["Tipo"]);
			$veiculo->setObs($arr["Obs"]);
			$sucess = $vd->create($veiculo);
			http_response_code(200);
			echo json_encode($sucess);
		}

		//Travado
		function doPut($arr){
			$vd = new VeiculosDAO();
			$veiculo = new Veiculo();
			$veiculo->setId_v($arr["id_v"]);
			$veiculo->setPLaca($arr["Placa"]);
			$veiculo->setTipo($arr["Tipo"]);
			$veiculo->setObs($arr["Obs"]);
			$sucess = $vd->update($veiculo);
			http_response_code(200);
			echo json_encode($sucess);
		}

		//Concluido
		function doDelete($arr){
			$vd = new VeiculosDAO();
			$id_v = $arr["id_v"];
			$sucess = $vd->delete($id_v);
			http_response_code(200);
			echo json_encode($sucess);
		}
	}