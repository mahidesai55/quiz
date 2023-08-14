// document.body.append(document.createElement("h1").innerHTML = "Quiz"
const questions = [
  {
    question: "With which song did Lata Mangeshkar do her first Hindi playback ?",
    options: ["Natai Chaitrachi Navalai", "Pa Lagoon Kar Jori Re Shyam", "Janani Janam Bhoomi", "Main Khili khili Phulvari"],
    answer: "Pa Lagoon Kar Jori Re Shyam"
  },
  {
    question: "Dr. A.P.J. Abdul Kalam used to play:",
    options: ["Nadeswaram", "Veena", "Sitar", "Violin"],
    answer: "Veena"
  },
  {
    question: "The opening theme music of doordarshan was composed by :",
    options: ["Pt. Omkarnath Thakur", "Ud. Amjad Ali Khan", "Pt. Ravi Shankar", "Ud. Bismillah Khan"],
    answer: "Ud. Amjad Ali Khan"
  },
  {
    question: "The Violinist was equally popular in Hindustani and Karnatic style :",
    options: ["Lalgudi G. Jayraman", "Dr. N.S. Gopalakrishnan", "A. Narmada", "N. Ramani"],
    answer: "Lalgudi G. Jayraman"
  },
];

const maindiv = document.querySelector('.wapper2')
const musicdata = document.querySelector('.box211')
// const artdata = document.querySelector('.box212')
// const codingdata = document.querySelector('.box213')
const startbutton = document.querySelector('.box21 .start')
const questionElement = document.querySelector('.question');
const optionElements = document.querySelectorAll('label');
const nextButton = document.querySelector('.nextButton');
const quitButton = document.querySelector('.quitButton');
const scoreElement = document.querySelector('.score');

let currentQuestionIndex = 0;
let score = 0;

musicdata.onclick =(e)=>{
  e.preventDefault()
  if(artdata.classList.contains('blackborder')){
    artdata.classList.remove('blackborder');
    musicdata.classList.add('blackborder')
  }
  else if(codingdata.classList.contains("blackborder")){
    codingdata.classList.remove("blackborder")
    musicdata.classList.add('blackborder')
  }
  else{
    musicdata.classList.add('blackborder')
  }
 startbutton.removeAttribute('disabled')
  
}
startbutton.onclick =(e)=>{
  e.preventDefault()
  maindiv.style.display='none'
  console.log(e)
  questionElement.style.display ='block'

}
nextstep.onclick=(e)=>{
  e.preventDefault()
  optionElements.style.display = 'none'
  optionElements.style.display = 'block'
} 
nextstep2.onclick=(e)=>{
   e.preventDefault()
   optionElements.style.display = 'none'
   optionElements.style.display = 'block'
} 
nextstep3.onclick=(e)=>{
   e.preventDefault()
   optionElements.style.display = 'none'
   optionElements.style.display = 'block'
}
nextstep4.onclick=(e)=>{
   e.preventDefault()
   optionElements.style.display = 'none'
   optionElements.style.display = 'block'
}
