var read = require('readline-sync');
var chalk = require('chalk');

var scoreBoard=1,
Sports = {
  questionOne : "what is full form if IPL..?",
  questionOneOptions : ["","INDIAN PREMIER LEAGUE","ISTANBULL PREMIER LEAGUE"],
  questionTwo : "IPL 2020 was held in which country..?",
  questionTwoOptions : ["","INDIA","DUBAI"],
  status : "incomplete"
},Entertainment = {
  questionOne : "Which was the last movie of SUSHANT SINGH RAJPUT..?",
  questionOneOptions : ["","DIL BECHARA","M.S.DHONI"],
  questionTwo : "which character had been played by SSR(sushant sing rajput) in M.S.DHONI..?",
  questionTwoOptions : ["","Mahendra Singh Dhoni","Pan Singh Dhoni"],
  status : "incomplete"
},Bussiness = {
  questionOne : "Which Company brings CNBC Channel in India..?",
  questionOneOptions: ["","TV 18","NDTV"],//answer:1
  questionTwo : "Which country in Europe has the largest labor force..?",
  questionTwoOptions: ["","China","Russia"],//answer:2
  status : "incomplete"
},GK = {
  questionOne : "Garampani sanctuary is located at..?",
  questionOneOptions: ["","Assam","Gujarat"],//answer:1
  questionTwo : "Who is India's first lady Prime Minister..?",
  questionTwoOptions: ["","Sonia Gandhi","Indira Gandhi."],//answer:2
  status : "incomplete"
},IT = {
  questionOne : "How does programming works..?",
  questionOneOptions: ["","Input-Processing-Output","Processing-Input-Output"],//answer:1
  questionTwo : "How to access Terminal..?",
  questionTwoOptions: ["","Menu -> Accessories -> Terminal","MyComputer -> File -> Terminal."],//answer:1
  status : "incomplete"
},highScore1 = {
  name : "Akash",
  score : 10
},highScore2 = {
  name : "Jayant",
  score : 10
},highScore3 = {
  name : "Ajay",
  score : 10
}

console.log(chalk.black.bold.bgCyanBright("---------------------------LeaderBoard------------------------------\n"));
console.log(chalk.cyanBright.bold("Name : " + highScore1.name + " Score : " + highScore1.score));
console.log(chalk.cyanBright.bold("Name : " + highScore2.name + " Score : " + highScore2.score))
console.log(chalk.cyanBright.bold("Name : " + highScore3.name + " Score : " + highScore3.score))
console.log(chalk.black.bold.bgCyanBright("\n--------------------------------------------------------------------\n"));

console.log(chalk.bold.rgb(10, 100, 200)("Levelone consist of this topics : \n1. Sports. \n2. Entertainment. \n3. Bussiness. \n4. GK. \n5. IT."));
console.log(chalk.bold.rgb(10, 100, 200)("No negative marking."));
console.log(chalk.bold.rgb(10, 100, 200)("You can share the SCREENSHOT to get listed in leaderboard."));
console.log(chalk.bold.rgb(10, 100, 200)("Stay tunned for LevelTwo,..."));
console.log(chalk.black.bold.bgCyanBright("\n--------------------------------------------------------------------\n"));

var quizSelection = read.question("Press 1 to start quiz\n");

if(quizSelection === "1" ) {
  //console.log(quizSelection);
  quizLevelOne();
} else {
  console.log("Please select from the above options");
}

