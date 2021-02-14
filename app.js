//   JavaScript Programming Assignment 1 (line 1 t0 line 125)

// alert("Welcome to JS Land..." + "\r\n" + "Happy Coding!" )

//   2)

// var name = "Jhone Doe";
// var age = "15 year old";
// var skill = "Certified Mobie Application Development ";
// alert( name);
// alert(age);
// alert(skill);

// 3)

// var email;
//   email ="fk.mobiles@gmail.com"
//    alert("My email address is" + " " +email)

// 4)

// document.write("Yah! I can write HTML content through JavaScript");

// 5)

// var age= 15;
//      alert( "I am "+" "+age+" " +"years old" )


// 6)

// var birthYear= 1990;
//     document.write("My birth year is "+" "+birthYear + "<br>"+"Data type of my declare variablr is number" ) ; 

// 7)
    // document.write("<h1> Rules for naming JS variable <h1>" +"<br>" +"<br>" + "Variable names can only contain numbers, $, _ "+ " "+"For example $my_1stVariable" + "<br>"+"Variable must begin with a letter, $ or _ For example: $name, _name or name"+"<br>"+"Variable names are case sensitive"+ "<br>"+"Variable names should not be JS keywords")


// 8)

    // var a = 3;
    //   var b = 5;
    //   var c = a+b;
    //   document.write("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " "  + c) b



// 9)
//    var a = 3;
//       var b = 5;
//       var c = a-b;
//       document.write("Subtraction of" + " " + a + " " + "and" + " " + b + " " + "is" + " "  + c); 
      
//      var a = 3;
//     var b = 5;
//     var c = a*b;
//     document.write("Multiplication of" + " " + a + " " + "and" + " " + b + " " + "is" + " "  + c);
      
//     var a = 3;
//     var b = 5;
//     var c = a/b;
//     document.write("Division of" + " " + a + " " + "and" + " " + b + " " + "is" + " "  + c);
       
//     var a = 3;
//     var b = 5;
//     var c = a%b;
//     document.write("Modulus of" + " " + a + " " + "and" + " " + b + " " + "is" + " "  + c);


// 10)


    //  var a = 5;
    //  var b = 7;
    //  document.write("Value after variable declaraion is undefined" + "<br>" + 
    //  "Intial value: " + " " + a + "<br>" +
    //  "Value after increment is:" + " " + ++a + "<br>" +
    //  "Value after addition is:" + " " + (a + b) + "<br>" + 
    //  "Value after decrement is:" + " " + (--a+b) + "<br>" +
    //  "The remainder is:" + " " + (a+b)%3 );
  
//  11)

//   var C = "25 C";
//       var F = "70 F";
//       document.write("25 <sup>o</sup>C is" + " " + ((25 * 9/5) +32) + " " + "<sup>o</sup>F" + "<br>" +
//        "70<sup>o</sup>F is" + " " + ((70-32)*5/9) + " " + "<sup>o</sup>C") ;


//  12)

//    document.write("Total Currency in PKR:" + " " + (10*104.80 + 25*28));


//   13)


//   var a = 10;
//    document.write("Result:" + "<br>" + 
//                     "The value of a is:" + " " + a + "<br>" + 
//                   "........................................" + "<br>" + "<br>" +
//                     "The value of ++a is:" + " " + ++a + "<br>" +
//                 "Now the value of a is:" + " " + a + "<br>" + "<br>" + "<br>" +
//                    "The value of a++ is:" + " " + a++ + "<br>" + 
//                   "Now the value of a is:" + " " + a + "<br>" + "<br>" + "<br>" + 
//                 "The value of --a is:" + " " + --a + "<br>" +
//                    "Now the value of a is:" + " " + a + "<br>" + "<br>" + "<br>" +
//                 "The value of a-- is:" + " " + a-- + "<br>" +
//                    "Now the value of a is:" + " " + a);  
    

//  14)
//   var a=2, b=1;

// var result = --a - --b + ++b + b--;

//    document.write("a is:" + " " + a + "<br>" + 
//            	     "b is:" + " " + b + "<br>" +
//            	     "result is" + " " + result);

 //  Explain each step
  //  --a; ( 1 )
  //  --a - --b; ( 1 -0 )
 //  --a - --b + ++b; ( 1- 0 + 1 )
 //  --a - --b + ++b + b--; (1 - 0 + 1 + 1)


   //                       Assignment 2 ( line 129 to 351)

//     // 1)
//     var a = prompt("Please Enter City Name");
// var correctAnswer = "Karachi";
// if (a == correctAnswer) {
         
