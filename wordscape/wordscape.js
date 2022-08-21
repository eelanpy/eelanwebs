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


// window.onload = function() {
// document.querySelector(".user-word").focus();
// };
//
// window.onload();

window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
      check = true;
  }
  )(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
  ;

var words;

$.getJSON('data.json', function (response) {
  document.querySelector('.input-word').addEventListener('keyup', function (e) {
    document.querySelector('.no-words').textContent = '';
    // e.preventDefault();
    if (e.keyCode == 13) {
      document.querySelector('.div').style.display = 'block';
      document.querySelector('.btn-outline-primary').click()

    }

  })



  document.querySelector('.btn-outline-primary').addEventListener('click', function () {
    document.querySelector('ul.words').innerHTML = '';
    var matched = []
    document.querySelector('.input-word').value = document.querySelector('.input-word').value.toLowerCase() 
    if (document.querySelector('.input-word').value.length > 0 && /[a-zA-Z]$/.test(document.querySelector('.input-word').value) == true) {
      const words = response;

      var wordsList = run(document.querySelector('.input-word').value, 2);
      for (let i = 0; i < wordsList.length; i++) {
        console.log(words.includes(wordsList[i]), wordsList[i]);
        if (words.includes(wordsList[i]) && wordsList[i].length >= 3) {
          matched.push(wordsList[i])
          const word = wordsList[i][0].toUpperCase() + wordsList[i].slice(1, wordsList[i].length).toLowerCase();
          console.log(word);
          document.querySelector('.words').innerHTML += `<li class="word">${titleCase(word)}</li>`

        }

      }
      if (matched.length <= 0) {
        document.querySelector('.no-words').innerHTML = `<p class="text-danger">Couldn't find words for ${document.querySelector('.input-word').value}!</p>`
        document.querySelector('.div').style.display = 'none';
      } else {
        document.querySelector('.words').innerHTML = '';
        matched.sort(function (a, b) {
          return b.length - a.length || b.localeCompare(alert)
        })
        for (word of matched) {
          document.querySelector('.words').innerHTML += `<li class="word">${titleCase(word)}</li>`
        }
        document.querySelector('.div').style.display = 'none';
      }

    }
  })


  function run(string, min = 2) {

    function getAllPermutations(string) {
      var results = [];

      if (string.length === 1) {
        results.push(string);
        return results;
      }

      for (var i = 0; i < string.length; i++) {
        var firstChar = string[i];
        var charsLeft = string.substring(0, i) + string.substring(i + 1);
        var innerPermutations = getAllPermutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
          results.push(firstChar + innerPermutations[j]);
        }
      }
      return results;
    }

    var combine = function (a, min) {
      var fn = function (n, src, got, all) {
        if (n == 0) {
          if (got.length > 0) {
            all[all.length] = got;
          }
          return;
        }
        for (var j = 0; j < src.length; j++) {
          fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
      }
      var all = [];
      for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
      }
      // console.log(a)
      all.push(a);
      return all;
    }

    var a = combine(string.split(''), min)
    var newList = [];

    for (let i of a) {
      newList = newList.concat(getAllPermutations(i.join("")));
    }

    newList = new Set(newList)
    return Array.from(newList)
  }

});


function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}