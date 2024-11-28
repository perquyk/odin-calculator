let x;
let y;
let operator;

let numpad = document.querySelector(".controls");
let disp = document.querySelector("#disp")
numpad.addEventListener("click", function(event) {
    switch(event.target.id){
        case "1": 
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            if(disp.textContent.length>=9){return}
            disp.textContent += parseInt(event.target.id);
            break;
        
        case "CE":
            disp.textContent = "";
            x = "";
            y = "";
            operator = "";
            break;
        case "plus":
            operator = "add";
            x = disp.textContent;
            disp.textContent = "";
            break;
        case "minus":
            operator = "subtract";
            x = disp.textContent;
            disp.textContent = "";
            break;
        case "times":
            operator = "multiply";
            x = disp.textContent;
            disp.textContent = "";
            break;
        case "div":
            operator = "divide";
            x = disp.textContent;
            disp.textContent = "";
            break;
        case "equal":
            y = disp.textContent;
            console.log(x, y, operator);
            disp.textContent = "";
            console.log(disp.textContent)
            operate(x,y,operator);
            break;
    } 
})

function operate(x, y, operator){
    switch(operator){
        case "add":
            add(x, y);
            console.log(add(x,y));
            disp.textContent = add(x,y);
            break;
        case "subtract":
            subtract(x,y);
            console.log(subtract(x,y));
            disp.textContent = subtract(x,y);
            break;
        case "multiply":
            multiply(x,y);
            console.log(multiply(x,y));
            disp.textContent = multiply(x,y);
            break;
        case "divide":
            divide(x,y);
            console.log(divide(x,y));
            disp.textContent = divide(x,y);
            break;
    }
}

function add(x,y){
    return parseInt(x)+parseInt(y);
}
function subtract(x,y){
    return parseInt(x)-parseInt(y);
}
function multiply(x,y){
    return parseInt(x)*parseInt(y); 
}
function divide(x,y){
    return parseInt(x)/parseInt(y);
}