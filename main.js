
function myFunction() {
  let city=document.getElementById("textbox").value;
  city=String(city)
  fetch("https://api.waqi.info/feed/"+city+"/?token=892947dfecc7ba74e80c7299e85de6fd8e405172")
  .then(res => res.json())
  .then(data =>  {
    console.log(data);
    console.log(data["data"]["aqi"]);
    let x=data["data"]["aqi"];
    document.getElementById("richTextBox").value=String(x)
    if(document.getElementById("richTextBox").value=="Kurukshetra")
       {
      document.getElementById("richTextBox").value=String(160)
    }
  });

}
function need(){
  var counter=0;
  var x=document.getElementById("richTextBox").value;
  x=parseInt(x);
  if(x>100){
    alert("You may need an air purifier!");
  }
  else if(x<100){
      if(document.getElementById("dropdown1").value==1){
        counter=counter+1;
      }
      if(document.getElementById("dropdown2").value==1){
        counter=counter+1;
      }
      if(document.getElementById("dropdown3").value==1){
        counter=counter+1;
      }
      if(document.getElementById("dropdown4").value==1){
        counter=counter+1;
      }
      if(counter>2){
        alert("You may need an air purifier!")
      }
      else{
        alert("You may not need an air purifier!")
      }
  }

}
