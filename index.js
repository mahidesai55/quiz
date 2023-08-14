// document.body.append(document.createElement("h1").innerHTML = "Quiz"
const questions = [
  {
    question: "1.With which song did Lata Mangeshkar do her first Hindi playback ?",
    options: ["Natai Chaitrachi Navalai", "Pa Lagoon Kar Jori Re Shyam", "Janani Janam Bhoomi", "Main Khili khili Phulvari"],
    answer: "Pa Lagoon Kar Jori Re Shyam"
  },
  {
    question: "2.Dr. A.P.J. Abdul Kalam used to play:",
    options: ["Nadeswaram", "Veena", "Sitar", "Violin"],
    answer: "Veena"
  },
  {
    question: "3.The opening theme music of doordarshan was composed by :",
    options: ["Pt. Omkarnath Thakur", "Ud. Amjad Ali Khan", "Pt. Ravi Shankar", "Ud. Bismillah Khan"],
    answer: "Ud. Amjad Ali Khan"
  },
  {
    question: "4.The Violinist was equally popular in Hindustani and Karnatic style :",
    options: ["Lalgudi G. Jayraman", "Dr. N.S. Gopalakrishnan", "A. Narmada", "N. Ramani"],
    answer: "Lalgudi G. Jayraman"
  },
];

const maindiv = document.querySelector('.wapper2')
const questionDiv = document.querySelector('.wapper3')
const musicdata = document.querySelector('.box211')
const artdata = document.querySelector('.box212')
const codingdata = document.querySelector('.box213')
const startbutton = document.querySelector('.box21 .start')
const questionElement = document.querySelector('.question');
const optionElements = document.querySelectorAll('label');
const inputElements = document.querySelectorAll('input');
const nextButton = document.querySelector('.nextButton');
const quitButton = document.querySelector('.quitButton');
const scoreElement = document.querySelector('.score');

let currentQ = 0;
// let score = 0;
let right = 0;
let wrong = 0;

console.log(questionElement)
musicdata.onclick = (e) => {
  e.preventDefault()
  if (artdata.classList.contains('blackborder')) {
    artdata.classList.remove('blackborder');
    musicdata.classList.add('blackborder')
  }
  else if (codingdata.classList.contains("blackborder")) {
    codingdata.classList.remove("blackborder")
    musicdata.classList.add('blackborder')
  }
  else {
    musicdata.classList.add('blackborder')
  }
  startbutton.removeAttribute('disabled')

}
startbutton.onclick = (e) => {
  e.preventDefault()
  maindiv.style.display = 'none'
  console.log(e)
   questionDiv.style.display = 'block'

}

// nextButton.onclick=(e)=>{
//    e.preventDefault()
//    optionElements.style.display = 'none'
//    optionElements.style.display = 'block'
// } 
// nextButton.onclick=(e)=>{
//    e.preventDefault()
//    optionElements.style.display = 'none'
//    optionElements.style.display = 'block'
// }
// nextButton.onclick=(e)=>{
//    e.preventDefault()
//    optionElements.style.display = 'none'
//    optionElements.style.display = 'block'
// }
function ques() {
  questionElement.innerHTML = questions[currentQ].question
  for (let i = 0; i < optionElements.length; i++) {
    optionElements[i].innerHTML = questions[currentQ].options[i]
  }


}

ques()

nextButton.onclick = (e) => {

  e.preventDefault();

  inputElements.forEach((userSelected) => {
    if (userSelected.checked) {
      let userSelectedValue = userSelected.nextElementSibling.innerHTML

      if (questions[currentQ].answer === userSelectedValue) {
        right++
      } else {
        wrong++
      }
    }

    userSelected.checked = false;
  })

   
   

  if(currentQ  > 4){
      alert("bas kar bhai ho gya ab to")
  } else {
    currentQ++
    ques()
  }


  console.log("right answer", right)
  console.log("wrong answer", wrong)
}

