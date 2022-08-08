document.getElementsByClassName('btn')[0].addEventListener('click', (e) => {
  document.querySelector('.div').style.display = 'flex';
//   document.querySelector('.div').textContent = '';
  document.querySelector('.div').style.justifyContent = 'center';
  document.querySelector('.text-primary').style.height = '3rem';
  document.querySelector('.text-primary').style.width = '3rem';
  document.querySelector('.wrong').textContent = ""
  document.querySelector('.budget').textContent = ""
  document.querySelector('.wiki-link').textContent = ""
  document.querySelector('.wiki-link').href = ""
  document.querySelector('.box-office').textContent = ""


  const movieName = document.querySelector('#movie-name-input').value
  document.querySelector('#movie-name-input').value = capitalize(document.querySelector('#movie-name-input').value);
  fetch('https://c5r5fokuj3.execute-api.us-east-2.amazonaws.com/movies?movie=' + movieName + '&year=' + document.querySelector('#movie-year-input').value)
    .then(response => response.json())
    .then(data => {
      putData(data)


    })
});

document.querySelector('#movie-name-input').addEventListener('keypress', (e) => {

  if(e.keyCode == 13) {
    e.preventDefault()
  document.querySelector('.div').style.display = 'flex';
  document.querySelector('.div').style.justifyContent = 'center';
  document.getElementsByClassName('btn')[0].click()
}})

document.querySelector('#movie-year-input').addEventListener('keypress', (e) => {

  if(e.keyCode == 13){
    e.preventDefault()
    document.querySelector('.div').style.display = 'flex';
    document.querySelector('.div').style.justifyContent = 'center';
  document.getElementsByClassName('btn')[0].click()
}})



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
    // document.querySelector('.div').classList.remove('show-spinner')
    document.querySelector('.wrong').textContent = "Couldn't find movie!"
    document.querySelector('.wrong').style.color = 'red';

  } else {
    document.querySelector('.div').style.display = 'none';
    document.querySelector('.budget').textContent = 'Budget: ' + data['budget']
    document.querySelector('.budget').style.color = 'black';
    // document.querySelector('h6').style.fontSize = '2rem';
    document.querySelector('.box-office').textContent = 'Box Office: ' + data['box-office']
    document.querySelectorAll('.wiki-link')[0].href = data['wiki-link']
    document.querySelectorAll('.wiki-link')[0].text = data['name']
    document.querySelectorAll('.wiki-link')[0].target = '_blank'
  }
}
