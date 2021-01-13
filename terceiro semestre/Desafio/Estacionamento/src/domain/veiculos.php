<?php

	class Veiculo {
		var $id_v;
		var $Placa;
		var $Tipo;
		var $Obs;

		function getId_v(){
			return $this->id_v;
		}
		function setId_v($id_v){
			$this->id_v = $id_v;
		}

		function getPlaca(){
			return $this->Placa;
		}
		function setPlaca($Placa){
			$this->Placa = $Placa;
		}

		function getTipo(){
			return $this->Tipo;
		}
		function setTipo($Tipo){
			$this->Tipo = $Tipo;
		}

		function getObs(){
			return $this->Obs;
		}
		function setObs($Obs){
			$this->Obs = $Obs;
		}
	}

	class VeiculosDAO {
		//Concluido
		function create($veiculo) {
			$result = array();

			try {
				$result = array();
				$id_v = $veiculo->getId_v();
				$placa = $veiculo->getPlaca();
				$Tipo = $veiculo->getTipo();
				$Obs = $veiculo->getObs();
				$query = "INSERT INTO Veiculos VALUES ($id_v, '$placa', '$Tipo', '$Obs')";
				$con = new Connection();
				if(Connection::getInstance()->exec($query) >= 1){
					$result["msg"] = "Veiculo cadastrado com sucesso";
					var_dump($veiculo);
				} else {
					$result["alert"] = "Erro ao cadastrar o veiculo";
				}
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}
		//Concluido
		function read($id_v) {
			$result = array();

			try {
				$query = "SELECT * FROM Veiculos WHERE id_v = $id_v";

				$con = new Connection();

				$resultSet = Connection::getInstance()->query($query);

				while($row = $resultSet->fetchObject()){
					$veiculo = new Veiculo();
					$veiculo->setId_v($row->id_v);
					$veiculo->setPlaca($row->placa);
					$veiculo->setTipo($row->tipo);
					$veiculo->setObs($row->Obs);
					$result[] = $veiculo;
				}
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}
		//Concluido
		function readAll() {
			$result = array();

			try {
				$query = "SELECT * FROM Veiculos ";

				$con = new Connection();

				$resultSet = Connection::getInstance()->query($query);

				while($row = $resultSet->fetchObject()){
					$veiculo = new Veiculo();
					$veiculo->setId_v($row->id_v);
					$veiculo->setPlaca($row->placa);
					$veiculo->setTipo($row->tipo);
					$veiculo->setObs($row->obs);
					$result[] = $veiculo;
				}
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}
		//Concluido
		function update($Veiculo) {
			$result = array();
			try {
				$id_v = $Veiculo->getId_v();
				$Placa = $Veiculo->getPlaca();
				$Tipo = $Veiculo->getTipo();
				$Obs = $Veiculo->getObs();
				$query = "UPDATE Veiculos SET  Placa = '$Placa', Tipo = '$Tipo', Obs = '$Obs' WHERE id_v = $id_v";

				$con = new Connection();

				$status = Connection::getInstance()->prepare($query);

				if($status->execute()){
					$result["msg"] = "Alterado com sucesso";
				} else {
					$result["Alert"] = "Erro ao ser alterado";
				}
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}
		//Concluido
		function delete($id_v) {
			$result = array();

			try {
				$query = "DELETE FROM Veiculos WHERE id_v = $id_v";

				$con = new Connection();

				if(Connection::getInstance()->exec($query) >= 1){
					$result["msg"] = "Deletado com sucesso";
				} else {
					$result["Alert"] = "Erro ao ser deletado, veiculo esta na vaga ainda";
				}
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}
	}
