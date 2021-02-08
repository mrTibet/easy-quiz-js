let questArr =JSON.parse(localStorage.getItem('questions'));
let newArr = questArr.slice();//create changeling newArray
let totPrize = 0;
let prizeCurrent = 100;

const mil =1000000;
const two =2;
const three =3;
const qAm =75;
const hund =100;

function count() {
    totPrize = totPrize+prizeCurrent;
    prizeCurrent *=two;
    document.getElementById('tPrize').innerHTML = totPrize;
    document.getElementById('cPrize').innerHTML = prizeCurrent;
}

//random numbers 
let randomNumb = Math.floor(Math.random() * (qAm - 1 + 1)) + 1;

function skipButton() {
    nextLevel();
    document.getElementById('sButton').style.display = 'none';
}

let rightAnswer;
//new game function
function startTheGame() {
    document.getElementById('eventField').style.display = 'block'
    document.getElementById('sButton').style.display = 'block'
    document.getElementById('prizeInf').style.display = 'block';
    document.getElementById('lostGame').style.display = 'none';
    document.getElementById('winGame').style.display = 'none';
    nextLevel();
    document.getElementById('nGameButton').disabled = true;
    document.getElementById('tPrize').innerHTML = 0;
    document.getElementById('cPrize').innerHTML = hund;
    totPrize = 0;
    prizeCurrent = hund;
    newArr = questArr.slice();
}

function nextLevel() {
    let newRanNumb = Math.floor(Math.random() * (newArr.length - 1 + 1)) + 1;
    document.getElementById('question').innerHTML = newArr[newRanNumb]['question'];
    document.getElementById('zero').innerHTML = newArr[newRanNumb]['content'][0];
    document.getElementById('one').innerHTML = newArr[newRanNumb]['content'][1];
    document.getElementById('two').innerHTML = newArr[newRanNumb]['content'][two];
    document.getElementById('three').innerHTML = newArr[newRanNumb]['content'][three];
    rightAnswer = newArr[newRanNumb]['correct'];
    newArr.splice(newRanNumb, 1);
}
function checkAnswer(value) {
    value = Number(value);
    if (rightAnswer===value) {
        if(totPrize>=mil){
            document.getElementById('eventField').style.display = 'none';
            document.getElementById('prizeInf').style.display = 'none';
            document.getElementById('winGame').style.display = 'block';
            document.getElementById('nGameButton').disabled = false;
        }else {
            nextLevel();
            count();
        }   
    }else {
        document.getElementById('eventField').style.display = 'none';
        document.getElementById('prizeInf').style.display = 'none'; 
        document.getElementById('lostGame').style.display = 'block';
        document.getElementById('lostGamePrize').innerHTML = totPrize;
        document.getElementById('nGameButton').disabled = false;
    }
}

