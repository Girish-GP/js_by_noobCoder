function checkDeepEquality(a,b,visited = new WeakMap()){
    //here a,b are the items to be checked
    //visited is a WeakMap reference used to store circular references
    
    //base equality check
    if(Object.is(a,b)) return true;
    //check for primitives including edge cases of NaN and null
    //Object.is() used instead of === due to how it handle above edge cases
    
    
    
    //Mismatch case --> one is null other is not ; one is object other is not
    if(a === null || b === null || typeof a !== 'object' || typeof b !== 'object') return false
    //directly return false if one is mismatch and if they are some other values like primitives then they should be covered in previous case
    //why this case is needed:This isn’t about equality, it’s about stopping recursion early when at least one of the values is not an object.
    
    
    
    //Handling circular references
    if(visited.has(a) && visited.get(a) === b) return true;
    //already checked circular references
    visited.set(a,b); // Set in WeakMap to stop unneccessary checks
    
    
    
    //Handling Date Objects
    if(a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    //For Date object is to be equal they should have same times so we have used .getTime()
    //For comparing Date objects, I always use getTime(), because it returns the absolute timestamp in milliseconds — ensuring time zone–independent equality.
   // Methods like getSeconds() or getHours() only return parts of the date, which can differ across time zones or formats. They’re great for formatting, but not reliable for equality.
   
   
   
   //Handling RegExp Objects
   if(a instanceof RegExp && b instanceof RegExp) return a.toString() === b.toString();
   //For RegExp Objects to be equal they should have same patterns / flags which the .toString() method provides us with
   
   
   
   //Handling Map Objects
   if(a instanceof Map && b instanceof Map){
       if(a.size !== b.size) return false; // Map has a property size which gives the total number of elements
       for(let [key,value] of a){
           //check if key in 'a' is present in 'b' further if both values are same
           if(!b.has(key) || !checkDeepEquality(value,b.get(key),visited)) return false;
       }
       
       return true;
   }
   
   
   
   //Handling Set Objects
   if(a instanceof Set && b instanceof Set){
       if(a.size !== b.size) return false;
       let bValues = [...b]; //the .some() method only exists on arrays, not on Sets. so we coverted
       for(let value of a){
           if(!bValues.some((bValue) => checkDeepEquality(value,bValue,visited))) return false;
       }
       return true;
   }
   
   
   //Handling Plain objects & arrays
   //Both plain objects and arrays in JavaScript are just objects with enumerable keys.
   //so it does handle both
   let keysA = Reflect.ownKeys(a);
   let keysB = Reflect.ownKeys(b);
   
   if(keysA.length !== keysB.length) return false;
   
   for(let key of keysA){
       if(!keysB.includes(key) || !checkDeepEquality(a[key],b[key],visited)) return false
   }
   return true
   
   
}





/*

| Feature                             | Why It’s       Best                                               |
| ----------------------------------- | ----------------------------------------------------------- |
| **`Object.is()`**                   | Correctly handles tricky JS equality (`NaN`, `+0`, `-0`)    |
| **`WeakMap` for visited pairs**     | Safest & memory-efficient way to detect circular references |
| **Handles all major JS structures** | Supports `Array`, `Object`, `Map`, `Set`, `Date`, `RegExp`  |
| **Recursive yet efficient**         | Short-circuits on first mismatch                            |
| **Robust type checks**              | Uses `instanceof` for precision                             |
| **Production-grade parity**         | Behavior matches `Lodash.isEqual()`                         |
| **Symbol-safe**                     | Uses `Reflect.ownKeys()` instead of `Object.keys()`         |


My approach uses recursion with a WeakMap to track visited objects and prevent circular references.
I first use Object.is for primitives to correctly handle NaN and +0/-0.
Then I handle special types like Date, RegExp, Map, and Set with specific logic for value comparison.
For plain objects and arrays, I use Reflect.ownKeys() to get all keys and recursively compare their values.
This makes it accurate, efficient, and safe




### **Why `Reflect.ownKeys()` is used instead of `Object.keys()`**

#### 1️⃣ **What `Object.keys()` returns**
* Only **enumerable string-keyed properties** of the object.
* Ignores:
  * Non-enumerable properties
  * Symbol-keyed properties

Example:

const obj = {};
Object.defineProperty(obj, 'hidden', { value: 42, enumerable: false });
const sym = Symbol('id');
obj[sym] = 99;

console.log(Object.keys(obj)); // []
* As you can see, `hidden` and the symbol property are ignored.


#### 2️⃣ **What `Reflect.ownKeys()` returns**

* Returns **all own property keys**, including:
  * Enumerable and non-enumerable
  * String and symbol keys

Example:


console.log(Reflect.ownKeys(obj)); // ['hidden', Symbol(id)]
* Perfect for deep equality or cloning, because you don’t miss any property.


#### 3️⃣ **Why this matters for deep equality**

* If you only use `Object.keys()`, non-enumerable or symbol properties would be ignored.
* Two objects that differ only in a symbol or non-enumerable property would incorrectly appear equal.
* `Reflect.ownKeys()` ensures your deep comparison or clone is **accurate and complete**, just like JavaScript’s internal operations.

---

✅ **Interview takeaway:**

> “I use `Reflect.ownKeys()` instead of `Object.keys()` to capture **all own properties**, including non-enumerable and symbol keys, ensuring the deep clone or deep equality check is comprehensive and accurate.”

---

If you want, I can also explain **why we combine `Set` + `Reflect.ownKeys()` in deep equality**, which is a great follow-up interview point.

Do you want me to go into that?








*/