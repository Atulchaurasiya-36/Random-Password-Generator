
let passwordbox=document.getElementById("password")
const length=10;
//let button=document.querySelector("button")

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbol="@#%^&*()-+=|\?/><";
const allchar=upperCase+lowerCase+number+symbol


function generatePassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()* upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()* lowerCase.length)]
    password+=number[Math.floor(Math.random()* number.length)]
    password+=symbol[Math.floor(Math.random()* symbol.length)]
    while(length>password.length){
        password+=allchar[Math.floor(Math.random()*allchar.length)]
    
    }
    passwordbox.value=password

}

function copyPassword(){
    passwordbox.select()
    document.execCommand("copy")
}
