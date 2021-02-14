
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
         