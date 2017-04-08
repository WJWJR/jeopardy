function Category(text, points, answer){
  this.text = text;
  this.points = points;
  this.answer = answer;
  //console.log('this');


  this.isCorrect = function(event){
    let article = event.target;
    let userConfirmation = article.parentNode;
      if (article.textContent === this.answer) {
          userConfirmation.textContent = "You Have Selected" + ('article');
      } if (article)
  console.log(userConfirmation);
  }

  this.display = function() {
    let source = document.querySelector('#categories').innerHTML;
    let template = Handlebars.compile(source);
    let html = template(this);
    document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
    document.querySelector('#quiz article.threeCats').addEventListener('click', this.isCorrect);
    //console.log(document.querySelector('#quiz article.threeCats'));

  }
}

fetch("http://jservice.io/api/random?count=3")
  .then(reponse => reponse.json())
  //.then(json =>console.log(json))
  .then(catApiArr => catApiArr.forEach(apiForCatDataOnPage))


function apiForCatDataOnPage(object) {
  let text = object.category.title;
  let points = object.value;
  let answer = object.userConfirmation;
  let holdOnToCategory = new Category(text,points,answer);
  //console.log(text);
  holdOnToCategory.display()
}
