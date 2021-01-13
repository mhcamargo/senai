<?php

	require("../process/process.Vagas.php");

	include("configs.php");

	$Ep = new VagaProcess();

	switch($_SERVER['REQUEST_METHOD']) {
		case "GET":
			$Ep->doGet($_GET);
			break;

		case "POST":
			$Ep->doPost($_POST);
			break;

		case "PUT":
			$Ep->doPut($_PUT);
			break;

		case "DELETE":
			$Ep->doDelete($_DELETE);
			break;
	}