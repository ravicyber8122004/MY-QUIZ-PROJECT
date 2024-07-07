const questions = [
    {
        question:"Whose is the present prime minister of india?",
        answers:[
            {text:"RAHUL GANDHI",correct:false},
            {text:"DROPDI MURMU",correct:false},
            {text:"NARENDRA MODI",correct:true},
            {text:"OM BIRLA",correct:false}
        ]
    },
    {
        question:"Whose is the present president of india?",
        answers:[
            {text:"RAHUL GANDHI",correct:false},
            {text:"DROPDI MURMU",correct:true},
            {text:"NARENDRA MODI",correct:false},
            {text:"OM BIRLA",correct:false}
        ]
    },
    {
        question:"What is the capital of india?",
        answers:[
            {text:"JAIPUR",correct:false},
            {text:"DEHLI",correct:true},
            {text:"RAJASTHAN",correct:false},
            {text:"BANGLORE",correct:false}
        ]
    },
    {
        question:"What is the capital of rajasthan?",
        answers:[
            {text:"JAIPUR",correct:true},
            {text:"SIKAR",correct:false},
            {text:"GANGANAGAR",correct:false},
            {text:"JODHPUR",correct:false}
        ]
    },
    {
        question:"Whose is the present speaker of parliamennt in india?",
        answers:[
            {text:"RAHUL GANDHI",correct:false},
            {text:"DROPDI MURMU",correct:false},
            {text:"NARENDRA MODI",correct:false},
            {text:"OM BIRLA",correct:true}
        ]
    },
    {
        question:"Whose is the chief minister of rajasthan?",
        answers:[
            {text:"VASUNDRA RAJE",correct:false},
            {text:"BAJAN LAL SHARMA",correct:true},
            {text:"BABA BALAK NATH",correct:false},
            {text:"ASHOK GAHLOT",correct:false}
        ]
    },
   
    {
        question:"how many state in india ?",
        answers:[
            {text:"29",correct:false},
            {text:"28",correct:true},
            {text:"33",correct:false},
            {text:"30",correct:false}
        ]
    },
    {
        question:"how many district in rajasthan ?",
        answers:[
            {text:"29",correct:false},
            {text:"28",correct:false},
            {text:"33",correct:false},
            {text:"50",correct:true}
        ]
    },
    {
        question:"how many country in the world ?",
        answers:[
            {text:"200",correct:false},
            {text:"205",correct:false},
            {text:"195",correct:true},
            {text:"211",correct:false}
        ]
    },
    {
        question:"Where is taj-mahal ?",
        answers:[
            {text:"AGRA",correct:true},
            {text:"JAIPUR",correct:false},
            {text:"DEHLI",correct:false},
            {text:"DUBAI",correct:false}
        ]
    }
    


];
const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;

        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target ;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `your scored ${score} out of ${questions.length}`
    nextButton.innerHTML="play Again";
    nextButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++ ;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
 startQuiz();













