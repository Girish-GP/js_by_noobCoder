/*
Implement a deep clone function.
 - How would you handle nested objects, arrays, and dates?
 - How would you deal with circular references?

 we want to create deep clone function that handles
 1] Primitive values
 2] Nested objects and arrays
 3] Special objects like Date and RegExp
 4] Collections like Set and Map
 5] Circular references
 6] Symbols and non enumerable properties
 7] Typed Arrays like Int8Array & Float32Array

 const employee = {
 name:"XYZ",
 reporting: manager
 }

 const manager = {
  employees : [employee]
 }

 const
*/
function deepCloned(obj,hash = new WeakMap()){
 //Here in below line in deep cloning our goal is to track objects which are already cloned
 //we will never use primitive values because only objects causes circular references and weakMap only allows objects as keys and holds weak reference allowing GC

 //handling primitive values
//  Numbers, strings, booleans, null, undefined, and symbols are immutable.
// No cloning is needed; return as-is.
 if(obj === null || typeof obj !== 'object') return obj; // explicitly check for null as its type is obejct


//for tracking circular reference
if (hash.has(obj)) return hash.get(obj);

//for handling special types of object
if (obj instanceof Date) return new Date(obj);
if (obj instanceof RegExp) return new RegExp(obj);

//handling Map
//This checks whether the current object we’re trying to clone is a Map.
// instanceof ensures we treat Maps differently from normal objects or arrays.
 if (obj instanceof Map) {
    //Create a new empty Map which will be our cloned copy.
    let clone = new Map();
    //handling circular references.
    hash.set(obj, clone);
    //Iterates over each entry of the original Map.Each entry is a [key, value] pair.// entries(): [['x', 10], ['y', { num: 20 }]]
    for (const [key, value] of obj.entries()) {
    //deepCloneAdvanced('x', hash) → 'x' ; deepCloneAdvanced(10, hash) → 10 ; clone.set('x', 10)
      clone.set(deepCloneAdvanced(key, hash), deepCloneAdvanced(value, hash));
    }
    return clone;
  }


  //set
  //check whether the obj is a Set reference
  if (obj instanceof Set) {
    clone = new Set(); // create a copy for Set
    hash.set(obj, clone); // set in hash for handling circular references 
    for (const value of obj.values()) { // this will give each value
      clone.add(deepCloneAdvanced(value, hash)); // add the values in the clone set after deepcloning
    }
    return clone;
  }

  //Array buffers --> array like objects that stores huge binary data Int8Array
  //Checks if the object is a view over an ArrayBuffer.
  // All TypedArrays (like Int8Array, Float32Array, Uint16Array, etc.) are views over binary buffers.

    if (ArrayBuffer.isView(obj)) {
    // Handles TypedArrays like Int8Array, Float32Array
    return new obj.constructor(obj); //obj.constructor---> give class with which the obj was created new Class(obj) --> returns a new object with the help of the same class and with the obj values
  }

  // Handle arrays or plain objects
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  clone = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  hash.set(obj, clone);

// Reflect.ownKeys(descriptors) returns all keys — including symbol keys and non-enumerable ones. ['name','age',[sym]]
  Reflect.ownKeys(descriptors).forEach((key) => {
  const desc = descriptors[key]; // { value: 'Girish', writable: false, enumerable: false, configurable: true}
  if ('value' in desc) { // check whether it has value key
    desc.value = deepCloneAdvanced(desc.value, hash); // deep clone the value
  }
  Object.defineProperty(clone, key, desc); // set key:value pair in the clone object
});

return clone;
 
}