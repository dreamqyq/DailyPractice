let divs = document.getElementsByTagName('div')
let n = 0
// 事件捕获
for(let i = 0;i<divs.length;i++){
  divs[i].addEventListener('click',function(){
    setTimeout(function(){
      divs[i].classList.add('active')
    },n * 500)
    n ++
  },true)
}
// 事件冒泡
for(let i = 0;i<divs.length;i++){
  divs[i].addEventListener('click',function(){
    setTimeout(function(){
      divs[i].classList.remove('active') 
    },n * 500)
    n ++
  })
}
