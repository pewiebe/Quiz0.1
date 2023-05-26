const quizData = [
    {
        question: "Qual idioma é executado em um navegador da Web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "O que significa CSS?",
        a: "Folhas de estilo centrais",
        b: "Folhas de estilo em cascata",
        c: "Folhas simples em cascata",
        d: "Carros SUVs Veleiros",
        correct: "b",
    },
    {
        question: "O que significa HTML?",
        a: "Linguagem de Marcação de Hipertexto",
        b: "Linguagem de Marcação de Hipertexto",
        c: "Linguagem de Máquina Hyperloop",
        d: "Terminais de Helicópteros Lanchas Lamborginis",
        correct: "a",
    },
    {
        question: "Em que ano foi lançado o JavaScript?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "nenhuma das alternativas",
        correct: "b",
    },
    {
        question: "Qual é a linguagem de programação mais popular?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "JavaScript",
        correct: "b",
    },
    {
        question: "Qual dos seguintes é um paradigma de programação?",
        a: "Loop",
        b: "Variável",
        c: "Orientação a objeto",
        d: "Condicional",
        correct: "c",
    },
    {
        question: "Qual é o símbolo usado para atribuição em muitas linguagens de programação?",
        a: "=",
        b: "+",
        c: "-",
        d: "*",
        correct: "a",
    },
    {
        question: "O que é um loop infinito?",
        a: "Um loop que executa um número específico de vezes",
        b: "Um loop que nunca é executado.",
        c: "Um loop que solicita entrada do usuário repetidamente",
        d: " Um loop que é executado continuamente sem uma condição de parada",
        correct: "d",
    },
    {
        question: "Como você pode garantir que uma instância de uma classe em C# não possa ser herdada por outras classes?",
        a: "Usando o modificador static na definição da classe",
        b: "Marcando a classe com o modificador sealed",
        c: "Implementando a interface IInheritable",
        d: "Nenhuma das Alternativas",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Você Respondeu  ${score}/${quizData.length} das repostas corretas!</h2>

                <button onclick="location.reload()">Recarregar</button>
            `
        }
    }
})