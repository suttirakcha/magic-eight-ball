var questionInput = document.getElementById("question-input");
var nameInput = document.getElementById("name-input");
var firstBox = document.getElementById("box-page-one");
var tryAgain = document.getElementById("tryAgain");
var body = document.getElementsByTagName("BODY");

function goNext(){
    nameInput.style.display = "block";
    firstBox.style.display = "none";
    nameInput.style.animation = "fadeIn 400ms";
    body[0].style.background = "linear-gradient(90deg, rgb(0, 190, 125), lightgreen, rgb(160, 255, 125))";
}

function countCharOne(){
  let userName = document.getElementById("username").value;
  let numOfName = document.getElementById("count-one");
  numOfName.innerHTML = userName.length;
}

function countCharTwo(){
  let question = document.getElementById("question").value;
  let numOfQuestion = document.getElementById("count-two");
  numOfQuestion.innerHTML = question.length;
}

function setName(){
  let name = document.getElementById("name");
  let userName = document.getElementById("username").value;
  
  if (userName === ""){
    alert("Please type your name.");
  } else {
    name.innerHTML = `Hello, ${userName}`;
    name.style.fontSize = "60px";
    name.style.transition = "400ms";
    nameInput.style.display = "none";
    questionInput.style.animationDelay = "600ms";
    questionInput.style.display = "block";
    questionInput.style.animation = "fadeIn 500ms";
  }

}

function setQuestion(){
  let askedQuestion = document.getElementById("name");
  let question = document.getElementById("question").value;
  let luckyResult = document.getElementById("luckyResult");

  if (question === ""){
    alert("Please ask the question.");
  } else {

    askedQuestion.innerHTML = `Your question: ${question}`;
    askedQuestion.style.fontSize = "40px";
    askedQuestion.style.transitionDuration = "400ms";
    questionInput.style.display = "none";

    setTimeout(setResult(), 5000);

    function setResult(){

      // Solve the background gradient animation

      body[0].style.background = "linear-gradient(90deg, rgb(0, 190, 125), lightgreen, rgb(160, 255, 125), rgb(255, 255, 100), rgb(255, 235, 125), rgb(255, 255, 160))";
      body[0].style.backgroundSize = "200% 100%";
      body[0].style.animation = "backgroundChange 20s ease infinite";
      let results = ["It is certain.", "Yes, definitely!", "Most likely", "Signs point to yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "My reply is no.", "Outlook not so good.", "Very doubtful!"];
      let randomResult = results[Math.floor(Math.random() * results.length)];
      let showResult = document.getElementById("result");
      showResult.innerHTML = `My answer: <br> ${randomResult}`;
      showResult.style.animation = "fadeIn 1s";
      
      let anotherMessage = ["Have fun?", "You still have a chance.", "Hope to see you again.", "Thank you for playing.", "Not happy with my answer?"];
      let randomMessage = anotherMessage[Math.floor(Math.random() * anotherMessage.length)];
      let shownMessage = document.getElementById("anotherMessage");
      shownMessage.innerHTML = randomMessage;

      tryAgain.style.display = "block";
      tryAgain.style.animation = "fadeIn 2s";
    }
  }
  
}

function refresh(){
  location.reload();
}