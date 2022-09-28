// Genrate Random Number

function genRandNo() {

    let randNo = Math.floor(Math.random() * (3 - 1)) + 1;
    return randNo;

}


// get computer choice 

function computerChoicefun() {

    let randNo = genRandNo();

    if (randNo == 1){
        return 'Rock';
    }

    else if (randNo == 2){
        return 'Paper';
    }


    else if (randNo == 3)
{ 
       return 'Scissor';
}

    else{

        alert("something went wrong");
    }
}


// Get user choice

function getUserChoice() {


    let input = prompt("enter your choice..?");
    let ans = input.toLowerCase();
    ans = ans.charAt(0).toUpperCase() + ans.slice(1);
    return ans;

}


// Check userinput 

function checkUserChoice(userChoice){
    

    switch(userChoice){
        case "Rock": 
            return true;
           
        case "Paper": 
            return true;
            
        case "Scissor":
            return true;
        

        default:
            alert("Input is wrong!");
            return false;
    }
}
// playround

function playRound(userChoice, computerChoice) {

    if (userChoice == 'Rock' && computerChoice == 'Scissor')
        return true;

    else if (userChoice == 'Paper' && computerChoice == 'Rock')
        return true;

    else if (userChoice == 'Scissor' && computerChoice == 'Paper')
        return true;

    else if (userChoice == computerChoice)
        return "tie";
    
        return false;
}


function game() {


    let round = 0;
    let userPoint = 0;
    let computerPoint = 0;

    while (round < 5) {





        let userChoice = getUserChoice();
        let computerChoice = computerChoicefun();


        let check = checkUserChoice(userChoice);

        if (check) {
            let result = playRound(userChoice, computerChoice);

            if (result == true) {
                alert(`you win ${userChoice} beats ${computerChoice}`)
                userPoint++;
            }

            else if (result == false) {
                alert(`you loose ${computerChoice} beats ${userChoice}`)
                computerPoint++;

            }
            else if(result=="tie") {
                alert("It's a Tie...!");
            }
            round++;

        }
        else {
            alert("please choose correct choice")
        }


        alert(`Total Round = ${round}`);
        alert(`Your points = ${userPoint} & Computer points = ${computerPoint}`);
    }

    displayWinner(userPoint, computerPoint);

}



function displayWinner(userPoint, computerPoint) {


    if (userPoint > computerPoint) {

        alert('you are final winnner now...');
        document.write('<h2>you are final winnner now...</h2>')
    }

    else if (userPoint < computerPoint) {
        alert('you loose ....sorry!');
        document.write('<h2>loooserrr......</h2>')
    }

    else {

        alert('game is Tie......')
        document.write('<h2>It\'s Tie</h2>')
    }
}

