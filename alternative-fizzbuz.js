/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x < 21) {
    // check divisibility
       // print Julia, James, or JuliaJames
   var fizzBuzz =   (x % 15 === 0) ? "JuliaJames" : (x % 5 === 0) ? "James" : (x % 3 === 0) ? "Julia" : x ;
  
   console.log(fizzBuzz);
    // increment x
    x += 1;
}
