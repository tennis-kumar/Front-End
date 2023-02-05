var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = 'dice' + randomNumber + '.png';
var randomImageSource = 'images/' + randomDiceImage;
document.querySelector('.img1').setAttribute('src', randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = 'dice' + randomNumber2 + '.png';
var randomImageSource2 = 'images/' + randomDiceImage2;
document.querySelector('.img2').setAttribute('src', randomImageSource2);

if (randomNumber > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins!';
} else if (randomNumber < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins!';
} else {
  document.querySelector('h1').innerHTML = 'Draw!';
}