// Main script starts here

let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';

for(item of buttons) {
  item.addEventListener('click',(e)=> {
    buttonText=e.target.innerText;
    console.log("Button Text is",buttonText);
    if(buttonText=='X') {
      buttonText ='*';
      screenValue =screen.value;
      screenValue +=buttonText;
      screen.value =screenValue;
    }
     else if(buttonText=='+') {
      screenValue =screen.value;
      screenValue +=buttonText;
      screen.value =screenValue;
    }
    else if(buttonText=='-') {
      screenValue =screen.value;
      screenValue +=buttonText;
      screen.value =screenValue;
    }
    else if(buttonText=='/') {
      screenValue =screen.value;
      screenValue +=buttonText;
      screen.value =screenValue;
    }
     else if(buttonText=='%') {
      screenValue =screen.value;
      screenValue +=buttonText;
      screen.value =screenValue;
    }
    else if(buttonText=='C') {
      screenValue='';
      screen.value =screenValue;
    }
    else if(buttonText=='=') {
      screen.value=eval(screenValue);
    }
    else if (buttonText=='DEL') {
      screenValue =screen.value;
      var deleteItem=screenValue.substr(0,screenValue.length-1);
      screen.value=deleteItem;
    }
    else if(buttonText=='√') {
      screen.value =Math.sqrt(parseFloat(screen.value));
    }
    else if(buttonText=='3√') {
      screen.value =Math.cbrt(parseFloat(screen.value));
    }
    else if(buttonText=='x^2') {
      screenValue =screen.value;
      var sqrt=screenValue*screenValue;
      screen.value=sqrt;
    }
     else if(buttonText=='x^3') {
      screenValue =screen.value;
      var cube=screenValue*screenValue*screenValue;
      screen.value=cube;
    }
     else if(buttonText=='x^-1') {
      screenValue =screen.value;
      var reciprocal=1/screenValue;
      screen.value=reciprocal;
    }
    else {
      screenValue +=buttonText;
      screen.value =screenValue;
    }
  })
}

// Main script ends here
 
