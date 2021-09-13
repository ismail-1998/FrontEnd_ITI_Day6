/*
1-	Using Math.random() try to change image by random image
    when you refresh page or press on button
    try store images paths in array .
*/

const img = document.getElementById('img')
const pictures = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
]

function changeImg() {
  // img.src = './images/' + (Math.floor(Math.random() * 9) + 1) + '.jpg';

  let randNum = Math.floor(Math.random() * 8) + 1
  img.src = './images/' + pictures[randNum]
}
// -------------------------------------------- //

// 2-	Using for/in try to iterate on an object properties .
const person = {
  name: 'Ismail Ahmed',
  age: 24,
  address: 'Sohag',
  university: 'Ahram Canadian University',
  faculty: 'Computer Scinece',
  jobTitle: 'Front-end Developer',
}

const myInfo = document.getElementById('my-info')

for (let prop in person) {
  myInfo.innerHTML += prop + ' = ' + person[prop] + '<br/>'
}
// ------------------------------------------ //

// 3-	Using array and get day try to display today day name .
const today = document.getElementById('today')
const today1 = document.getElementById('today1')

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const date = new Date()
today.innerHTML = 'Today is : ' + days[date.getDay()]

// 4-	Using switch case try to display today day name .
switch (date.getDay()) {
  case 0:
    today1.innerHTML = 'Today is : ' + days[date.getDay()]
    break
  case 1:
    today1.innerHTML = 'Today is : ' + days[date.getDay()]
    break
  case 2:
    today1.innerHTML = 'Today is : ' + days[date.getDay()]
    break
  case 3:
    today1.innerHTML = 'Today is : ' + days[date.getDay()]
    break
  case 4:
    today1.innerHTML = 'Today is : ' + days[date.getDay()]
    break
  case 5:
    today1.innerHTML = 'Today is : ' + days[date.getDay()]
    break
  case 6:
    today1.innerHTML = 'Today is : ' + days[date.getDay()]
    break
}
// --------------------------------------------- //

// 5- Using Math.random() try to generate a number between 0/6 and use the output as day name .
const randomDay = document.getElementById('randomDay')

function changeDay() {
  let rNum = Math.floor(Math.random() * 7)
  randomDay.innerHTML = days[rNum]
  
}
