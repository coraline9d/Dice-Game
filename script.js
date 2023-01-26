var 
    scores, 
    scoresTours, 
    JoueurActif, 
    playingGames;
    player0 = "Player A";
    player1 = "Player B";


//Function to initialise parameters
function init() {
    scores = [0, 0];
    JoueurActif = 0;
    scoresTours = 0;
    playingGames = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score0').textContent = '0';
    document.getElementById('score1').textContent = '0';
    document.getElementById('score-scare0').textContent = '0';
    document.getElementById('score-scare1').textContent = '0';
    document.querySelector('.side0').classList.remove('winner');
    document.querySelector('.side1').classList.remove('winner');
    document.querySelector('.side0').classList.remove('active');
    document.querySelector('.side1').classList.remove('active');
    document.querySelector('.side0').classList.add('active');
}

init();


// Function to save players names
function editNames() {
    player0 = prompt("Name of the first player :");
    player1 = prompt("Name of the second player : ");
  
    document.querySelector("#name0").innerHTML = player0;
    document.querySelector("#name1").innerHTML = player1;
}


//  Button Roll
document.querySelector('.roll').addEventListener('click', function() {
    if (player0==='Player A' || player1==='Player B') {
        alert('Click on \'NEW GAME\' to start') ;
    }
    else if (playingGames) {
       
        var dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'images/dice' + dice + '.png';


       
        if (dice !== 1) {
            
            scoresTours += dice;
            document.querySelector('#score-scare' + JoueurActif).textContent = scoresTours;
        } else {
           
            nextPlayer();
        }
    }    
});


//  Button hold
document.querySelector('.hold').addEventListener('click', function() {
    if (player0==='Player A' || player1==='Player B') {
        alert('Click on \'NEW GAME\' to start') ;
    }
    else if (playingGames) {
       
        scores[JoueurActif] += scoresTours;

        
        document.querySelector('#score' + JoueurActif).textContent = scores[JoueurActif];

       
        if (scores[JoueurActif] >= 100) {
            document.querySelector('#name' + JoueurActif).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.side' + JoueurActif).classList.add('winner');
            document.querySelector('.side' + JoueurActif).classList.remove('active');
            playingGames = false;
        } else {
            nextPlayer();
        }
    }
});
  

// Function to alternate players 
function nextPlayer() {
 
    JoueurActif === 0 ? JoueurActif = 1 : JoueurActif = 0;
    scoresTours = 0;

    document.getElementById('score-scare0').textContent = '0';
    document.getElementById('score-scare1').textContent = '0';

    document.querySelector('.side0').classList.toggle('active');
    document.querySelector('.side1').classList.toggle('active');



    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.new').addEventListener('click', init);



