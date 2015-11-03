var friends = {
  bill: {
    firstName: 'Bill',
    lastName: '',
    number: '',
    address: []
  },
  steve: {
    firstName: 'Steve',
    lastName: '',
    number: '',
    address: []
  }
};
/* Create a function list that takes a single parameter.
In the body of the function, write a for/in loop.
In the loop, use console.log to print out the key. (For example, if you
only have bill and steve as entries, list should just print out "bill"
and "steve".)
*/

var list = function(param) {
  for (var key in friends) {
    console.log(key);
  }
};
/* Define a function search that takes a single argument, name. If
the argument passed to the function matches any of the first names in
friends, it should log that friend's contact information to the console
and return it.
 */
var search = function(name) {
  for (var firstnames in friends) {
    if (friends[firstnames].firstName == name) {

      console.log(friends[firstnames]);
      return friends[firstnames];
    }
  }
};