function quizLevelOne() {
  if(Sports.status !== "complete") {

    console.log("\n--------------Please select from appropriate option-----------------");

    console.log("1 Question : " + Sports.questionOne);
    var userOption = read.question("1. "+ Sports.questionOneOptions[1]+" \n2. "+ Sports.questionOneOptions[2]+ " \n");

    if(userOption === "1") {
      scoreBoard = scoreBoard + 1;
      //console.log("Result : Great. ");
      console.log("\n");
    } else {
      console.log("\n");
    }

    console.log("2 Question : "+Sports.questionTwo);
    userOption = read.question("1. "+ Sports.questionTwoOptions[1]+" \n2. "+ Sports.questionTwoOptions[2]+ " \n");

    if(userOption === "2") {
      scoreBoard = scoreBoard + 1;
      console.log(chalk.green("\nPerfect..!"));//+scoreBoard
      Sports.status = "complete"

    } else {
        //console.log("\nResult : wishing you good luck for next time");
        Sports.status = "complete"
    }
  }

  /*ENTERTAINMENT*/
  if(Entertainment.status !== "complete") {

    console.log("\n--------------Please select from appropriate option-----------------");

    console.log("1 Question : " + Entertainment.questionOne);
    userOption = read.question("1. "+ Entertainment.questionOneOptions[1]+" \n2. "+ Entertainment.questionOneOptions[2]+ " \n");

    if(userOption === "1") {
      scoreBoard = scoreBoard + 1;
      //console.log("Result : Great. ");
      console.log("\n");
    } else {
      console.log("\n");
    }

    console.log("2 Question : "+Entertainment.questionTwo);
    userOption = read.question("1. "+ Entertainment.questionTwoOptions[1]+" \n2. "+ Entertainment.questionTwoOptions[2]+ " \n");

    if(userOption === "1") {
      scoreBoard = scoreBoard + 1;
      console.log(chalk.green("\nGreat..!"));//+scoreBoard
      Sports.status = "complete"

    } else {
        //console.log("\nWishing you good luck for next time,your score is " +scoreBoard);
        Sports.status = "complete";
    }
  }

  /*BUSSINESS*/
  if(Bussiness.status !== "complete") {

    console.log("\n--------------Please select from appropriate option-----------------");

    console.log("1 Question : " + Bussiness.questionOne);
    userOption = read.question("1. "+ Bussiness.questionOneOptions[1]+" \n2. "+ Bussiness.questionOneOptions[2]+ " \n");

    if(userOption === "1") {
      scoreBoard = scoreBoard + 1;
      //console.log("Result : Great.");
      console.log("\n");
    } else {
      console.log("\n");
    }

    console.log("2 Question : "+Bussiness.questionTwo);
    userOption = read.question("1. "+ Bussiness.questionTwoOptions[1]+" \n2. "+ Bussiness.questionTwoOptions[2]+ " \n");

    if(userOption === "2") {
      scoreBoard = scoreBoard + 1;
      console.log(chalk.green("Awesome..!")); //+scoreBoard
      Sports.status = "complete";

    } else {
        //console.log("Wishing you good luck for next time,your score is " +scoreBoard);
        Sports.status = "complete";
    }
  }

  /*GENERAL KNOWLEDGE*/
  if(GK.status !== "complete") {

    console.log("\n--------------Please select from appropriate option-----------------");

    console.log("1 Question : " + GK.questionOne);
    userOption = read.question("1. "+ GK.questionOneOptions[1]+" \n2. "+ GK.questionOneOptions[2]+ " \n");

    if(userOption === "1") {
      scoreBoard = scoreBoard + 1;
      console.log("\n");
    } else {
      console.log("\n");
    }

    console.log("2 Question : "+GK.questionTwo);
    userOption = read.question("1. "+ GK.questionTwoOptions[1]+" \n2. "+ GK.questionTwoOptions[2]+ " \n");

    if(userOption === "2") {
      scoreBoard = scoreBoard + 1;
      console.log(chalk.green("Bravo..!")); //+scoreBoard
      Sports.status = "complete"

    } else {
        //console.log("Wishing you good luck for next time,your score is " +scoreBoard);
        Sports.status = "complete";
    }
  }

  /*INFORMATION TECHNOLOGY*/
  if(IT.status !== "complete") {

    console.log("\n--------------Please select from appropriate option-----------------");

    console.log("1 Question : " + IT.questionOne);
    userOption = read.question("1. "+ IT.questionOneOptions[1]+" \n2. "+ IT.questionOneOptions[2]+ " \n");

    if(userOption === "1") {
      scoreBoard = scoreBoard + 1;
      console.log("\n");
    } else {
      console.log("\n");
    }

    console.log("2 Question : "+IT.questionTwo);
    userOption = read.question("1. "+ IT.questionTwoOptions[1]+" \n2. "+ IT.questionTwoOptions[2]+ " \n");

    if(userOption === "2") {
      scoreBoard = scoreBoard + 1;
      console.log(chalk.green("\nFantastic,you have completed quiz successfully,your final score is " +scoreBoard+ "..!"));
      Sports.status = "complete"

    } else {
        console.log(chalk.green("\nFantastic,you have completed quiz successfully,your final score is "+scoreBoard+"..!"));
        Sports.status = "complete";
    }
  }
}