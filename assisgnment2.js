
//  1)
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
//  }

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
