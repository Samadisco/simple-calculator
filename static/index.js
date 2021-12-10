let display = document.getElementById('display');
let answerPlace = document.getElementById('answerPlace');

let elements = Array.from(document.getElementsByClassName('element'));

elements.map( element => {
    element.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                answerPlace.innerText = 0;
                break;
            case '=':
                try{
                     answerPlace.classList.add('h2')
                     answerPlace.classList.add('text-success')
                    answerPlace.innerText = eval(display.innerText);
                } catch {
                    answerPlace.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default: 
                if (display.classList.contains('text-success')){
                    display.classList.remove('text-success')
                }

                display.classList.add('h3')
                 display.innerText += e.target.innerText;
                
        }
    });
});