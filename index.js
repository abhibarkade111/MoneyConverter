let inputEnter= document.getElementById('inputEnter');
let inputDisplay= document.getElementById('inputDisplay');
let buttonEnter= document.getElementById('buttonEnter');
let input1=document.getElementById('input1');
let input2=document.getElementById('input2');
let dropbutton=document.getElementById('dropbutton');
let sign1=document.getElementById('sign1');
let sign2=document.getElementById('sign2');
let dropb=document.getElementById('dropb');
let k=0;

const calculate = () =>{

    if(k==1){
     
        inputDisplay.value=(inputEnter.value*75.03).toFixed(3);
    }
    else if(k==2){
        inputDisplay.value=(inputEnter.value/75.03).toFixed(3);
    }
    else{
        inputDisplay.value=(inputEnter.value*75.03).toFixed(3);
    }

   
}

buttonEnter.addEventListener('click',()=>{
    calculate();
});

input1.addEventListener('click',()=>{
    dropb.innerHTML=input1.innerHTML;
    inputDisplay.value="";
    inputEnter.value="";
    sign1.innerHTML='$';
    sign2.innerHTML='₹';
    k=1;
    
});

input2.addEventListener('click',()=>{
    dropb.innerHTML=input2.innerHTML;
    inputDisplay.value="";
    inputEnter.value="";
    sign1.innerHTML='₹';
    sign2.innerHTML='$';
    k=2;
    
});

inputEnter.addEventListener("keyup", function(KeyboardEvent) {
  if (KeyboardEvent.keyCode == 13) {
   KeyboardEvent.preventDefault();
  buttonEnter.click();
   console.log("hello");
  }
});


