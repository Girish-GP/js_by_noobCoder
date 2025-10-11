function checkBrackets(brackets){
    let stack = [];
    let validCharacters = ['{','[','(','<','>',')','}',']'];
    let bracketObj = {
        ']':'[',
        '}':'{',
        ')':'(',
        '>':'<'
    }

    for (let char of brackets){
      if(!validCharacters?.includes(char)){
        return false;
      }
      if(bracketObj[char]){
         if(bracketObj[char] !== stack[stack?.length-1]){
            return false;
         }
         stack?.pop();
      } else {
        stack?.push(char);
      }
    }
    return stack?.length === 0;
}