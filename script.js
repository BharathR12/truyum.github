function displayLogin() {
	
	var userName=document.getElementById('user-name').value;
	var userPassword=document.getElementById('pass').value;
	
	if (userName="John" && userPassword=="john1234" )
	{
		alert("Login Successfull");
		location.href="menu_cust_item_list.html";
		return false;
	}
	else if (userName="Admin" && userPassword=="admin1234")
	{
		alert("Login Successfull");
		location.href="menu_list_admin.html";
		return false;
	}
}


