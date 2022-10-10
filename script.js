// Genrate Random Number

function genRandNo() {

    let randNo = Math.floor(Math.random() * (3 - 1)) + 1;
    return randNo;
}


let userPoint=0;
let computerPoint=0;
let round =0;
let userChoice;
let computerChoice;
let player = document.querySelector(".player")
let com = document.querySelector(".com")
let final= document.querySelector("#final");
let paraCom= document.querySelector('#comC')


// get computer choice 

function computerChoicefun() {

    let randNo = genRandNo();

    if (randNo == 1){
       

            
            paraCom.innerHTML="Computer choose : 'Rock'"
    
        return 'Rock';
    }

    else if (randNo ==3){
        paraCom.innerHTML="Computer choose : 'Paper'"
        return 'Paper';
    }


    else if (randNo ==2)
{     paraCom.innerHTML="Computer choose : 'Scissor'"
       return 'Scissor';
}

    else{

        alert("something went wrong");
    }
}





// click event for options 

let rock = document.querySelector('.col1')
 rock.addEventListener('click', getUserChoiceRock)
 rock.addEventListener('click',game1);
 rock.addEventListener('click',()=>{

    let para= document.querySelector('#userC')
    para.innerHTML="your choice :'Rock'"
})





// paper event

let paper = document.querySelector('.col2')
paper.addEventListener('click', getUserChoicePaper)
paper.addEventListener('click',game2);
paper.addEventListener('click',()=>{

    // message 

    let para= document.querySelector('#userC')
    para.innerHTML="your choice :'Paper'"
})

// scissor event 

let scissor = document.querySelector('.col3')
scissor.addEventListener('click', getUserChoiceScissor)
scissor.addEventListener('click',game3);
scissor.addEventListener('click',()=>{

// message

    let para= document.querySelector('#userC')
    para.innerHTML="your choice :'Scissor'"
})
    









// Get user choice for rock

function getUserChoiceRock() {


   let userChoice = 'Rock';
   
    return userChoice;
    

}





// Get user choice for paper

function getUserChoicePaper() {

    let userChoice = 'Paper';
    
    return userChoice;
   
    
 
 }


 // Get user choice for scissor

 function getUserChoiceScissor() {

    let userChoice = 'Scissor';
    
   
    
    return userChoice;
   
    
 
 }




// playround function

function playRound(userChoice, computerChoice) {
   
    let user = document.querySelector('#userpointer')
    let computer =document.querySelector("#computerPointer");

// display winner after final round

    if(round==5){
        displayWinner(userPoint, computerPoint);
        
    }

// restart game


    if(round>5  ){
        round=0;
        userPoint=0;
        computerPoint=0;
        
        user.innerHTML=`${userPoint}`;
        computer.innerHTML=`${computerPoint}`
        player.style=''
    com.style=' '
    
   
    
    }

    
    // round play starts from 

    if (userChoice == 'Rock' && computerChoice == 'Scissor'){
        userPoint++;
        user.innerHTML=`${userPoint}`;
        computer.innerHTML=`${computerPoint}`
        round++;    
    return true;

}
        
    
    else if (userChoice == 'Paper' && computerChoice == 'Rock'){
       
        userPoint++;
    user.innerHTML=`${userPoint}`
    computer.innerHTML=`${computerPoint}` 
    round++  
    return true;
    }

    else if (userChoice == 'Scissor' && computerChoice == 'Paper'){
       
        userPoint++;
    user.innerHTML=`${userPoint}`
    computer.innerHTML=`${computerPoint}`
    round++
        
    return true;
    }

    else if (userChoice == computerChoice){
    
        round++;    
    return "tie";}


     else{ 
      computerPoint++;
      computer.innerText=`${computerPoint}`
     
      round++;
    }
    
      return false;

      
}












//    function for rock click 

function game1( ) {


    

    

 

    let userChoice = getUserChoiceRock();
        let computerChoice = computerChoicefun();
    



    // audio on click

    const audio = new Audio("audio/clicked.wav");
        audio.play();
     
    
             
             
            let result = playRound(userChoice, computerChoice);
            let beat = document.querySelector('#beat') 
            let head = document.querySelector('#head');


            if (result == true) {
                beat.innerHTML= `${userChoice} beats ${computerChoice}`
                head.innerHTML= `You Win This Round`
               
            }

            else if (result == false) {
                beat.innerHTML= `${computerChoice} beats ${userChoice}`
                head.innerHTML= `You Loose This Round`
               

            }
            else if(result=="tie") {
             beat.innerHTML= `It's Tie`
             head.innerHTML= `yeahh It's Tie`
            }
          
     
        
     

}


// function for paper click

function game2( ) {


    

    



    let  userChoice = getUserChoicePaper();
    let computerChoice = computerChoicefun();


     // audio on click

     const audio = new Audio("audio/clicked.wav");
     audio.play();

  
    let result = playRound(userChoice, computerChoice);
    let beat = document.querySelector('#beat') 
    let head = document.querySelector('#head');


    if (result == true) {
        beat.innerHTML= `${userChoice} beats ${computerChoice}`
        head.innerHTML= `You Win This Round`
        
    }

    else if (result == false) {
        beat.innerHTML= `${computerChoice} beats ${userChoice}`
        head.innerHTML= `You Loose This Round`
        

    }
    else if(result=="tie") {
     beat.innerHTML= `It's Tie`
     head.innerHTML= `yeahh It's Tie`
     
    }
    


     
        
  

}

// function for scissor click

function game3( ) {


    

    


   
    let userChoice = getUserChoiceScissor();
    let computerChoice = computerChoicefun();


    let result = playRound(userChoice, computerChoice);
    let beat = document.querySelector('#beat') 
    let head = document.querySelector('#head');


 // audio on click

 const audio = new Audio("audio/clicked.wav");
 audio.play();
     

    if (result == true) {
        beat.innerHTML= `${userChoice} beats ${computerChoice}`
        head.innerHTML= `You Win This Round`
        
    }

    else if (result == false) {
        beat.innerHTML= `${computerChoice} beats ${userChoice}`
        head.innerHTML= `You Loose This Round`
        

    }
    else if(result=="tie") {
     beat.innerHTML= `It's Tie`
     head.innerHTML= `yeahh It's Tie`
    }
  
    
    
}


// function for decide final winner 


function displayWinner(userPoint, computerPoint) {


    if (userPoint > computerPoint) {

        let player = document.querySelector(".player")
        player.style='box-shadow:10px 5px gold;'
        const audio2 = new Audio("audio/win.mp3");
         audio2.play();
         
         final.innerText='You Win Congratulation..'
         final.style='font-size:30px'
         
        
    } 
    else if (userPoint < computerPoint) {
       
        com.style='box-shadow:10px 5px gold; '
        const audio3 = new Audio("audio/lose.wav");
         audio3.play();
         final.innerText='You loose.....'
         final.style='font-size:30px'
      
   
    }

    else {

        const audio4 = new Audio("audio/tie.wav");
         audio4.play();
        final.innerText='It\'s Tie.....'
         final.style='font-size:30px'
        
    }

    
}


