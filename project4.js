function calculate()
{
    let addition = (num1, num2) =>  num1 + num2;
    let subtraction = (num1, num2) =>  num1 - num2;
    let multipication = (num1, num2) =>  num1 * num2; 
    let division = (num1, num2) =>  num1 / num2;

   let num1  = parseFloat(document.getElementById('num1').value) ;
   let num2  = parseFloat(document.getElementById('num2').value) ;

   let selectedValue = document.getElementById('select-type').value;

   if (selectedValue === 'addition')
   {
    document.getElementById('answer').innerHTML = addition(num1, num2);
   }

   else if (selectedValue === 'subtraction')
   {
    document.getElementById('answer').innerHTML = subtraction(num1, num2);
   }

   if (selectedValue === 'multipication')
   {
    document.getElementById('answer').innerHTML = multipication(num1, num2);
   }

   if (selectedValue === 'division')
   {
    document.getElementById('answer').innerHTML = division(num1, num2);
   }
 
}
