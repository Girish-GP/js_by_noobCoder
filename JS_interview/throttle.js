//function to throttle
function logScrollPosition(scrollY){
    console.log(`Current Postion of ScrollY: ${scrollY}`)
}
// throttle function
function throttleFnc(fnc, timer) {
 let lastFncCall = 0;
 let trailingFncCall = null;
 return function(...args){
  let now = Date.now();
  let remaining = timer - (now-lastFncCall);
  if(remaining <=0){
    if(trailingFncCall){
      clearTimeout(trailingFncCall);
      trailingFncCall = null;
    }
    fnc.apply(this,args);
    lastFncCall = now;
  } else if(!trailingFncCall){
    trailingFncCall = setTimeout(()=>{
      fnc.apply(this,args);
      lastFncCall = Date.now();
      trailingFncCall = null
    },remaining)
  }
 }
}


//throttle ref
const throttleRef = throttleFnc(logScrollPosition,2000);

//execution call
window.addEventListener('scroll',(e)=>{
    throttleRef(e?.currentTarget?.scrollY)
})