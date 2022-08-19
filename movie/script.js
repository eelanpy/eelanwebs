document.querySelector('input').autofocus = true;

document.getElementsByClassName('btn')[0].addEventListener('click', (e) => {
  document.querySelector('.div').style.display = 'flex';
  document.querySelector('.div').style.justifyContent = 'center';
  document.querySelector('.text-primary').style.height = '3rem';
  document.querySelector('.text-primary').style.width = '3rem';
  document.querySelector('.wrong').textContent = ""
  document.querySelector('.budget').textContent = ""
  document.querySelector('.wiki-link').textContent = ""
  document.querySelector('.wiki-link').href = ""
  document.querySelector('.box-office').textContent = ""
  document.querySelector('.more-info-text').textContent = "";


  var movieName = document.querySelector('#movie-name-input').value
  var inputWords = movieName.toLowerCase().replace(/"/g, "").replace(/'/g, "").replace(/\(|_\)/g, "").replace('-', "").replace(')', "").replace(" ", "").replace(" ", "");
  url = 'https://eelanpy1.s3.us-east-2.amazonaws.com/movies.json'
  var matched = []
  fetch(url)
    .then(res => res.json())
    .then(data => {
      for (i of Object.keys(data)) {

        for (j in data[i]) {
          movieName = j.toLowerCase().replace(/"/g, "").replace(/'/g, "").replace(/\(|_\)/g, "").replace('-', "").replace(')', "").replace(" ", "").replace(" ", "");



          if (movieName.includes(inputWords) == true) {
            matched.push(`<button id=${data[i][j]} class="btn btn-primary movie-btn ml-0">${j}</button>`)
          }
        }
      }
      matched = new Set(matched)

      matched = Array.from(matched)
      matched.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b)
      })
      if (matched.length > 1) {
        document.querySelector('.movies').innerHTML = '';
        document.querySelector('.div').style.display = 'none';
        matched.forEach(element => {

          document.querySelector('.movies').innerHTML += `<li class="list-group-item">${element}</li>`;

          Array.from(document.querySelectorAll('button.movie-btn')).forEach(movieBtn => {
            movieBtn.addEventListener('click', (e) => {
              e.preventDefault()
              document.querySelector('.div').style.display = 'flex';
              document.querySelector('.div').style.justifyContent = 'center';
              document.querySelector('.text-primary').style.height = '3rem';
              document.querySelector('.text-primary').style.width = '3rem';

              let movie_link = movieBtn.id;

              document.querySelector('.movies').innerHTML = '';
              document.querySelector('#movie-name-input').value = movieBtn.textContent;
              fetch('https://c5r5fokuj3.execute-api.us-east-2.amazonaws.com/movies?url=' + movie_link + '&name=' + movieBtn.textContent)
                .then(response => response.json())
                .then(data => {

                  putData(data)
                });

            })
          })
        });
      } else if (matched.length == 0) {
        document.querySelector('.div').style.display = 'none';

        document.querySelector('.wrong').textContent = "Couldn't find movie!"
        document.querySelector('.wrong').style.color = 'red';
      }
      else {
        document.querySelector('.movies').innerHTML = '';

        fetch('https://c5r5fokuj3.execute-api.us-east-2.amazonaws.com/movies?url=' + matched[0].split(' class=')[0].split('id=')[1])
          .then(response => response.json())
          .then(data => {
            putData(data)
          });

      }
    });
});







document.querySelector('body').addEventListener('keypress', (e) => {

  if (e.keyCode == 13 && e.target.value != '') {

    e.preventDefault()
    document.querySelector('.movies').innerHTML = '';
    document.querySelector('.div').style.display = 'flex';
    document.querySelector('.div').style.justifyContent = 'center';
    document.getElementsByClassName('btn')[0].click()
  }
})




function capitalize(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

function putData(data) {
  if (data.message) {
    document.querySelector('.div').style.display = 'none';
    document.querySelector('.wrong').textContent = "Couldn't find movie!"
    document.querySelector('.wrong').style.color = 'red';

  } else {
    if (data['budget'].toLowerCase().includes('availab') == true && data['box-office'].toLowerCase().includes('availab') == true) {
      document.querySelector('.div').style.display = 'none';
      document.querySelector('#movie-name-input').value = data['movie_name'];
      document.querySelector('.wrong').innerHTML = "Couldn't find info for this movie! <br><br>But found the wiki link:"
      document.querySelector('.wrong').style.color = 'red';
      document.querySelectorAll('.wiki-link')[0].href = data['wiki_link']
      document.querySelectorAll('.wiki-link')[0].text = data['movie_name']
      document.querySelectorAll('.wiki-link')[0].target = '_blank'

    } else {
      document.querySelector('#movie-name-input').value = data['movie_name'];
      document.querySelector('.div').style.display = 'none';
      document.querySelector('.budget').textContent = 'Budget: ' + data['budget']
      document.querySelector('.budget').style.color = 'black';
      document.querySelector('.box-office').textContent = 'Box Office: ' + data['box-office']
      document.querySelector('.more-info-text').textContent = "For more information:";
      document.querySelectorAll('.wiki-link')[0].href = data['wiki_link']
      document.querySelectorAll('.wiki-link')[0].text = data['movie_name']
      document.querySelectorAll('.wiki-link')[0].target = '_blank'

    }
  }
}