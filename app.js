let equalBtn = document.getElementById("equalBtn");
let btns = document.getElementsByClassName("calcBtn");
let resultBox = document.getElementById("result_input");


btns = Array.from(btns);


btns.forEach(btn => {
    btn.addEventListener("click",()=>{
        if (btn.dataset.btnval!="=") {
            resultBox.value += btn.dataset.btnval;
            resultBox.style.backgroundColor = "red";
            equalBtn.style.backgroundColor = "red";

        }
        else{
            equalBtn.style.backgroundColor = "#0cbf0c";
            let operators = [];
            operators = (resultBox.value).split("")
            let alertString = "";
            operators.forEach(operator=>{
                if (operator=="+" || operator=="-" ||operator=="/" || operator=="*") {
                    alertString+=operator+" ";
                }
            })
            alert(`Operatos used in the calculation are ${alertString}`)
            if((resultBox.value).indexOf(".")!=-1){
                alert("Input contains the decimal values!!");
            }
            resultBox.value = eval(resultBox.value);
            if((resultBox.value).indexOf(".")!=-1){
                alert("Output contains the decimal values!!");
            }
            resultBox.style.backgroundColor = "#0cbf0c";
            

        }
    })
});