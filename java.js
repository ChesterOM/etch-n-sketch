// notes for tomorrow>>>> gridNumber is outputting undefined after running newPad so fix
//                         then fix div sizing so the userinput will fit in container no matter what.
//                          also add a 100 limit to the grid to prevent crashes.
let gridNumber 
function userInput(){
     
    let askUser = prompt('Enter A Number Greater Then 1')
    
    if (askUser === ''){
        alert('ERROR Please Input Valid Number')
    } else if (askUser < 1){
        alert('ERROR Number Must Be Greater Then 1')
    } else {
        gridNumber = parseInt(askUser) * parseInt(askUser);
        createGrid(askUser);
    }}

function newPad(){
    const button = document.querySelector('#reset')
    button.addEventListener('click', userInput);  
}

function createGrid(squareCount){
    const container = document.querySelector('#container');
    container.innerHTML = ''
    let divCount = container.getElementsByTagName('div').length;
    const grid = document.createElement('div');
        grid.classList.add('grid-container')
        container.appendChild(grid);
        
        for (let i = divCount; i < gridNumber; i++ ) {
            const newDiv = document.createElement('div');
                newDiv.classList.add('square')
                grid.appendChild(newDiv);  
        }
        const activeSquares = document.getElementsByClassName('square');
        const squareWidth = 500 / squareCount; // Calculate the width percentage for each square

    for (let i = 0; i < activeSquares.length; i++) {
        const square = activeSquares[i];
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareWidth}px`;
    }
        whenHover();
}



function whenHover(){
    const activesquare = document.getElementsByClassName('square');

        for (let i = 0; i < activesquare.length; i++){
            const square = activesquare[i];
        

            square.style.backgroundColor = 'white';  

            square.addEventListener('mouseenter', function() {
                square.style.backgroundColor = 'blue'
            });
        
            // Reverts color on mouse leave
            //  square.addEventListener('mouseleave', function() {
            //  square.style.backgroundColor = 'white'

                 
             //});
             console.log(i)
        }
 }

newPad();


console.log(gridNumber)


