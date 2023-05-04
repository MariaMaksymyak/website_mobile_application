//FQA

$('.question > div') .on('click', function(){
   $(this).next('.answer').slideToggle(300)
})



//icon change
const myDiv = document.getElementById("myDiv");
const myImage = document.getElementById("myImage");

let isImage1 = true;

myDiv.addEventListener("click", function() {
  if (isImage1) {
  myImage.src = "./images/question/answer_icon.png";
   isImage1 = false;
 } else {
   myImage.src = "./images/question/question_icon.png";
   isImage1 = true;
  }
});






  