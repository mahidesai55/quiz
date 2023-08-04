// document.body.append(document.createElement("h1").innerHTML = "Quiz")

let maindiv = document.querySelector('.wapper2')
let musicdata = document.querySelector('.box211')
let artdata = document.querySelector('.box212')
let codingdata = document.querySelector('.box213')
let startbutton = document.querySelector('.box21 .start')
let questionsdata = document.querySelector('.wapper3') 

let question1 = document.querySelector('.wapper3 .questions1')
let nextstep = document.querySelector('.container2 .page3a1')
let quit = document.querySelector('.container2 .page3a2')

let question2 = document.querySelector('.wapper3 .questions2') 
let nextstep2 = document.querySelector('.container3 .page3a1')
let quit2 = document.querySelector('.container3 .page3a2')

let question3 = document.querySelector('.wapper3 .questions3')
let nextstep3 = document.querySelector('.container4 .page3a1')
let quit3 = document.querySelector('.container4 .page3a2')

let question4 = document.querySelector('.wapper3 .questions4')
let nextstep4 = document.querySelector('.container5 .page3a1')
let quit4 = document.querySelector('.container5 .page3a2')



musicdata.onclick =(e)=>{
    e.preventDefault()
    musicdata.style.border = '4px solid black'
    // startbutton.style.disabled = 'false'
    startbutton.removeAttribute('disabled')
}

artdata.onclick = (e) => {
   e.preventDefault()
   artdata.style.border = '4px solid black'
   startbutton.removeAttribute('disabled')
}

codingdata.onclick = (e) => {
   e.preventDefault()
   codingdata.style.border = '4px solid black'
   startbutton.removeAttribute('disabled')
}



startbutton.onclick =(e)=>{
    e.preventDefault()
    questionsdata.style.display ='block'
    maindiv.style.display='none'

}

nextstep.onclick=(e)=>{
   e.preventDefault()
   question1.style.display = 'none'
   question2.style.display = 'block'
} 
nextstep2.onclick=(e)=>{
    e.preventDefault()
    question2.style.display = 'none'
    question3.style.display = 'block'
 } 
 nextstep3.onclick=(e)=>{
    e.preventDefault()
    question3.style.display = 'none'
    question4.style.display = 'block'
 }
 nextstep4.onclick=(e)=>{
    e.preventDefault()
    question4.style.display = 'none'
    question5.style.display = 'block'
 }