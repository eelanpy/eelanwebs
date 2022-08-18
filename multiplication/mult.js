var clickedBtn = false;
function checkForTableClick(btns) {
  Array.from(btns).forEach(function (btn) {
    btn.addEventListener('click', function () {
      clickedBtn = true;
      document.querySelector('h4.mt-5').remove();
      document.querySelector('.times-tbl-btns').remove();
      document.querySelector('h3').style.display = 'inline-block'
      document.querySelector('.container').innerHTML += '<span class="marks"></span><button class="submit-btn btn btn-outline-primary">Submit</button>'
      makeQuestions(btn.textContent);
    });
  });


}


var name;

window.mobileCheck = function () {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

var mobileCheck = window.mobileCheck();
const timesTableBtnsEl = document.querySelector('.times-tbl-btns');
const timesTableList = getAllBtns(1, 12);
createBtns(timesTableList, timesTableBtnsEl);
var btn;

function getAllBtns(minNum, maxNum) {
  const timesList = [];
  for (let i = minNum; i <= maxNum; i++) {
    timesList.push(i);
  }
  return timesList
}


function createBtns(list, tableBtnEl) {
  clickedBtn = true;
  list.forEach(function (tableNum) {
    if (mobileCheck == false) {
      const btn = document.createElement('a');
      btn.classList.add('mt-1');
      btn.classList.add('btn');
      btn.classList.add('btn-outline-info');
      btn.classList.add('table-btn');
      btn.textContent = tableNum;
      tableBtnEl.appendChild(btn);
    } if (mobileCheck == true) {
      const btn = document.createElement('a');
      btn.classList.add('mt-1');
      btn.classList.add('btn');
      btn.classList.add('btn-outline-info');
      btn.classList.add('table-btn');
      btn.textContent = tableNum;
      btn.style.width = '7rem';
      btn.style.height = '6.25';
      btn.style.paddingRight = '2px';
      btn.style.paddingLeft = '3px';
      btn.style.paddingTop = '3px';
      tableBtnEl.style.gridGap = '12.5%';

      tableBtnEl.style.rowGap = '1em';
      tableBtnEl.style.gridTemplateColumns = 'repeat(auto-fit, 100px)';
      tableBtnEl.appendChild(btn);
    }

  });

  const allBtns = document.querySelectorAll('.table-btn');
  checkForTableClick(allBtns);
}



// STEP - 2: MAKE QUESTIONS FOR USER TO ANSWER THE PRODUCTS OF THE TIME TABLE THEY CLICKED BEFORE
var questionsTable = document.querySelector('.questions');

function makeQuestions(timeTable) {
  document.querySelector('.name-btn')
  questionsTable = document.querySelector('.questions');

  const questionsRandomList = shuffle(getAllBtns(1, 12));


  for (let i = 0; i < questionsRandomList.length; i++) {
    const questionRow = document.createElement('tr');
    const numberQtn = i + 1;
    questionRow.innerHTML = '<td class="question">' + '<span>' + numberQtn + ') </span>' + timeTable + '</td> <td class="question">X </td> <td class="question">' + questionsRandomList[i] + '</td> <td class="question">= </td>' + '<td><input min=0 max=144 class="form-control answer-input" type="number" pattern="[0-9]*"></td><td class="markAnswer"></td><td class="correct-ans"></td>'
    questionsTable.appendChild(questionRow);
  }

  var userInputs = document.querySelectorAll('.answer-input')
  userInputs[0].focus()
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.addEventListener('click', function (e) {
    let matched = [];
    for (i of userInputs) {

      if (i.value.length != '') {

        matched.push(i.value)
        if (matched.length < 12) {
          userInputs[Array.from(userInputs).indexOf(i) + 1].focus()
        }
      }


    }




    if (matched.length == userInputs.length) {
      checkUserAnswer(submitBtn, timeTable, questionsRandomList, userInputs);
    }
  })





  document.body.addEventListener('keypress', function (e) {
    let matched = [];
    for (i of userInputs) {
      if (e.keyCode == 13) {
        if (i.value.length > 0) {

          matched.push(i.value)
          if (matched.length < 12) {
            userInputs[Array.from(userInputs).indexOf(i) + 1].focus()
          }
        }
      }

    }




    if (e.keyCode == 13 && matched.length == userInputs.length) {
      checkUserAnswer(submitBtn, timeTable, questionsRandomList, userInputs);
    }


  })



}



function getAllBtns(minNum, maxNum) {
  const timesList = [];
  for (let i = minNum; i <= maxNum; i++) {
    timesList.push(i);
  }
  return timesList
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// STEP - 3: CHECK ANSWER
function checkUserAnswer(submit_btn, table, questions, answerEl) {
  submit_btn = document.querySelector('.submit-btn');
  submit_btn.innerHTML = "<i class='fas fa-redo-alt'></i> Play Again?";

  submit_btn.addEventListener('click', function () {
    location.reload();
  })
  let answerCorrect = 0;
  for (let i = 0; i < answerEl.length; i++) {

    if (questions[i] * table == answerEl[i].value && answerEl[i].value != '') {
      answerEl[i].disabled = true;
      answerEl[i].classList.add('correct')
      document.querySelectorAll('.markAnswer')[i].innerHTML = `<i class="correct far fa-check-circle"></i>`


      answerCorrect++
    } else {
      answerEl[i].disabled = true;
      answerEl[i].classList.add('wrong')

      document.querySelectorAll('.markAnswer')[i].innerHTML = '<i class="wrong far fa-times-circle"></i>'
      document.querySelectorAll('.correct-ans')[i].innerHTML = `<p style="font-family: 'Indie Flower', cursive; margin: 0;font-size: 2em; color: red;">${parseInt(questions[i]) * parseInt(table)}</p>`
      document.querySelectorAll('.correct-ans')[i].style.marginRight = "50px";
    }
  }

  displayAverage(parseInt(answerCorrect));
}

// STEP - 4: DISPLAY AVERAGE
function displayAverage(numOfCorrect) {
  const averageEl = document.querySelector('.marks');
  const average = Math.floor(numOfCorrect / 12 * 100);
  if (average < 50) {
    averageEl.textContent = 'Average: ' + average + '% (F)';
    averageEl.classList.add('text-danger');


  } else if (average < 60) {
    averageEl.textContent = 'Average: ' + average + '% (D)';
    averageEl.classList.add('text-warning');

  } else if (average < 70) {
    averageEl.textContent = 'Average: ' + average + '% (C)';
    averageEl.classList.add('text-warning');

  } else if (average < 80) {
    averageEl.textContent = 'Average: ' + average + '% (B)';
    averageEl.classList.add('text-success');

  } else if (average <= 90) {
    averageEl.textContent = 'Average: ' + average + '% (A-)';
    averageEl.classList.add('text-success');

  } else if (average > 90 && average <= 95) {
    averageEl.textContent = 'Average: ' + average + '% (A)';
    averageEl.classList.add('text-success');

  }
  else {
    averageEl.textContent = 'Average: ' + average + '% (A+)';
    averageEl.classList.add('text-success');
  }
}
