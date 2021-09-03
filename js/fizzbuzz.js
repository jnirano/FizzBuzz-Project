//1. Get values from the user, we need to get the Fizz and Buzz value.
function getValues(params) {
   //Get the user values from the DOM
   let fizzValue = document.getElementById("fizzValue").value;
   let buzzValue = document.getElementById("buzzValue").value;

   // Parse for the numbers i.e. convert string to integer
   fizzValue = parseInt(fizzValue);
   buzzValue = parseInt(buzzValue);

   //Check if the numbers are integers, incase user entered a string.
   if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
      //Call FizzBuzz
      //let fbArray = fizzBuzz(fizzValue, buzzValue); //Method 1
      //let fbArray = fizzBuzzB(fizzValue, buzzValue); // Method 2
      let fbArray = fizzBuzzC(fizzValue, buzzValue); // Method 3
   
      //Call display data and write the value to the screen
      displayData(fbArray);
   } else {
      alert("You must enter an integers");
   }
}

//Logic
// Do Fizz Buzz Method 1
function fizzBuzz(fizzValue, buzzValue) {
   //We need to initialize an array
   let returnArray = [];
   
   //Loop from 1 to 100
   for (let i = 1; i <= 100; i++){

      //We check the current value (number) in 4 steps
      //Check 1: Check if divisible by both 3 & 5 (Fizz and Buzz value), if true push "FizzBuzz" into the array not the number
      //Check 2: Check if divisible by 3 (Fizz value), if true push "Fizz" into an array and not the number
      //Check 3: Check if divisible by 5 (Buzz value), if true push "Buzz" into an array not the number
      // If none of the numbers are divisible by 3 or 5 then push the number into the array
      if (i % fizzValue == 0 && i % buzzValue == 0) {
         returnArray.push("FizzBuzz");
      } else if (i % fizzValue == 0 ) {
         returnArray.push("Fizz");
      } else if (i % buzzValue == 0) {
         returnArray.push("Buzz");
      } else {
         returnArray.push(i);
      }
   }
   //Finally Return the array
   return returnArray;
}

// Do Fizz Buzz Method 2: Using Switch Statement
function fizzBuzzB(fizzValue, buzzValue) {
   
   let returnArray = [];
   let Fizz = false;
   let Buzz = false;

   for (let i =0; i <= 100; i++){
      Fizz = i % fizzValue == 0;
      Buzz = i % buzzValue == 0;

      switch (true) {
         case Fizz && Buzz:{
            returnArray.push('FizzBuzz');
            break;
         }
         case Fizz: {
            returnArray.push('Fizz');
            break;
         }
         case Buzz:{
            returnArray.push('Buzz');
            break;
         }
         default: {
            returnArray.push(i);
            break;
         }
      }
   }
   return returnArray;
}

// Do Fizz Buzz Method 3: Using Ternary Operator
function fizzBuzzC(fizzValue, buzzValue) {
   let returnArray = [];

   for (let i = 0; i <= 100; i++) {
      
      let value =((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i );
      returnArray.push(value);
   }
   return returnArray;
}


// Loop over the array and create a table row for each item
function displayData(fbArray) {

   //Get the table body element from the page
   let tableBody = document.getElementById("results");

   //Get the template row
   let templateRow = document.getElementById("fbTemplate");

   //Clear the table first
   tableBody.innerHTML = "";

   for (let index = 0; index < fbArray.length; index += 5) {
      let tableRow = document.importNode(templateRow.content, true);

      // Grab use the td and put them into an array
      let rowCols = tableRow.querySelectorAll("td");
      
      rowCols[0].classList.add(fbArray[index]);
      rowCols[0].textContent = fbArray[index];
      
      rowCols[1].classList.add(fbArray[index + 1]);
      rowCols[1].textContent = fbArray[index+1];
      
      rowCols[2].classList.add(fbArray[index + 2]);
      rowCols[2].textContent = fbArray[index+2];
      
      rowCols[3].classList.add(fbArray[index + 3]);
      rowCols[3].textContent = fbArray[index+3];
      
      rowCols[4].classList.add(fbArray[index + 4]);
      rowCols[4].textContent = fbArray[index+4];

      tableBody.appendChild(tableRow);
   }
   //Add all the rows to the table
   
}