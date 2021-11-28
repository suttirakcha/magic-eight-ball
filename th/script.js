var questionInput = document.getElementById("question-input");
var nameInput = document.getElementById("name-input");
var firstBox = document.getElementById("box-page-one");
var tryAgain = document.getElementById("tryAgain");
var body = document.getElementsByTagName("BODY");
var changeLang = document.getElementById("changeLang");

function goNext(){
    nameInput.style.display = "block";
    firstBox.style.display = "none";
    changeLang.style.display = "none";
    nameInput.style.animation = "fadeIn 400ms";
    body[0].style.background = "linear-gradient(90deg, rgb(0, 190, 125), lightgreen, rgb(160, 255, 125))";
}

function countCharOne(){
  var userName = document.getElementById("username").value;
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
  var userName = document.getElementById("username").value;
  
  if (userName === ""){
    alert("กรุณาพิมพ์ชื่อของคุณ");
  } else {
    name.innerHTML = `สวัสดี, คุณ${userName}`;
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

  if (question === ""){
    alert("กรุณาถามคำถาม");
  } else {

    askedQuestion.innerHTML = `คำถามของคุณ: ${question}`;
    askedQuestion.style.fontSize = "40px";
    askedQuestion.style.transitionDuration = "400ms";
    questionInput.style.display = "none";

    setTimeout(setResult(), 5000);

    function setResult(){

      // Solve the background gradient animation

      body[0].style.background = "linear-gradient(90deg, rgb(0, 190, 125), lightgreen, rgb(160, 255, 125), rgb(255, 255, 100), rgb(255, 235, 125), rgb(255, 255, 160))";
      body[0].style.backgroundSize = "200% 100%";
      body[0].style.animation = "backgroundChange 20s ease infinite";
      let results = ["มันแน่นอนอยู่แล้ว", "ใช่แล้ว", "เป็นไปได้สูง", "เป็นสัญญาณที่ดีนะ", "เดี๋ยวค่อยถามใหม่นะ", "ยังบอกตอนนี้ไม่ได้", "ยังคาดการณ์ไม่ได้", "ตอบได้เลยว่า ไม่", "ยังไม่ใช่นะ", "ดูน่าสงสัยนะ"];
      let randomResult = results[Math.floor(Math.random() * results.length)];
      let showResult = document.getElementById("result");
      showResult.innerHTML = `คำตอบของฉัน: <br> ${randomResult}`;
      showResult.style.animation = "fadeIn 1s";
      
      let anotherMessage = ["สนุกมั้ย", "หวังว่าจะได้เจอกันอีก", "ขอบคุณที่มาร่วมสนุกกับฉัน", "ยังไม่ใช่คำตอบที่ถูกใจ?"];
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