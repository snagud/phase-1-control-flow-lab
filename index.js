function scuberGreetingForFeet(ride){
 console.log('ride', ride)
 if (ride < 400){
   return'This one is on me!'

 } else if (ride > 2500) {
   return 'No can do.'

 } else if (ride > 2000) {
 return 'I will gladly take your thirty bucks.'}
}
// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }
function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.' : 'No go.';

}
function switchOnCharmFromTip(tip){
  if (tip === "generous"){
    return 'Thank you so much.';
  }
 else if (tip === "not as generous"){
   return "Thank you.";
 }else {
   return "Bye."
 }
}