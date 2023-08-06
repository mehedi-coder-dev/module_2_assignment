// 1) DOM Manipulation
let btn1 = document.querySelector('.btn1')
let display1 = document.querySelector('.display1')
btn1.addEventListener('click', ()=>{
  display1.textContent = 'This is a change content';
  display1.style.color = 'red'
})

// 2) Click Counter
let btn2 = document.querySelector('.btn2')
let display2 = document.querySelector('.display2')
let count = 0;
btn2.addEventListener('click',()=>{
   count = count + 1;
   display2.textContent = count
})

//3) Image Switcher

let img1 = document.querySelector('.img1')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')

btn3.addEventListener('click',()=>{
  img1.src = './image1.jpg'
})
btn4.addEventListener('click',()=>{
  img1.src = './image2.jpg'
})
// 4) Ajax

let dataDisplay = document.querySelector('.dataDisplay')
let btn5 = document.querySelector('.btn5')

btn5.addEventListener('click',()=>{
  async function dataFech(){
    let respons = await fetch('https://jsonplaceholder.typicode.com/posts')
    let jsonData = await respons.json();
    jsonData.forEach(data => {
     dataDisplay.innerHTML += `${data.id}. ${data.title}<br>`
    });
   }
   
   dataFech()
})