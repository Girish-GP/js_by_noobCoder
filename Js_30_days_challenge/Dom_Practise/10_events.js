//1
const para = document?.getElementById('first-para')
function updateFirstPara(){
    para.textContent = 'Hi bro first para text changed.'
}

//2
function toggleImgVisisbility(){
    const img = document?.getElementById('img-visibility');
    if(img?.classList?.value?.includes('d-none')){
        img.classList.remove('d-none');
    } else {
        img.classList.add('d-none');
    }
}

//3
function changeBGcolor(){
    const changeBg = document?.getElementById('change-bgColor');
    changeBg.style.background = 'red'
}

//4
function resetBGcolor(){
    const changeBg = document?.getElementById('change-bgColor');
    changeBg.style.background = 'white'
}

//5
function inputChangeLogKey(event){
    console.log(`${event?.key} is pressed.`)
}

//6
function inputChangeLogValue(event){
    console.log(`Input value is ${event?.target?.value}`)
}

//7
document.getElementById('my-form').addEventListener('submit',function(event){
   event.preventDefault();
   console.log(document?.getElementById('form-input')?.value)
})

function logSelected(event){
    console.log(event.target.value)
}
