let username = document.querySelector('#username')
let Adress = document.querySelector('#adress')
let Email = document.querySelector('#email')
let password = document.querySelector('#password')
let comment = document.querySelector('#comment')
let bout = document.querySelector('.bout')
const sendbtn = document.querySelector('#send')

sendbtn.addEventListener('click', function () {
    if (username.value === "" || password.value === "") {
        alert('please fill in')
    }
})
var rules = {
username:/^[a-zA-Z]{5,}$/,
Adress:  /{[a-z]{2,18}$/,
Email  : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
passwrd :  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
}
username.addEventListener('keyup', function(e){
    let txt = e.target
    let inputname = e.target.name
    validation(txt,inputname)
})



Adress.addEventListener('keyup', function(e){
    let txt = e.target
    let inputname = e.target.name
    validation(txt,inputname)
})

Email.addEventListener('keyup', function(e){
    let txt = e.target
    let inputname = e.target.name
    validation(txt,inputname)
})

password.addEventListener('keyup', function(e){
    let txt = e.target
    let inputname = e.target.name
    validation(txt,inputname)
})

function validation(x,y){
    var value = x.value
    var isValid = rules[y].test(value)
    if(isValid){
        x.style.background = 'green'
    }
    else{
        x.style.background = 'red'  
    }
}