var readlineSync=require('readline-sync');

var score=0;

var userName=readlineSync.question("what is your name?\n");
console.log("welcome "+userName+". Lets begin!\n");

function play(question,answer,secondAnswer){

  // console.log(question);
  var userAnswer=readlineSync.question(question);

  if(userAnswer===answer){
    console.log("you're right! you got 1 point!");
    score++;
  }
  else{
    console.log("oops! you're wrong! points not gained!");
    if(secondAnswer===null)console.log("the correct answer is:\n"+answer);
    else console.log("the correct answers are:\n"+answer+" and "+secondAnswer);
  }
  console.log("----------------");
  console.log("----------------");
}

var game=[{
  question:"what is my name? \n1.sandeep  2.mandeep  3.sudeep  4.deep\n",
  answer:"sandeep"
},{
  question:"what is my pet name \n1.sandy  2.sunny  3.sandee  4.deepu\n",
  answer:"sandy"
},{
  question:"where did I complete my engineering? \n1.pesitm  2.sjcit  3.dbit  4.vit\n",
  answer:"pesitm"
},{
  question:"what is my fav food? \n1.pork  2.chicken  3.mutton  4.prawns\n",
  answer:"mutton"
},{
    question:"where do I live now? \n1.mysore  2.kolar  3.bengaluru  4.shimoga\n",
    answer:"kolar"
}
];

for(var i=0; i<game.length; i++){
  var currentQestion=game[i];
  play(currentQestion.question,currentQestion.answer,currentQestion.secondAnswer);
}
console.log("your score is: "+score);