// 	alert("Welcome to City of Lights");
// }

    //  2)
// var color = prompt("Enter Color Name");
              
// if (color === "red") {
// 	alert("Must Stop");
// }
// else if (color === "yellow") {
// 	alert("Ready to Move");
// }
// else{
// 	alert("Move Now");
// }

   // 3)
   // var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// output: given condition for variable a is true
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
  //   alert("condition 2 is true");
// }
// if (++c < 14){
//   alert("condition 3 is true");
// }
// if(c === 14){
//   alert("condition 4 is true");
// }

 // output: condition 2 is true

// var materialCost = 20000;
 // var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//   alert("The cost equals");
// }

// output: the cost equals

// if (true){
//   alert("True");

//      }
//   if(false){
//     alert("False");
  //   }
//   output: true
// if("car" < "cat"){
//   alert("car is smaller than cat");
// }
// outpuit: both are in string so car is smaller than cat   

//  4)
//    var mOb1 = +prompt("Enter Obtain Marks!");
// var mOb2 = +prompt("Enter Obtain Marks!");
// var mOb3 = +prompt("Enter Obtain Marks!");
// var totalObtainMarks = mOb1 + mOb2 + mOb3;
// var totalMarks = +prompt("Enter Total Marks!");
// var Percentage = totalObtainMarks/totalMarks*100;

                     
                      

//  if (Percentage >= 80){
//        document.write("<h2>Marks Sheet</h2>" + "<br>" + "<br>" +"Total Marks :" + " " + totalMarks + "<br>" + 
// 	            "Marks Obtained :" + " " + totalObtainMarks + "<br>" + 
// 	            "Percentage :" + " " + Percentage + "<br>" + 
// 	             "Grade : A-one" + "<br>" +  "Remarks : Excellent" );
          
//  }
                       
                        
                        
//  else if (Percentage >= 70){
//        document.write("Total Marks :" + " " + totalMarks + "<br>" + 
// 	            "Marks Obtained :" + " " + totalObtainMarks + "<br>" + 
// 	            "Percentage :" + " " + Percentage + "<br>" + 
// 	             "Grade : A" + "<br>" +  "Remarks : Good" );
          
//  }

                      
//  else if (Percentage >= 60){
//        document.write("Total Marks :" + " " + totalMarks + "<br>" + 
// 	            "Marks Obtained :" + " " + totalObtainMarks + "<br>" + 
// 	            "Percentage :" + " " + Percentage + "<br>" + 
// 	             "Grade : B" + "<br>" +  "Remarks : You need to improve" );
          
//  }

                        
//  else if (Percentage < 60){
//        document.write("Total Marks :" + " " + totalMarks + "<br>" + 
// 	            "Marks Obtained :" + " " + totalObtainMarks + "<br>" + 
// 	            "Percentage :" + " " + Percentage + "<br>" + 
// 	             "Grade : Fail" + "<br>" +  "Remarks : Sorry" );
          
//  }

// 5)
// var a = prompt("Guess the secert number");
// var secertNum = 4;
// var num = secertNum +1;
// if (a == secertNum) {
// 	alert("Bingo! Correct Answer");
// }
// else if (a == num) {
// 	alert("Close enough to the correct answer");
// }
// else{
// 	    alert("Try Again");
// }

//  6)
// var num = prompt("Enter Number");
// if(num % 2 == 0){
 
// 	document.write("The Number is Even:" + " " + num);
 
// }
// else{
 
// 	 document.write("The Number is Odd:" + " " + num);
// }

// 7)
  //                var val1= +prompt("enter first value ");
  //                var sign= prompt("enter operator");
  //                var val2= +prompt("enter the second value");
  //    if(sign==="+"){
  //        alert(val1+val2)
  //    }
  //     else if(sign=== "-"){
  //       alert(val1-val2)
  //   }
  //    else if(sign=== "*"){
  //       alert(val1*val2)
  //   }
  //    else if(sign=== "/"){
  //       alert(val1/val2)
  //   }
  //  else if(sign=== "%"){
  //       alert(val1%val2)
  //   };

  // 8)
//      var    number = prompt("Pick a number?");

//    var sign = number > 0 ? 1 : number == 0 ? 0 : -1;

//       if (sign == 1){
//  alert("your number is positive!" + " " + number);}
//      else if (sign == 0){
//     alert("Hey, there's nothing there!" + " " + number);}
//      else if (sign == -1){
// alert("Wow, that thing's so small it might be negative!" + " " + number);}

 // 9)

//  var arr = ["a" , "e" ,"i", "o", "u"];

