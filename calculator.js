let cal=document.getElementById('cal1');
buttons=document.querySelectorAll('button');
let screenvalue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        // console.log(buttonText);
        cal.value+=buttonText;
        if(buttonText=='ON'){
            screenvalue='';
            cal.value=screenvalue;
        }
        else if(buttonText=='='){
            var isValid = true;
        const re = /^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/;

    
        //   console.log(screenvalue);
          if(re.test(screenvalue) == 0)
          isValid=false;



            if(!isValid){
                alert("Invalid regular expression");
                // console.log(screenvalue);
                // console.log(cal.value);
                cal.value=cal.value.slice(0,-1);
                // console.log(cal.value);
            } 
            else{
            console.log(screenvalue);
            cal.value=eval(screenvalue);
            }
            
        }else if(buttonText=='DEL'){
            screenvalue=screenvalue.slice(0,-1);
            cal.value=screenvalue;

        }else{
            screenvalue+=buttonText;
            cal.value=screenvalue;
        }

    })
}