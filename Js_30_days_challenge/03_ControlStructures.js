//1
function checkCondition(num){
    if(num === 0){
       return console.log("Zero")
    }
    if(num > 0){
        console.log("positive")
    } else {
        console.log("negative")
    }
}
checkCondition(0)
checkCondition(1)
checkCondition(-3)

//2
function eligibility(age){
    if(age >= 18){
        console.log("Person can vote")
    } else {
        console.log("Person cannot vote")
    }
}
eligibility(18)
eligibility(13)

//3
function largestOfthree(num1,num2,num3){
  let largest = num1;
  if(num2>largest){
    largest = num2;
  }
  if(num3 >largest){
    largest = num3;
  }
  return largest
}
function largestOfthree2(num1,num2,num3){
  if(num1 >= num2 && num1 >= num3){
    return num1
  } else if(num2 >= num1 && num2 >= num3){
    return num2
  } else {
    return num3
  }
}
console.log(largestOfthree(45,2,34))
console.log(largestOfthree2(544,211,346))

//4
function checkDay(num){
    switch(num){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day");
            break;
    }
}
checkDay('dd')
checkDay(7)
checkDay(4)
checkDay(2)
checkDay(3)
checkDay(1)
checkDay(5)
checkDay(6)


//5
function assignGrade(score){
    switch(true){
        case (score>85):
            console.log("Grade A");
            break;
        case ((71 <= score) &&(score<=85)):
            console.log("Grade B");
            break;
        case ((56 <= score) &&(score<=70)):
            console.log("Grade C");
            break;
        case ((41 <= score) &&(score<=55)):
            console.log("Grade D");
            break;
        case ((26 <= score) &&(score<=40)):
            console.log("Grade E");
            break;
        case ((0 <= score) &&(score<=25)):
            console.log("Grade F");
            break;
        default:
            console.log("Invalid Score");
            break;
    }
}
assignGrade("dsfsdf");
assignGrade(67);
assignGrade(89);


//6
function oddEven(num){
    if(isNaN(num)) return console.log("Invalid number")
    num%2 === 0 ? console.log("Even"): console.log("Odd");
}
oddEven("df");
oddEven(3);
oddEven(66);

//7
function isLeapYear(year){
    let leapYear = false;
    if((year%4===0) && (!(year%100===0) ||(year%400 ===0))){
        leapYear = true;
    }
   return leapYear;
}
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(2023)); // Output: false