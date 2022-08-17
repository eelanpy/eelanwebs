
var colorDict = {
    3: '#6D3705',
    2: '#D1F2B3',
    10: '#9955E7',
    16: '#716EA1',
    17: '#9D778E',
    18: '#EE76B9',
    7: '#8511B9',
    19: '#827F50',
    22: '#488A6F',
    24: '#FED1BB',
    5: '#220985',
    1: '#CA825A',
    14: '#F3D364',
    4: '#740F34',
    15: '#4D836D',
    6: '#1139C3',
    9: '#A2490B',
    12: '#2D953D',
    13: '#C36E52',
    20: '#DC7A54',
    21: '#698317',
    8: '#9F2B33',
    23: '#845FE0',
    11: '#1F8771'
  }


var wordFnd;


var words;
$.getJSON('data.json', function(response) {
    document.querySelector('.find-words-btn').addEventListener('click', function(e) {

        var inputWord = document.querySelector('.input-word');

        if('abcdefghijklmnopqrstuvwxyz.'.includes(inputWord.value[0].toLowerCase()) == false) {
            if(document.querySelector('.spinner') != null) {
                document.querySelector('.spinner').remove();
            }

            if(document.querySelector('.alert')) {
              document.querySelector('.alert').remove();
            }
        }

        else if (inputWord.value.length > 0 && /[a-zA-Z]$/.test(inputWord.value) == true || inputWord.value.includes('.') == true || inputWord.value.includes(',') == true) {

          if(document.querySelector('.spinner') != null) {
              document.querySelector('.spinner').remove();
          }

          if(document.querySelector('.alert')) {
            document.querySelector('.alert').remove();
          }
          document.querySelector('ul.possible-words').innerHTML = '';
          if(document.querySelector('.spinner') != null) {
              document.querySelector('.spinner').remove()
          }


          let input_w = inputWord.value.toLowerCase();
          let w = input_w.split(",")[0]
          if(input_w.split(",").length == 1) {
              var  no_letters = '';
              var no_letters_pattern = new RegExp("^[^]*$");
          } else {
            var no_letters = input_w.split(",")[1]
            var no_letters_pattern = new RegExp("^[^" + no_letters.toUpperCase() + "]*$");
          }

          var pattern = new RegExp(w,'g');
          const words = response;


          for (let i = 0; i < words.length; i++) {



                if (words[i].match(pattern) != null && words[i].match(pattern)[0].length == words[i].length && words[i].toUpperCase().match(no_letters_pattern) != null) {
                    const word = words[i][0].toUpperCase() + words[i].slice(1, words[i].length).toLowerCase();
                    var liWord = document.createElement('li')
                    liWord.classList.add('word');
                    liWord.style.color = colorDict[word.length]
                    liWord.textContent = word;
                    document.querySelector('ul.possible-words').appendChild(liWord);
                    wordFnd = true;
                    document.querySelector('ul.possible-words').style.display = 'none';
                } else {
                  wordFnd = false;
                }


      }
      if (wordFnd = true) {

          if(document.querySelector('.spinner') != null) {
            document.querySelector('.spinner').remove()

            document.querySelector('ul.possible-words').style.display = 'block';
          } else {
            document.querySelector('ul.possible-words').style.display = 'block';
          }


          if(document.querySelector('.alert') != null) {
            document.querySelector('.alert').remove();
            document.querySelector('ul.possible-words').style.display = 'block';
          }

          else {
            document.querySelector('ul.possible-words').style.display = 'block';
          }
      }
    }
});
});

document.querySelector('.input-word').addEventListener('keypress', (e) => {
  if(String(e.keyCode) == '13'){
  
  document.querySelector('.find-words-btn').click()
}})
