const obj = {
    _email : 'sjjnsjdv@malsa.com',

    get email(){
        return this._email
    },
    
    set email(value){
        this._email = value
    }

}

const tea = Object.create(obj) //factory function

console.log(tea._email)//sjjnsjdv@malsa.com
console.log(tea.email)//sjjnsjdv@malsa.com
