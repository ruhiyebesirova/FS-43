const suallar = document.getElementById("suallar");
const cavablar = document.getElementById("cavablar");
const next = document.getElementById("next");

let index = 0;

const data = [
  {
    id: "1",
    title: "Çempionlar liqasını 5 dəfə qaldıran klub?",
    answers: [
      {
        id: "1",
        answer: "Liverpool",
      },
      {
        id: "2",
        answer: "Milan",
      },
      {
        id: "3",
        answer: "Barcelona",
        trueAnswer: true,
      },
      {
        id: "4",
        answer: "Manchester City",
      },
    ],
  },
  {
    id: "2",
    title: "Bu adlardan hansı Şekspir pyesinin başlığında yoxdur?",
    answers: [
      {
        id: "1",
        answer: "Darren",
        trueAnswer: true,
      },
      {
        id: "2",
        answer: "Romeo",
      },
      {
        id: "3",
        answer: "Macbeth",
      },
      {
        id: "4",
        answer: "Hamlet",
      },
    ],
  },
  {
    id: "3",
    title:
      "Bu proqram cütlərindən hansı təxminən eyni xidmət növünü təklif edir?",
    answers: [
      {
        id: "1",
        answer: "Snapchat və Grubhub",
      },
      {
        id: "2",
        answer: "Lyft və Uber",
        trueAnswer: true,
      },
      {
        id: "3",
        answer: "Whatsapp və SHAREit",
      },
      {
        id: "4",
        answer: "Tiktok və Spotify",
      },
    ],
  },
  {
    id: "4",
    title: "Kraliça Anna hansı ingilis monarxının qızı idi?",
    answers: [
      {
        id: "1",
        answer: "Henry VIII",
      },
      {
        id: "2",
        answer: "James II",
        trueAnswer: true,
      },
      {
        id: "3",
        answer: "Viktoriya",
      },
      {
        id: "4",
        answer: "William I",
      },
    ],
  },
  {
    id: "5",
    title: "İlk teleskop neçənci ildə düzəlib?",
    answers: [
      {
        id: "1",
        answer: "1589",
      },
      {
        id: "2",
        answer: "1704",
      },
      {
        id: "3",
        answer: "1608",
        trueAnswer: true,
      },
      {
        id: "4",
        answer: "1622",
      },
    ],
  },
];



function showQuestion() {

  const currentQuestion = data[index];
  suallar.innerHTML = currentQuestion.title;
  cavablar.innerHTML = "";
  next.style.display = "none";
  
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.answer;

    button.addEventListener("click", () => {

      if (answer.trueAnswer) {
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
      }
      next.style.display = "block";
    });

    cavablar.appendChild(button);
  });
  
}

next.addEventListener("click", () => {
  index++;  

  if (index < data.length) {
    showQuestion();
  } else {
    suallar.innerHTML = "Quiz bitdi!";
    cavablar.innerHTML = "";
    next.style.display = "none";
  }
});

showQuestion();