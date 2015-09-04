function newslettery(){
	var u = document.getElementById("sus_name").value;
	var e = document.getElementById("sus_email").value;
	var m =(document.URL);
	
	var status = document.getElementById("status");
	if(u == "" || e == ""){
		status.innerHTML = "Fill out all of the form data";
	} else {
		document.getElementById("optin").style.display = "none";
		status.innerHTML = 'please wait ...';
		var ajax = ajaxObj("POST","(document.URL)");
		    ajax.onreadystatechange = function() {
	        if(ajaxReturn(ajax) == true) {
				
	            if(ajax.responseText != "signup_success"){
					
					status.innerHTML = ajax.responseText;
					document.getElementById("optin").style.display = "block";
				} else {
					window.scrollTo(0,0);
					document.getElementById("signupform").innerHTML = "OK "+u+", check your email inbox and junk mail box at <u>"+e+"</u> ";
				}
	        }
        }
        ajax.send("u="+u+"&e="+e);
	}
}