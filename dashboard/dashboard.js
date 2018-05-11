function logout(){
	window.top.close();
}

function read()
{
	var str=window.location.href;
	var res = str.split("=");
	var sr=res[1].split("#");
	
    document.getElementById("demo6").innerHTML = sr[0];
  // else
  // {
  //   document.write("<centre><h2>404 Page error/h2></centre>");
  // }
}


function apiaccess(){
var request = new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/adarshk007/only-pics/master/data.json?token=AWUCNz-mfXvW43MzRuZTpQYy0fo38CP6ks5a_b4ewA%3D%3D' , true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  var i=1;
  var test="<input type='text' class='form-control' placeholder='Qty' id='usr'/>";
  if (request.status >= 200 && request.status < 400) {
    data.forEach(data => {
    var table = document.getElementById("myTable");
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = data.company;
    cell2.innerHTML = data.price;
    if(data.status=="low"){
    cell3.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/768px-Red_Arrow_Down.svg.png' alt='hello' width='20px' align='middle'/>";}
    else
    {
    cell3.innerHTML = "<img src='https://user-images.githubusercontent.com/23396919/39935778-c665fb5e-5567-11e8-8c5a-d0569836083f.png' alt='hello' width='20px' align='middle'/>";
    }
    cell4.innerHTML="100";
    cell5.innerHTML=test;
    cell6.innerHTML="<button type='button' class='btn btn-default'>Buy</button>";
    i=i+1;
     
    });
  } else {
    console.log('error');
  }
}

request.send();
}
read();
apiaccess();

/*

<div id="sel">
<p id="demo"></p>
<p id="demo1">Balance :</p>
<p id="demo2"></p>
<p id="demo3">Quantity :</p>
<p id="demo4"></p>

</div>
*/
