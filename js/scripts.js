var prepInput = function(userInput) {
  return userInput.replace(" ","");
  console.log(prepInput);
}

var reverseInput = function(userInput) {
  return userInput.split("").reverse("").join("");
  console.log(reverseInput);
}

var palindrome = function(userInput) {
  if (prepInput(userInput) === reverseInput(userInput)) {
    return "is a palindrome!";
  }
  else {
    return "is not a palindrome. Try again!";
  }
};


$(document).ready(function(){
 $("#palindrome form").submit(function(event) {
 var userInput = $("input#userInput").val();

 var answer = palindrome(userInput);

 $("#Output").show();
 $(".answer").append(answer);

 event.preventDefault();
  });
});
