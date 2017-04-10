// function Category(text, points, answer){
//   this.text = text;
//   this.points = points;
//   this.answer = answer;
//   //console.log('this');
//
//
//   this.isCorrect = function(event){
//     let span = event.target;
//     let userConfirmation = span.parentElement;
//     let threeQuestions = document.querySelector('article.userQuestions');
//       if (span.textContent === this.answer) {
//           userConfirmation.textContent = "You Have Selected" + ('span');
//       }
//   console.log(userConfirmation);
//   }
//
// // window.addEventListener('this.isCorrect', function(e) {
// // console.log(window)
// // });
//   this.display = function() {
//     let source = document.querySelector('#categories').innerHTML;
//     let template = Handlebars.compile(source);
//     let html = template(this);
//     document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
//     document.querySelector('#quiz article.threeCats').addEventListener('click', this.isCorrect);
//     //console.log(document.querySelector('#quiz article.threeCats'));
//
//   }
//   /*===========================================================================================================================
//   THREE QUESTIONS
//   ============================================================================================================================*/
//     // function threeQuestions(text, answer) {
//     // Question.call(this, text, answer);
//     //console.log('this');
//     //
//     //
//     // this.isCorrectforThreeQuestions = function(event){
//     //   let article = event.target;
//     //   let userConfirmation = article.parentNode;
//     //     if (article.textContent === this.answer) {
//     //         userConfirmation.textContent = "You Have Selected" + ('article');
//     //     } if (article)
//     // console.log(userConfirmation);
//     // }
//     //
//     // this.displayIsForThreeQuestions = function() {
//     //   let source = document.querySelector('#categories').innerHTML;
//     //   let template = Handlebars.compile(source);
//     //   let html = template(this);
//     //   document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
//     //   document.querySelector('#quiz article.threeCats').addEventListener('click', this.isCorrect);
//     //   //console.log(document.querySelector('#quiz article.threeCats'));
//     //
//     // }
//
//
//
//
//
//
// } //this is attached to the Category Function
//
// /*==============================================================================================================================
// THE FETCH CODE BELOW
// ==============================================================================================================================*/
//
// fetch("http://jservice.io/api/random?count=3")
//   .then(reponse => reponse.json())
//   //.then(json =>console.log(json))
//   .then(catApiArr => catApiArr.forEach(apiForCatDataOnPage))
//
//
// function apiForCatDataOnPage(object) {
//   let text = object.category.title;
//   let points = object.value;
//   let answer = object.userConfirmation;
//   let holdOnToCategory = new Category(text,points,answer);
//   // let text = object.question;
//   // let answer = object.userConfirmation;
//   // let holdOnToQuestions = new threeQuestions(text,points,answer);
//
//   //console.log(text);
//   holdOnToCategory.display();
//   // holdOnToQuestions.display();
// }


function GameShow(catorgies, questions, points) {
  this.catorgies = catorgies;
  this.questions = questions;
  this.points = points;
  this.isTheCorrectAnswer = false;
}

GameShow.prototype.notCorrectAnswer = function(){
  this.isTheCorrectAnswer = false;
};

GameShow.prototype.correctAnswer = function(){
  this.isTheCorrectAnswer = true;
};

GameShow.prototype.isDisplayed = function(){}

function Player() {
  this.points = 0;
  this.nowPointsIndex = 0;
};

Player.prototype.select = function() {
  let selectedCategory = this.catorgies;
  let seclectedQuestion = this.questions;
};

Player.prototype.userInput = function(){
  let answeredQuestion = 
}

Player.prototype.add = function(points){
  this.points.push(points);
};

Player.prototype.winning = function(){
  let currentPoints = this.points[this.nowPointsIndex];
  currentPoints(winning);
};

Player.prototype.notwinning = function(){
  let currentPoints = this.points[this.nowPointsIndex];
  currentPoints(winning);
};
