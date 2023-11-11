// const instaUser = new Object(); // Singleton object 
// console.log(instaUser)

const instaUser = {
    id: 1,
    email: "xyz@gmail.com",
    isLoggedIn: false,

}
instaUser.name = 'ggp'

// console.log(instaUser);

const fbUser = {
    username : {
        firstName : 'ggp',
        lastName : 'nhj' 
    },
    email : "xyt@ndnsjn.com"
}
// console.log(fbUser?.username); // Optioning channing ? used while writing code for data form APIs
// console.log(fbUser?.username?.firstName);

const obj1 ={
    a: '1',
    b: '2',
}
const obj2 ={
    c: '1',
    d: '2',
}

//Object.assign({}-target obj , ...{} - any number of source arrays)
// console.log(Object.assign({},obj1,obj2))

const obj3 = { ...obj1 , ...obj2}
// console.log(obj3)

console.log(Object.keys(instaUser)) //[ 'id', 'email', 'isLoggedIn', 'name' ]
console.log(Object.values(instaUser))//[ 1, 'xyz@gmail.com', false, 'ggp' ]
console.log(Object.entries(instaUser))//[[ 'id', 1 ],[ 'email', 'xyz@gmail.com' ],[ 'isLoggedIn', false ],[ 'name', 'ggp' ]]


//When Data comes form backend
const dataObj = [
    {
        id: 1,
        name: 'ggp',
        age: 25
    },
    {
        id: 2,
        name: 'sga',
        age: 5
    },
    {
        id: 3,
        name: 'gsfsfgp',
        age: 78
    },
]

console.log(dataObj[1].age)