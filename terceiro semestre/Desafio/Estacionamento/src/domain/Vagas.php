<?php

	class Vaga {
		var $id_v;
		var $Dat;
		var $Hora_E;
		var $Hora_S;

		function getId_v(){
			return $this->id_v;
		}
		function setId_v($id_v){
			$this->id_v = $id_v;
		}

		function getDat(){
			return $this->Dat;
		}
		function setDat($Dat){
			$this->Dat = $Dat;
		}

		function getHora_E(){
			return $this->Hora_E;
		}
		function setHora_E($Hora_E){
			$this->Hora_E = $Hora_E;
		}

		function getHora_S(){
			return $this->Hora_S;
		}
		function setHora_S($Hora_S){
			$this->Hora_S = $Hora_S;
		}
	}

	class VagaDAO {
		//Concluido
		function create($Vaga) {
			$result = array();

			try {
				$result = array();
				$id_v = $Vaga->getId_v();
				$Hora_E = $Vaga->getHora_E();
				$Hora_S = $Vaga->getHora_S();
				$query = "INSERT INTO Vagas  VALUES ($id_v, Curdate() , '$Hora_E', '$Hora_S')";
				$con = new Connection();
				if(Connection::getInstance()->exec($query) >= 1){
					$result["msg"] = "Vaga cadastrada com sucesso";
					var_dump($Vaga);
				}else {
					$result["msg"] = "Erro ao cadastar a vaga";
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
				$query = "SELECT * FROM Vagas where  id_v = $id_v";

				$con = new Connection();

				$resultSet = Connection::getInstance()->query($query);

				while($row = $resultSet->fetchObject()){
					$vaga = new Vaga();
					$vaga->setId_v($row->id_v);
					$vaga->setDat($row->dat);
					$vaga->setHora_E($row->hora_e);
					$vaga->setHora_S($row->hora_s);
					$result[] = $vaga;
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
				$query = "SELECT * FROM Vagas";

				$con = new Connection();

				$resultSet = Connection::getInstance()->query($query);

				while($row = $resultSet->fetchObject()){
					$vaga = new Vaga();
					$vaga->setId_v($row->id_v);
					$vaga->setDat($row->dat);
					$vaga->setHora_E($row->hora_e);
					$vaga->setHora_S($row->hora_s);
					$result[] = $vaga;
				}
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}
		//Concluido
		function update($Vaga) {
			$result = array();
			try {				
				$id_v = $Vaga->getId_v();
				/*$Dat = $Vaga->getDat();
				$Hora_E = $Vaga->getHora_E();*/
				$Hora_S = $Vaga->getHora_S();	
				
				//$query = "UPDATE Vagas SET (id_V = '$id_v',Dat = '$Dat' ,Hora_E = '$Hora_E',  Hora_S = '$Hora_S')";
				$query = "UPDATE Vagas SET Hora_S='$Hora_S' WHERE id_v = $id_v";
				$con = new Connection();
				$status = Connection::getInstance()->prepare($query);

				if($status->execute()){
					$result["obj"] = $Vaga;				
					$result["msg"] = "Atualizado...";
				}else{
					$result["msg"] = "Erro ao atualizar";
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
				
				$query = "DELETE FROM Vagas WHERE id_v = $id_v";

				$con = new Connection();

				if(Connection::getInstance()->exec($query) >= 1){
					$result["msg"] = "Deletado com sucesso";
				}else {
					$result["msg"] = "Erro ao ser deletado";
				}
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}
	}
