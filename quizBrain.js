let score = 0;
let playerName;
let question = 0;
let i = 0;
let optionRefTemp;
const refQuestion = document.querySelector("#q");
const optionA = document.querySelector("#o1");
const optionB = document.querySelector("#o2");
const optionC = document.querySelector("#o3");
const optionD = document.querySelector("#o4");
const next=document.getElementById("next");
const buttons=document.getElementsByClassName("buttons");
const quizArray = [
    {
        question: "Who is the longest serving Prime Minister Of India?",
        option1: "Atal Vihari Bajpayee",
        option2: "Dr. Manmohan Singh",
        option3: "Narendra Modi",
        option4: "Jawaharlal Nehru",
        correct: "Jawaharlal Nehru"
    },
    {
        question: "What is the Operation name conducted by India's IB and US's CIA in Nanda Devi?",
        option1: "Operation Gibralter",
        option2: "Operation Vijay",
        option3: "Operation Red Mountain",
        option4: "Operation HAT",
        correct: "Operation HAT"
    },
    {
        question: "In which Constitutional Article Uniform Civil Code(UCC) is mentioned?",
        option1: "Article 44",
        option2: "Article 41",
        option3: "Article 43",
        option4: "Article 39",
        correct: "Article 44"
    },
    {
        question: "Indian Mutiny which is also known as Sepoy Mutiny happened in which year?",
        option1: "1946",
        option2: "1920",
        option3: "1857",
        option4: "1856",
        correct: "1857"
    },
    {
        question: "Which one of the following gas leaked in Bhopal Gas Tragedy(1984)? ",
        option1: "DIC",
        option2: "MIC",
        option3: "XIC",
        option4: "PIC",
        correct: "MIC"
    }

];

function select(refOption) {
    let temp = i - 1;
    for(let j of buttons){
        if(j!=refOption)
        j.setAttribute("disabled","disabled");  
     }
    if (refOption.innerHTML.includes(quizArray[temp].correct)) {
        score++
        refOption.classList.add ("bg-success")
        optionRefTemp = refOption
        return; 
    }
    refOption.classList.add("bg-danger");
    optionRefTemp = refOption
    return;
}

function quiz() {
    if (i == 5) {
        document.getElementById("display").innerHTML = `${playerName} your score is ${score}/5`
        return;
    }
    for(let j of buttons){
       j.removeAttribute("disabled");
       j.classList.remove("bg-success")
       j.classList.remove("bg-danger")
    }
    if(i==0) {
    next.removeAttribute("disabled")
    next.innerHTML="Next";
    }
    document.getElementById("display").innerHTML = `${i + 1} of 5`
    refQuestion.innerHTML = quizArray[i].question;
    optionA.innerHTML = `A : ${quizArray[i].option1}`;
    optionB.innerHTML = `B : ${quizArray[i].option2}`;
    optionC.innerHTML = `C : ${quizArray[i].option3}`;
    optionD.innerHTML = `D : ${quizArray[i++].option4}`;
}

function player() {
    playerName = document.getElementsByTagName("input")[0].value;
    quiz();
}

function restart(){
    window.location.reload();
}