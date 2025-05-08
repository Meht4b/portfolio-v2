
function loadShow(items,active){
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

let next1 = document.querySelector('.proj-btn-right-1');
let prev1 = document.querySelector('.proj-btn-left-1');
let active1 = 0;
let items1 = document.querySelectorAll('.projects-inner-cont-1 .project');

loadShow(items1, active1);
next1.onclick = function() {
    active1 = active1 + 1 < items1.length ? active1 + 1 : 0;
    loadShow(items1, active1);
}
prev1.onclick = function() {
    active1 = active1 - 1 >= 0 ? active1 - 1 : items1.length - 1;
    loadShow(items1, active1);
}

let next2 = document.querySelector('.proj-btn-right-2');
let prev2 = document.querySelector('.proj-btn-left-2');
let active2 = 0;
let items2 = document.querySelectorAll('.projects-inner-cont-2 .project');

loadShow(items2, active2);
next2.onclick = function() {
    active2 = active2 + 1 < items2.length ? active2 + 1 : 0;
    loadShow(items2, active2);
}
prev2.onclick = function() {
    active2 = active2 - 1 >= 0 ? active2 - 1 : items2.length - 1;
    loadShow(items2, active2);
}

let next3 = document.querySelector('.proj-btn-right-3');
let prev3 = document.querySelector('.proj-btn-left-3');
let active3 = 0;
let items3 = document.querySelectorAll('.projects-inner-cont-3 .project');

loadShow(items3, active3);
next3.onclick = function() {
    active3 = active3 + 1 < items3.length ? active3 + 1 : 0;
    loadShow(items3, active3);
}
prev3.onclick = function() {
    active3 = active3 - 1 >= 0 ? active3 - 1 : items3.length - 1;
    loadShow(items3, active3);
}