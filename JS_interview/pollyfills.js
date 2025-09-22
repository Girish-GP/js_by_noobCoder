Array.prototype.map = null;
Array.prototype.filter = null;
Array.prototype.reduce = null;


//Polyfill for map
//takes one array and a transformation fnc and returns new array

const temp = [1,2,3]
if(!Array.prototype.map){
   Array.prototype.map = function(fnc){
       const newArr = [];
           for(let i=0;i<this.length;i++){
                   newArr.push(fnc(this[i]))
                       }
                           return newArr
                              }
                              }
                              const mapped = temp?.map(item=> item*item);
                              console.log(mapped);


                              //Pollyfill for filter
                              const temp2 = [1,2,3,4,5,6]
                              if(!Array.prototype.filter){
                                  Array.prototype.filter = function(fnc){
                                          const newArr = [];
                                                  for(let i=0;i<this.length;i++){
                                                            if (fnc(this[i])) newArr.push(this[i])
                                                                    }
                                                                            return newArr
                                                                                }
                                                                                }
                                                                                const filtered = temp2?.filter(item => item%2 === 0);
                                                                                console.log(filtered)