function login(){
var name = document.forms["myForm"]["fname"].value;
var pswd = document.forms["myForm"]["pname"].value;
console.log(name);
var cred= {"Ritesh":"ritesh1234", "adarsh":"adarsh1234", "mohit":"mohit@15", "shyam":"12sh567"};
var w=Object.keys(cred);
var p=Object.values(cred);
var count=0;
for (i = 0; i < p.length; i++) {
  if(w[i]==name)
  {
  if(cred[name]==pswd){
  count=count+1;
  break;
  }
  }
}
if(count==0)
{
alert("Wrong Username or Wrong Password");
return false;
}
else{
return true;
}

}