//  var search = prompt("Enter String of the length 1");
//   if (arr.indexOf(search) !== -1) {
                                           
//          document.write(search+ " " + "is a vowel");
//   }
//   else{
//   	     document.write(search + " " + "is not vowel");
//   }

// 10)

// var password = "farrukh123";
// var user = prompt("Enter Your password");
// if (user === "") {
// 	  document.write("Please Enter Your password");
// }
// else if (user === password) {
// 	 document.write("Correct! The passward you entered matches the original passward ");
// }
// else{
// 	  document.write("Incorrect password");
// }

// 11)

// var time = prompt("Enter The Time");
//  if (time >= 0 && time < 1200) {
                                               	  
//  	  document.write("Good Morning");
//  }
//  else if (time >=1200 && time < 1700) {
                                               	  
//  	  document.write("Good Afternoon");
//  }
//  else if (time >=1700 && time < 2100) {

//  	document.write("Good Evening");

//  }
//  else if (time >=2100 && time< 2359) {

//  	  document.write("Good Night");
//  }


//    Assisgnment 3 (line 354- 522)

// 1)

// var education = [ "SSC" , "HSC" , "BCS" , "BS" , "B.COM" , "MS" , "M.Phil." , "PhD"]
// for(var i = 0; i < education.length ; i++){
                   
//   document.write( i + ")" + " " + education[i] + "<br>");	
// }

// 2)

// var names = ["Michael", "John", "Tony"];
// var score = [320 , 230 , 480];                        
//   document.write("Score of" + " " + names[0] + " " + score[0] + "." + "Percentage:" + " " + score[0]/500*100 + "%" + "<br>" + "Score of" + " " + names[1] + " " + score[1] + " " + "Percentage" + " " + score[1]/500*100 + "%" + "<br>" + "Score of" + " " + names[2] + " " + score[2] + " " + "Percentage" + " " + score[2]/500*100 + "%");  

// 3)
// var coloName = ["Red" , "Black" , "Green" , "Yellow" , "White"];
                      
// a.
//var color = prompt("Ente Color Name");
// coloName.unshift(color);
// document.write(coloName);

// b. 
// var color = prompt("Enter Color Name");
// coloName.push(color);
// document.write(coloName);

// c.
// coloName.unshift("Margenda" , "off White");
// document.write(coloName);

// d. 
// coloName.shift("Margenda");
// document.write(coloName); 

// e.
// coloName.pop();
// document.write(coloName)


// 4)

// var cityNames = ["Karachi" , "Lahore", "Islamabad" , "Quetta" , " Peshawar"];
// document.write("Cities list :" + "<br>" + " " + cityNames + "<br>" + "<br>" );
// var selectedCities = cityNames.slice(2 , 4);
// document.write("Selected City List:" + "<br>" + " " + selectedCities );
 
// 5)
    //  var arr1 =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    //  var sample =[];
    //  var len = arr1.length;
    //  for (var i=0; i<len; i++){
    //    if(sample.indexOf(arr1[i]) === -1){
    //      sample.push(arr1[i]);
    //    }
    //  }
    //  console.log(sample)
    //  document.write( "Sample array : var arr1="+"["+arr1+"]" +";"+ " " + "<br>" + "Sample Output :"+"["+ sample +"]")

  // 6)    
        //  var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
        //   var o = ["th","st","nd","rd"];
        //   document.write("1st choice is Karachi" + "<br>" + "2nd choice is Lahore" + "<br>" +"3rd choice is Islamabad")
          

 // 7)
        // var a = [10,20,4,40,60,70];
        //  var b = [1,2,3,4,5,6,7,8,9,10];  
        //  var arr1 = a.concat(b);
        //  console.log(arr1)
        //  var sample =[];
        //   var len = arr1.length;
        //   for (var i=0; i<len; i++){
        //     if(sample.indexOf(arr1[i]) === -1){
        //       sample.push(arr1[i]);
        //     }
        //   }
        //   console.log(sample)
        //   document.write("var a = [10,20,4,40,60,70]" + "<br>" +"var b = [1,2,3,4,5,6,7,8,9,10]" + "<br>"+"Output should be:" +"["+sample +"]")
         
// 8)
// // a. 
//       document.write("Counting:" + "<br>" + "<br>")
//      for(var i = 1; i <=15; i++){

//      	document.write(i + ",");
//      } 


// b.
//      document.write("Reverse Counting:" + "<br>" + "<br>")
// for(var i = 10; i > 0; i--){

// 	document.write(i + ",");
// }

// .c
//     document.write("Even:" + "<br>" + "<br>")
// for(var i = 0; i <= 20; i++){

