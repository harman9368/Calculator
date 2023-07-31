let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'B') {
            screen.value = screen.value.slice(0, - 1);
        }
        else if (buttonText == 'S') {
            screen.value = Math.sqrt(screen.value);
        }
        else if (buttonText == 'sin') {
            screen.value = Math.sin(screen.value);
        }
        else if (buttonText == 'log') {
            //buttonText = 'log';
            //screenValue += buttonText;
            screen.value = Math.log(screen.value);
            //screen.value = screenValue;
            //screen.value = Math.log(screen.value);
        }
        else if (buttonText == 'tan') {
            screen.value = Math.tan(screen.value);
        }
        else if (buttonText == 'cos') {
            screen.value = Math.cos(screen.value);
        }
        else if (buttonText == 'csn') {
            screen.value = Math.cosine(screen.value);
        }
        else if(buttonText == 'BA'){
            screenValue = screenValue.slice(0,-1);
            screen.value = screenValue;
          //  ev.value = ev.value.slice(0,-1);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}