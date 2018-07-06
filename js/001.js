var navBar = document.getElementById('navBar');



window.onscroll = function(){

    changeNav();
    
}

function changeNav(){
    if (window.scrollY > 0) {
        navBar.classList.add('active');
    }
    else{
        navBar.classList.remove('active');
    } 
}