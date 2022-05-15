<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min"></script>
<script src="Components/main.js"></script>

<title>Client Management</title>
</head>
<body>

	<div class="container">
		<div class="row">
			<div class="col-8">
				<h1 class="m-3">Client Management</h1>
				<form id="formClient">
				
				
					<!-- connectionNo
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
						<span class="input-group-text" id="connectionNo">Connection No :</span>
						</div>
						<input type="text" id="txtName" name="txtName">
					</div> -->
					
					<!-- clientName -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
						<span class="input-group-text" id="lblName">Client Name :</span>
						</div>
						<input type="text" id="clientName" name="txtName">
					</div>
					
					<!-- clientAddress -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
						<span class="input-group-text" id="lblName">Client Address :</span>
						</div>
						<input type="text" id="clientAddress" name="txtName">
					</div>
					
					<!-- phoneNo -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
						<span class="input-group-text" id="lblName">Phone No :</span>
						</div>
						<input type="text" id="phoneNo" name="txtName">
					</div>
					
					
					<!-- nic -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
						<span class="input-group-text" id="lblName">NIC :</span>
						</div>
						<input type="text" id="nic" name="txtName">
					</div>
					
					<!-- zone -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
						<span class="input-group-text" id="lblName">Zone :</span>
						</div>
						<input type="text" id="zone" name="txtName">
					</div>
					
					
	
					
					<!-- alert sections -->
					<div id="alertSuccess" class="alert alert-success"></div>
					<div id="alertError" class="alert alert-danger"></div>
					

					<input type="button" id="btnSave" value="Save" class="btn btn-primary">
					
					<input type="hidden" id="hidClientIDSave" name="hidClientIDSave" value="">
				
				</form>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-12" id="colStudents">
				
				
				
				
				
				
				
				
				
				
			
			</div>
		</div>
	</div>
	



</body>
</html>