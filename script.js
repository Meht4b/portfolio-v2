
let items = document.querySelectorAll('.projects-inner-cont .project');
let next = document.querySelector('.proj-btn-right');
let prev = document.querySelector('.proj-btn-left');

let active = 0;
function loadShow(){
    let stt = 0;

    items.forEach(item => {
        item.style.transform = 'none';
        item.style.zIndex = -1;
        item.style.filter = 'none';
        item.style.opacity = 0;
        item.style.left = '0';
    });

    items[active - 2 >= 0 ? active - 2 : items.length-2].style.transform = `none`;
    items[active - 2 >= 0 ? active - 2 : items.length-2].style.zIndex = 1;
    items[active - 2 >= 0 ? active - 2 : items.length-2].style.filter = 'none';  
    items[active - 2 >= 0 ? active - 2 : items.length-2].style.zIndex = 15;
    items[active - 2 >= 0 ? active - 2 : items.length-2].style.left = '5vw';
    items[active - 2 >= 0 ? active - 2 : items.length-2].style.transform = `translate(-200%)`;
    
    
    items[active - 1 >= 0 ? active - 1 : items.length-1].style.transform = `none`;
    items[active - 1 >= 0 ? active - 1 : items.length-1].style.zIndex = 1;
    items[active - 1 >= 0 ? active - 1 : items.length-1].style.filter = 'none';
    items[active - 1 >= 0 ? active - 1 : items.length-1].style.zIndex = 15;
    items[active - 1 >= 0 ? active - 1 : items.length-1].style.left = '5vw';
    items[active - 1 >= 0 ? active - 1 : items.length-1].style.transform = `translate(-100%)`;
    items[active - 1 >= 0 ? active - 1 : items.length-1].style.opacity = 1;

    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    
    items[active].style.left = '10vw';
    items[active].style.zIndex = 15;
    items[active].style.opacity = 1;

    items[active + 1 < items.length ? active + 1 : active + 1 - items.length].style.transform = `none`;
    items[active + 1 < items.length ? active + 1 : active + 1 - items.length].style.zIndex = 1;
    items[active + 1 < items.length ? active + 1 : active + 1 - items.length].style.filter = 'none';
    items[active + 1 < items.length ? active + 1 : active + 1 - items.length].style.zIndex = 15;
    items[active + 1 < items.length ? active + 1 : active + 1 - items.length].style.left = '95vw';
    items[active + 1 < items.length ? active + 1 : active + 1 - items.length].style.opacity = 1;

    

    items[active + 2 < items.length ? active + 2 : active + 2 - items.length].style.transform = `none`;
    items[active + 2 < items.length ? active + 2 : active + 2 - items.length].style.zIndex = 1;
    items[active + 2 < items.length ? active + 2 : active + 2 - items.length].style.filter = 'none';
    items[active + 2 < items.length ? active + 2 : active + 2 - items.length].style.zIndex = 15;
    items[active + 2 < items.length ? active + 2 : active + 2 - items.length].style.left = '195vw';
    
}

loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : 0;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : items.length-1;
    loadShow();
}

