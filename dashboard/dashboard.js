function logout(){
	window.top.close();
}

function read()
{
	var str=window.location.href;
	var res = str.split("=");
	var sr=res[1].split("#");
	
    document.getElementById("demo6").innerHTML = sr[0];
}


function apiaccess(){
var request = new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/adarshk007/only-pics/master/data.json?token=AWUCNz-mfXvW43MzRuZTpQYy0fo38CP6ks5a_b4ewA%3D%3D' , true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
 
  if (request.status >= 200 && request.status < 400) {
    data.forEach(data => {
      document.write("<p>"+data.company+"</p>"+"<br>");
    });
  } else {
    console.log('error');
  }
}

request.send();
}
read();
//apiaccess();

/*

<div id="sel">
<p id="demo"></p>
<p id="demo1">Balance :</p>
<p id="demo2"></p>
<p id="demo3">Quantity :</p>
<p id="demo4"></p>

</div>
*/
