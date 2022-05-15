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
		$("#formClient").submit(); 

});


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
 $("#hidClientIDSave").val($(this).closest("tr").find('#hidClientUpdate').val()); 
 $("#clientName").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#clientAddress").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#phoneNo").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#nic").val($(this).closest("tr").find('td:eq(3)').text());
 $("#zone").val($(this).closest("tr").find('td:eq(3)').text());  
}); 
clientName
clientAddress
phoneNo
nic
zone

// REMOVE==========================================
$(document).on("click", ".remove", function(event)
{
	$(this).closest(".student").remove();
	$("#alertSuccess").text("Removed successfully.");
	$("#alertSuccess").show();
});






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


