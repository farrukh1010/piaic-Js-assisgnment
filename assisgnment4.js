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

// 8)
 
    // var num = 23;
    // var reverse = 0;
    // document.write("input" +"</br>" + num + "<br>");
    // while(num != 0){
    //     reverse = (reverse*10)+(num%10);
    //     num = parseInt(num/10)
    // }
    // while(reverse != 0){
    //     switch(reverse%10){
    //         case 0:
    //             document.write("zero");
    //             break;
    //             case 1:
    //             document.write("one");
    //             break;
    //             case 2:
    //             document.write("two");
    //             break;
    //             case 3:
    //             document.write("three");
    //             break;
    //             case 4:
    //             document.write("four");
    //             break;
    //             case 5:
    //             document.write("five");
    //             break;
    //             case 6:
    //             document.write("six");
    //             break;
    //             case 7:
    //             document.write("seven");
    //             break;
    //             case 8:
    //             document.write("eight");
    //             break;
    //             case 9:
    //             document.write("nine");
    //             break;
    //     }
    //     reverse = parseInt(reverse/10)
    // }

// 9)
   
    //  document.write("Output:"+"</br>"+"<p><strong><em>"+"only print this"+"</strong></em></p>")

  

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