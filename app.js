let select=document.querySelectorAll('.currency')
let btn=document.getElementById("btn")
let input=document.getElementById("input")
let result1=document.getElementById("result")

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))

function displayDropDown(res){
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let opt=`<option values="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
    }
}
// result1.addEventListener('input',()=>{
//     let curr1=select[0].value
//     let curr2=select[1].value
//     let inputval=result1.value
//     if(curr1===curr2){
//         alert('Choose different currencies')
//     }
//     else
//         convert1(curr1,curr2,inputval)
// })
// input.addEventListener('input',()=>{ // this is for real time changes when typing
//     let curr1=select[0].value
//     let curr2=select[1].value
//     let inputval=input.value
//     if(curr1===curr2){
//         alert('Choose different currencies')
//     }
//     else
//         convert(curr1,curr2,inputval)
// })
btn.addEventListener('click',()=>{
    let curr1=select[0].value
    let curr2=select[1].value
    let inputval=input.value
    if(curr1===curr2){
        alert('Choose different currencies')
    }
    else
        convert(curr1,curr2,inputval)
})

let convert=(curr1,curr2,inputval)=>{
  fetch(`https://api.frankfurter.dev/v1/latest?base=${curr1}&symbols=${curr2}`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log()
        document.getElementById('result').value=Object.values(data.rates)[0]*inputval
    });
}
let convert1=(curr1,curr2,inputval)=>{
  fetch(`https://api.frankfurter.dev/v1/latest?base=${curr2}&symbols=${curr1}`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log()
        document.getElementById('input').value=Object.values(data.rates)[0]*inputval
    });
}