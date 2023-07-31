function add(){
    let a=parseInt(document.getElementById("number1").value);
    let b=parseInt(document.getElementById("number2").value);
    let c=a+b;
    document.getElementById("1").innerHTML="ADDITION : "+c ;
}
function sub(){
    let a=parseInt(document.getElementById("number1").value);
    let b=parseInt(document.getElementById("number2").value);
    let c=a-b;
    document.getElementById("2").innerHTML="SUBRACTION : "+c ;
}