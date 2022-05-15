$(document).ready(function() 
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 



// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
		// Clear status msges-------------
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();
		
		// Form validation----------------
		var status = validateClientForm();
		
		// If not valid-------------------
		if (status != true)
		{
			$("#alertError").text(status);
			$("#alertError").show();
			return;
		}
		
		// If valid-----------------------
		var type = ($("#hidClientIDSave").val() == "") ? "POST" : "PUT"; 
		
		 $.ajax( 
		 { 
			 url : "ClientsAPI", 
			 type : type, 
			 data : $("#formClient").serialize(), 
			 dataType : "text", 
			 complete : function(response, status) 
			 { 
			 	onClientSaveComplete(response.responseText, status); 
			 } 
		 }); 

});

function onClientSaveComplete(response, status) 
{ 
	if (status == "success") 
	 { 
		 var resultSet = JSON.parse(response); 
		 
			 if (resultSet.status.trim() == "success") 
			 { 
				 $("#alertSuccess").text("Successfully saved."); 
				 $("#alertSuccess").show(); 
				 $("#divClientsGrid").html(resultSet.data); 
				 
			 } else if (resultSet.status.trim() == "error") 
			 { 
				 $("#alertError").text(resultSet.data); 
				 $("#alertError").show(); 
			 } 
	 } 
	 else if (status == "error") 
	 { 
		$("#alertError").text("Error while saving."); 
		$("#alertError").show(); 
	 } 
	 else
	 { 
		$("#alertError").text("Unknown error while saving.."); 
		$("#alertError").show(); 
	 } 
	 
	 $("#hidClientIDSave").val(""); 
	 $("#formClient")[0].reset(); 
}



// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
	 $("#hidClientIDSave").val($(this).data("connectionNo")); 
	
	 $("#clientName").val($(this).closest("tr").find('td:eq(0)').text()); 
	 $("#clientAddress").val($(this).closest("tr").find('td:eq(1)').text()); 
	 $("#phoneNo").val($(this).closest("tr").find('td:eq(2)').text()); 
	 $("#nic").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#zone").val($(this).closest("tr").find('td:eq(3)').text());  
}); 

// REMOVE==========================================


$(document).on("click", ".btnRemove", function(event) 
{ 
	 $.ajax( 
	 { 
		 url : "ClientsAPI", 
		 type : "DELETE", 
		 data : "connectionNo=" + $(this).data("connectionNo"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
		 	onItemDeleteComplete(response.responseText, status); 
		 } 
	 }); 
});


function onItemDeleteComplete(response, status) 
{ 
	if (status == "success") 
	 { 
	 var resultSet = JSON.parse(response); 
		 if (resultSet.status.trim() == "success") 
		 { 
			 $("#alertSuccess").text("Successfully deleted."); 
			 $("#alertSuccess").show(); 
			 $("#divClientsGrid").html(resultSet.data); 
		 }
		 else if (resultSet.status.trim() == "error") 
		 { 
			 $("#alertError").text(resultSet.data); 
			 $("#alertError").show(); 
		 } 
	 } 
	 else if (status == "error") 
	 { 
		 $("#alertError").text("Error while deleting."); 
		 $("#alertError").show(); 
	 } 
	 else
	 { 
		 $("#alertError").text("Unknown error while deleting.."); 
		 $("#alertError").show(); 
 	 } 
}







// CLIENT-MODEL=================================================================
function validateClientForm()
{
		
		// clientName
		if ($("#clientName").val().trim() == "") 
		 { 
			return "Insert Client Name."; 
		 } 
		 // clientAddress
		if ($("#clientAddress").val().trim() == "") 
		 { 
			return "Insert Client Address."; 
		 } 
		 // phoneNo
		if ($("#phoneNo").val().trim() == "") 
		 { 
			return "Insert Phone No."; 
		 } 
		 
			var tmpNumber = $("#phoneNo").val().trim(); 
			if (!$.isNumeric(tmpNumber)) 
			 { 
			 return "Insert a Valid Phone Number."; 
			 } 
			 
		 // nic
		if ($("#nic").val().trim() == "") 
		 { 
			return "Insert NIC."; 
		 } 
		 // zone
		if ($("#zone").val().trim() == "") 
		 { 
			return "Insert Grid Zone."; 
		 } 
		 

	return true;
}


