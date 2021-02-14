//1)
       
//  function factorialize (num){
//     if (num<0){
//       return -1
//     }
//     else if (num==0){
//       return 1;
//     }
//   else{
//     return(num*factorialize(num-1));
//   }
//   }
//   var result= factorialize(8)
//    result= factorialize(5)
//    result= factorialize(9)
//   document.write(result );

// 2)

 //  function area(height, width){
    //       document.write(height*width);
    //  }
    
    //  function Area(height, width){
    //    var height=5;
    //    var width=6;
    //    var result= height*width;
    //    document.write(result);
    //  }
    //  Area();

    // 3)

    //  function palindrome(word){
    //     var word=prompt("Enter a word");
    //     var check="";
    //     for( var i =word.length -1; i >=0; i--){
    //       check +=word[i];
    //       if(word===check){
    //         document.write(word + " " +"is a palindrome word")
    //       }
    //     }
    //   }
    //   palindrome("civic");

    // 4)
    
//     var r = prompt("Enter the Radius Circle");


// function calcCircumference(radius) {
//     var r = radius;
    
//    return (2* (Math.PI * r)).toFixed(2);    
// }

// function calcArea(radius) {
//     var r = radius;
//    return (Math.PI * (Math.pow(r,2))).toFixed(2);    
// }

// document.write("<br>Area of circle is : "+calcArea(r));
// document.write("<br>Circumference of circle is : "+calcCircumference(r));

// 5)

// function currencyDenomination() {
//     var cash =   prompt("Enter cash (in hundreds): ");                             
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

// }
// currencyDenomination();

// 6)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  if("Sun"){
//    document.write("It's weekend");
//  }
//  else{
//    document.write("It 'Sorry! Wait for 2 more days")
//  }
  
// 10)

//   function findOccurrences() {
//       var str = "Pleases read this application and give me gratuity";
//       document.write(str+"<br>")
//       var chars = str.toLowerCase().split("");
//       var count = 0;
      
//       // Loop over every character
//       for(let i = 0; i < chars.length - 1; i++) {
//         var char = chars[i];
//         var next = chars[i + 1];
        
//         // Increase count if both characters are any of the following: aeiou
//         if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//           count++
//         }
//       }
      
//       return count;
//     }
// function isCorrectCharacter(char) {
//   switch (char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       return true;
//     default:
//       return false;
//   }
// }

// var found = findOccurrences();

// document.write(found);