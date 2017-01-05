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

  //Hide projects elements
  $('.projects').hide();

  //attach on('click') with empty function for resent project button (.projects-button)
  $('.projects-button').on('click', function(){
    //Selector for projects class and calling show function on it
    //$('.projects').show();

    //Using toggle function to hide and show the element
    $('.projects').toggle();

    //toggle a CSS class with a jQuery function
    $('.projects-button').toggleClass('active');//css class (active) doesnot require dot in front of it
  });

}
$(document).ready(main);
