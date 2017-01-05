//creating a variable named skillset and set it equal to the HTML element with the class skillset
//var skillset = document.getElementsByClassName('skillset');
//Use an alert to make the skillset variable's value into a pop-up
//alert(skillset);//pop-up shows [object HTMLCollection]
function main() {
  //Write a variable named $skillset and set it equal to jQuery selector for the skillset class
  //var $skillset = $('.skillset');
  //write an alert on $skillset (variable)
  //alert($skillset);

//hides all skillset elements
  $('.skillset').hide();

  //fadesIn all skillset elements for 1000 milliseconds
  $('.skillset').fadeIn(1000);
}
$(document).ready(main);
