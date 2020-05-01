// // peambule
// let preambule = document.querySelector(".preambule");
// let test1 = document.querySelector(".test1");
// let button = document.querySelector(".preambule__link");

// button.addEventListener("click", function() {
//     preambule.style.display = "none";
//     test1.style.display = "block";

// });

// test3 

// test2

// let precedante = document.querySelector("#pre");
// let suivante = document.querySelector("#suiv");
// let test2 = document.querySelector(".test2");
// let test3 = document.querySelector(".test3");

// suivante.addEventListener("click", function()
// {
// test3.style.display = "block";
// test2.style.display = "none";

// });
// precedante.addEventListener("click", function()
// {
// test1.style.display = "block";
// test2.style.display = "none";

// });

const questions = [
    {// 1
        question: `Ces dernières 48 heures, quelle a été votre température la plus élevée ?`,
        input : `<input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>` 
        
    },
    { // 2
        question : `Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?`,
        input: `<input  class ="test2__input"  type="number" name="step_value" aria-describedby="text-suffix" min="34" max="42"
        step="0.1" placeholder="37,0" required=""> <label>degré</label><br>`

    },
    { // 3
        question : `Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?`,
        input : `<input type="radio" name="btn1">
        <label>Oui</label><br>
        <input type="radio" name="btn1">
        <label>Non</label><br>`
    },

    { // 4
        question : `Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?`,
        input : `<input type="radio" name="btn1">
        <label>Oui</label><br>
        <input type="radio" name="btn1">
        <label>Non</label><br>`
    },
    { // 5
        question : `Ces dernières 24 heures, avez-vous de la diarrhée ?Avec au moins 3 selles molles.`,
        input : `<input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>`
    },
    { // 6
        question : `Ces derniers jours, avez-vous une fatigue inhabituelle ?`,
        input : `<input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>`
    },
    { // 7
        question : `Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?`,
        input : `<input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>`
    },
    { // 8
        question : `Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous
        parlez ou faites un petit effort ?`,
        input : `<input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>`
    },
    { // 9
        question : `Quel est votre âge ?
        Ceci, afin de calculer un facteur de risque spécifique.`,
        input : `
        <input  class ="test2__input"  type="number" name="step_value" aria-describedby="text-suffix" 
        step="0.1"  required=""> <label>ans</label><br>`
    },
    { // 10
        question : `Quel est votre taille ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        input : `
        <input  class ="test2__input"  type="number" name="step_value" aria-describedby="text-suffix" 
        step="0.1"  required=""> <label>cm</label><br>`
    },
    { // 11
        question : `Quel est votre poids ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        input : `
        <input  class ="test2__input"  type="number" name="step_value" aria-describedby="text-suffix" 
        step="0.1"  required=""> <label>Kg</label><br>`
    },
    { // 12
        question : `Avez-vous de l’hypertension artérielle mal équilibrée ?
        Ou avez-vous une maladie cardiaque ou vasculaire ?
        Ou prenez vous un traitement à visée cardiologique ?`,
        input : `
        <input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>
        <input type="radio" name="input">
        <label>On ne sait pas</label><br>`
    },
    { // 13
        question : `Êtes-vous diabétique ?`,
        input : `
        <input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>`
    },
    { // 14
        question : `Avez-vous ou avez-vous eu un cancer ces trois dernières années ?`,
        input : `
        <input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>`
    },
    { // 15
        question : `Avez-vous une maladie respiratoire ?
        Ou êtes-vous suivi par un pneumologue ?`,
        input : `
        <input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>`
    }, { // 16
        question : `Avez-vous une insuffisance rénale chronique dialysée ?`,
        input : `
        <input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>`
    }, { // 17
        question : `Avez-vous une maladie chronique du foie ?`,
        input : `
        <input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>`
    }, { // 18
        question : `Êtes-vous enceinte ?`,
        input : `
        <input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>
        <input type="radio" name="input">
        <label>Non applicable</label><br>`
    },
    { // 19
        question : `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
        input : `
        <input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>
        <input type="radio" name="input">
        <label>Ne sait pas</label><br>`
    },
    { // 20
        question : `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
        input : `
        <input type="radio" name="input">
        <label>Oui</label><br>
        <input type="radio" name="input">
        <label>Non</label><br>
        <input type="radio" name="input">
        <label>Ne sait pas</label><br>`
    },
  
 
  
  
    


];

let currentQuestion = 0;
const totalQuestions = questions.length;    
const preambule = document.querySelector("#preambule");
const start = document.querySelector("#start");
const qst = document.querySelector("#qst");
const form = document.querySelector("#form");
const info = document.querySelector("#test-info");
const btnPrevious = document.querySelector("#btn-previous");
const btnNext = document.querySelector("#btn-next");


info.style.display = "none";
btnPrevious.style.display = "none";
btnNext.style.display = "none";

function loadQuestion (questionIndex) {
 let q = questions[questionIndex];
 qst.textContent = q.question;
 form.innerHTML = q.input;

}



function startTest() {
    currentQuestion = 0;
  preambule.style.display = "none";
  loadQuestion(0);
  btnNext.style.display = "";
  btnPrevious.style.display = "none";
  qst.style.display = "";
  form.style.display = "";
  btnNext.textContent = " la question suivante";
  info.style.display = "block" ;
  

  

}

function loadNextQuestion() {
    currentQuestion++;
    btnPrevious.style.display = "block"; //ou bien = "" pour annuler le display none 
    
    info.style.display = "none" ;
    if (currentQuestion == totalQuestions - 1) {
      btnNext.textContent = "terminer";
    }
    else if (currentQuestion == totalQuestions) {
      preambule.style.display = "block";
      qst.style.display = "none";
      form.style.display = "none";
      btnNext.style.display = "none";
      btnPrevious.style.display = "none";
    } else {
      loadQuestion(currentQuestion);
    }
}


function loadPreviousQuestion() {
    currentQuestion--;
    // btnNext.textContent = " la question suivante";
    if (currentQuestion == 0) {
      btnPrevious.style.display = "none";
      info.style.display = "block" ;
    }
    loadQuestion(currentQuestion);
}