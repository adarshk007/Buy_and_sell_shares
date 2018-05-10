function logout(){
	window.top.close();
}

function read()
{
	var str=window.location.href;
	var res = str.split("=");
	var sr=res[1].split("#");
	
    document.getElementById("demo").innerHTML = sr[0];
}
read();