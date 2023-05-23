let gridNumber = 16 * 16

// function userInput(){
    
//     let askUser = prompt('Enter A Number Greater Then 1')
    
//     if (askUser == ''){
//         alert('ERROR Please Input Valid Number')
//     } else if (askUser < 1){
//         alert('ERROR Number Must Be Greater Then 1')
//     } else {
//        let gridNumber = askUser * askUser
//     }



// }

function createGrid(){
    const container = document.querySelector('#container');
    let divCount = container.getElementsByTagName('div').length;
    const grid = document.createElement('div');
        grid.classList.add('grid-container')
        container.appendChild(grid);

        for (let i = divCount; i < gridNumber; i++ ) {
            const newDiv = document.createElement('div');
                newDiv.classList.add('square')
                grid.appendChild(newDiv);    
        }
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
            square.addEventListener('mouseleave', function() {
                square.style.backgroundColor = 'white'
            });
        }
 }

//userInput()
createGrid()
whenHover()

