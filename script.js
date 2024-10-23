//declare variables
const temp = document.getElementById("temp");
const cels = document.getElementById("cels");
const fahr = document.getElementById("fahr");
const btn = document.getElementById("btn");
const result = document.getElementById("result")




let resultFinal;




btn.onclick = function(){
    

    if(cels.checked){
        let ourTemp = Number(temp.value);
        resultFinal = ourTemp * 9/5 + 32;
        return result.textContent = resultFinal.toFixed(1) + "F";
       
     }
     else if(fahr.checked){ 
        let ourTemp = Number(temp.value);
        resultFinal = (ourTemp - 32) * 5/9;
        return result.textContent = resultFinal.toFixed(1) + "C"
    }
    else{return result.textContent = "Please select unit!"}
    console.log(result)
}

