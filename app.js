// define variables
var player= document.querySelector('.player');
var computer= document.querySelector('.computer');
var winner= document.querySelector('.winner');
var pPoint= document.querySelector('.pPoint');
var cPoint= document.querySelector('.cPoint');
var cumputerChoice, random;
var pCount=0;
// ++,--
var cCount=0;
// Check
console.log(player);
console.log(computer);
console.log(winner);
console.log(pPoint);
console.log(cPoint );
// action
function play(playerChoice){
	// alert(playerChoice);
	player.innerText="Player choice: "+ playerChoice;
	// computer -> random -> 0==rock,1==paper,2==scissors,
	random= Math.floor(Math.random()*3);
	console.log(random);
	if(random==0){
		computerChoice="rock";
		computer.innerText="computer choice: rock";
	}
	else if(random==1){
		computerChoice="paper";
		computer.innerText="computer choice: paper";
	}
	else if(random==2){
		computerChoice="scissors";
		computer.innerText="computer choice: scissors";
	}
	else{
		computer.innerText="computer choice: tiim songolt baihgui";
	}
	// player -> rock == scissors, paper==rock, scissors==paper
	if(playerChoice=="rock" && computerChoice=="scissors"){
		winner.innerText = "Winner: player";
		pCount++;
		pPoint.innerText="player: "+ pCount;
	}
	else if(playerChoice=="paper" && computerChoice=="rock"){
		winner.innerText = "Winner: player";
		pCount++;
		pPoint.innerText="player: "+ pCount;
	}
	else if(playerChoice=="scissors" && computerChoice=="paper"){
		winner.innerText = "Winner: player";
		pCount++;
		pPoint.innerText="player: "+ pCount;
	}
	else if(playerChoice==computerChoice){
		winner.innerText="winner: tie";
	}
	else{
		winner.innerText="winner: computer";
		cCount++;
		cPoint.innerText="computer: "+ cCount;
	}
}
function restart(){
	cPoint.innerText= "computer: 0";
	cCount=0;
	pPoint.innerText= "player: 0";
	pCount=0;
	player.innerText="player choice:";
	computer.innerText="computer choice:";
	winner.innerText="winner:";
}