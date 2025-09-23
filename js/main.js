//Input first number
//Input second number
//select radio button
//hit enter
//take first number if this radio button do this thing
//display answer in output


document.querySelector('#enterButt').addEventListener('click', calculate);


function calculate(){

    const firstInput = document.querySelector('#inputOne').value;
    const secondInput = document.querySelector('#inputTwo').value;
    const radioButtons = document.querySelectorAll('input[name="Operator"]');

    const first = Number(firstInput);
    const second = Number(secondInput);
    
    let answer;
    output = document.querySelector('#output');

    for(const radioButton of radioButtons)
        {
            if(radioButton.checked)
            {
                Operator = radioButton.value;
                if(Operator === "Addition" || "Subtraction" || "Multiplication" || "Division")
                break;
            }
            else
            {
                output.innerText = `Select an operator`
            }
        }
        if(Operator === "Addition")
            {
                 answer = first + second;
                 console.log(typeof(first));
                 console.log(typeof(second));
                 output.innerText = ` = ${answer}`
            }
        if(Operator === "Subtraction")
            {
                answer = first - second;
                console.log(typeof(first));
                console.log(typeof(second));
                output.innerText = ` = ${answer}`
            }
        if(Operator === "Multiplication")
            {
                answer = first * second;
                console.log(typeof(first));
                console.log(typeof(second));
                output.innerText = ` = ${answer}`
            }
        if(Operator === "Division")
            {
                answer = first / second;
                console.log(typeof(first));
                console.log(typeof(second));
                output.innerText = ` = ${answer}`
            }
}