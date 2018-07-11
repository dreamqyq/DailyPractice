var items = document.querySelectorAll('.item')
var slideBox = document.querySelector('.banner')
var index = 1
var timer = null


slidePic();

slideBox.onmouseover = function() {
  clearInterval(timer)
}
slideBox.onmouseleave = function() {
  slidePic();
}

function slidePic() {
  timer = window.setInterval(() => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('hidden')
    }

    if (index >= items.length) {
      index = 0
    }
    items[index].classList.remove('hidden')
    console.log(index)
    index++
  }, 1500)
}