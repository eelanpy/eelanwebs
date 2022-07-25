document.getElementsByClassName('btn')[0].addEventListener('click', (e) => {

  const movieName = document.querySelector('#movie-name-input').value
  document.querySelector('#movie-name-input').value = capitalize(document.querySelector('#movie-name-input').value);
  fetch('https://c5r5fokuj3.execute-api.us-east-2.amazonaws.com/movies?movie=' + movieName + '&year=' + document.querySelector('#movie-year-input').value)
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        document.querySelector('h6').textContent = "Couldn't find movie!"
        document.querySelector('h6').style.color = 'red';

      } else {

        document.querySelector('h6').textContent = 'Budget: ' + data.budget
        document.querySelector('h6').style.color = 'black';
        // document.querySelector('h6').style.fontSize = '2rem';
        document.querySelectorAll('h6')[1].textContent = 'Box Office: ' + data['box-office']
        document.querySelectorAll('.wiki-link')[0].href = data['wiki-link']
        document.querySelectorAll('.wiki-link')[0].text = document.querySelector('#movie-name-input').value
        document.querySelectorAll('.wiki-link')[0].target = '_blank'
      }

    })
});



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
