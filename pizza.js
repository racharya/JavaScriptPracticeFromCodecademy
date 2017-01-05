//new variable to keep track of the order
var orderCount = 0;

function takeOrder(crustType, topping){
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType +' pizza topped with '+ topping);
}
// calculates and returns subtotal of the order
function getSubTotal(itemCount){
  itemCount = orderCount;
  return itemCount * 7.5;
}
//calculates and returns tax of the order
function getTax(){
  return (getSubTotal(orderCount)*0.06);
}
//calcualtes and returns the total cost of the order
function getTotal(){
  return (getSubTotal(orderCount) + getTax());
}
takeOrder('thin crust','bacon');
takeOrder('thin crust', 'chicken');
takeOrder('thin crust', 'onion');
console.log(getSubTotal(orderCount));// prints subtotal
console.log(getTotal());//prints total