// 	if ( i % 2 == 0) {

// 		 document.write(i + ",");
// 	}
// }

// .d 
                                    
//         document.write("Odd:" + "<br>" + "<br>")
// for(var i = 1; i <= 20; i++){

// 	if ( i % 2 == 1) {

// 		 document.write(i + ",");
// 	}
// }

// e.
//       document.write("Series:" + "<br>" + "<br>")
// for(var i = 1; i<=20; i++){

// 	 if (i % 2 == 0) {
// 	 	  document.write(i + "K" + ",");
// 	 }
// }  

// 9)

// var arr = ["24", "53", "78", "91", "12"];
//  var max = arr[0];
//  for(var i =0; i < arr.length; i++){

//  	 if (arr[i] >= max) {
//  	 	max = arr[i];
//  	 }
//  }

//   document.write("Array items:" + " " + arr + "<br>" + "The Largest number is" + " " + max);
        
// 10)

//     var arr = ["24", "53", "78", "91", "12"];
//  var min = arr[0];
//  for(var i =0; i < arr.length; i++){

//  	 if (arr[i] < min) {
//  	 	max = arr[i];
//  	 }
//  }
//  document.write("A =" + " " + arr + "<br>"+"Output should be:" + " " + min);

// 11)

// var  arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("Welcome to Buzdar Bakery. What do you want to order Sir/Ma'am");

//   if (arr.indexOf(search) !== -1) {

//   	document.write(search + " " + "is avaiable at index 2 in our bakery");
//   }

//    else{

//    	document.write("We are sorry" +  " " + search + " " + "is not avaiable in our bakery");
//    }
         

//             Assisgnment 4  (line 524-)

// 1)
//  var txt="Hyderabad ";
//  var res= txt.replace("Hyderabad ", "Islamabad");
//  document.write("City:" +" " + txt + "<br>"+
//  "After replacement:"+" "+ res);

//  2)
//  var str ="472";
//  var num = Number("472");
//  document.write("Value:" +" " + num  +"<br>"+
//                  "Type:" +" " + "string"   + "<br>" +
//                  "Value:" +" " + str   + "<br>" +
//                    "Type:"+" " + "number"    + "<br>" );

// 3)

// var password = prompt("Enter Your Password");
// var firstChar = password.slice(0,1);

// document.write(" Entered Password : " + password + "<br>");
// if (password.length >= 8) {

//     if (firstChar >= 0 && firstChar <= 9) {
//         document.write("Password can not starts with number");
//         document.write("<br>Enter a valid password");                
//     }
   
//     else{
//         var strmatch = password.match(/[a-z]/g);
//         var nummatch= password.match(/[0-9]/g);

//         if(strmatch && nummatch) {
//             document.write("Password matched");
//         }
//         else{
//             document.write("Enter a valid password");
//         }   
//     }
    
// }

// else{
//     document("Your Password Must be 8 Characters long");
// }

// 5)
// var num = prompt("enter any positive integer number");
// var roud = Math.round(num);
// var floor= Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("number:" +" "+  num +"<br>"+
//                "round off: " + " " +roud+ "<br>"+
//                 "floor value:" + " " + floor +"<br>"+
//                 "ceil value:" + " " + ceil);

// 6)
//  var diceRoll= Math.floor(Math.random()*6)+1;
//  document.write("random dice value :"+" "+diceRoll);

// 7)
// var txt ="the quick brown fox jumps over the lazy dog ";
//   document.write("Text:"+" "+txt+"<br>");
//   document.write("There are"+" "+ txt.match(/the/g).length+" "+"occurance(s) of word 'the' ");

  

// 12)

// var a=new Date();
// var theDate=a.getDate();
// if(theDate<16){
//   document.write("First fifteen days of the month");
//   }
//   else{
//     document.write("Last days of month")
//   }

// 13)

// var d = new Date();
// var dmili= d.getTime();
// var diff= (dmili/1000/60);
// document.write("Current Date"+d+"<br>");
// document.write("Elapsed milliseconds since January 1, 1970: "+" "+dmili+"<br>");
// document.write("Elapsed minutes since january 1, 1970:"+" "+diff);

// 14)

// var event= new Date();
//  document.write("Current Date is:"+" "+event+"<br>");
//  event.setHours(9);
//  document.write("1 houes ago, It was"+" "+event);

// 15)

// var age = prompt("Enter your age");
// document.write("Your age is:"+" "+age +"<br>");
// var eve = new Date();
// var yearIs = eve.getFullYear() - age;
// document.write("Your Birth Year is:"+ " " + yearIs);

//    Assisgnment 5

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
