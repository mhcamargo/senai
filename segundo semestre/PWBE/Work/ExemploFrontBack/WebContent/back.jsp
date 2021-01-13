<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>BackEnd</title>
</head>
<body>

	<%
		out.print("salve ");
		String valor = request.getParameter("Valor");
		out.print(valor);
	%>

</body>
</html>