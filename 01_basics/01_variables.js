const accountId = 12233;
let accountEmail = "test@ril.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountSate;
// accountId = 22211;

/*
  Prefer not to use var 
  Because of issue in block scope & functional scope
*/
//block scope
{   
    let accountEmail = "test2@gmail";
    //here accountEmail value var is changed only for blocked scope accountEmail and not for global scope
    //here a new memory is assigned to accountEmail and a value is stored there
    accountPassword = "223";
    console.log(accountId,accountEmail,accountPassword,accountCity,accountSate)
}

{
    accountEmail = "change@ril.com"
    //here accountEmail value is changed for global ref irrespective of it being defined with -- let 
    //As it did not found a new declaration it pointed to memory loc in the outer scope 
    console.log(accountEmail)
    var accountPassword = "xxx";
}



accountCity = "mumbai";

console.log(accountId,accountEmail,accountPassword,accountCity,accountSate)
