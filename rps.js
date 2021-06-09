function rpsGame(yourChoice){
  //console.log(yourChoice);//returns object it belongs // TODO:
  let humanChoice=yourChoice.id;
  let botChoice=randomChoice(randomNum());
  let results=decideWinner(humanChoice,botChoice);
  console.log(results);//[1,0]
  let message= finalMessage(results);
  console.log(message);//gives message and colors
  rpsFrontEnd(humanChoice,botChoice,message);
}
function finalMessage([yourScore,botScore])//array of score[1,0]
{
  if(yourScore===0){
    return{

    'message':"You lost!",
    'color':'red'
    };
  }else if(yourScore===0.5){
    return{
      'message':"Draw!",
      'color':"yellow"
    };
  }else{
    return{
      'message':"You won!",
      'color':"green"
    };
  }
}



function randomNum(){
  return Math.floor(Math.random()*3);
}

function randomChoice(number){
  return ['rock','paper','scissors'][number];
}

function decideWinner(humanChoice,botChoice){
  let rpsDatabase={
    'rock':{'scissors':1,'rock':0.5,'paper':0},
    'paper':{'rock':1,'paper':0.5,'scissors':0},
    'scissors':{'paper':1,'scissors':0.5,'rock':0}
  };
let humanScore=rpsDatabase[humanChoice][botChoice];//rpsdatabase[rock][scissors]
let botScore=rpsDatabase[botChoice][humanChoice];//rpsdatabase[scissors][rock]
console.log(humanScore);//1
console.log(botScore);//0
return [humanScore,botScore];//return [1,0];
}

function rpsFrontEnd(yourImageChoice,botImageChoice,finalMessage){
  let imageChoices={
    'rock':document.querySelector('#rock').src,
    'paper':document.querySelector('#paper').src,
    'scissors':document.querySelector('#scissors').src
  };
  document.querySelector('#rock').remove();
  document.querySelector('#paper').remove();
  document.querySelector('#scissors').remove();

  let humanDiv=document.createElement('div');
  let messageDiv=document.createElement('div');
  let botDiv=document.createElement('div');

  //HUMAN CHOICE IMG
  let humanImg=document.createElement('img');
  humanImg.src=imageChoices[yourImageChoice]
  humanImg.style.height='150px';
  humanImg.style.width='150px';
  humanImg.style.boxShadow="0px 10px 50px rgba(37,50,233,1)";
  humanDiv.appendChild(humanImg);

  //MESSAGE
  let h1=document.createElement('h1');
  h1.textContent=finalMessage['message'];
  h1.style.color=finalMessage['color'];
  messageDiv.appendChild(h1);


  //BOT CHOICE img
  let botImg=document.createElement('img');
  botImg.src=imageChoices[botImageChoice];
  botImg.style.height='150px';
  botImg.style.width='150px';
  botImg.style.boxShadow="0px 10px 50px rgba(243,38,24,1)";
  botDiv.appendChild(botImg);

  document.querySelector('.rps-container').appendChild(humanDiv);
  document.querySelector('.rps-container').appendChild(messageDiv);
  document.querySelector('.rps-container').appendChild(botDiv);

console.log(humanDiv);


}
