/*let items = document.querySelectorAll('.projects-inner-cont .project');
    let next = document.querySelector('.proj-btn-left');
    let prev = document.querySelector('.proj-btn-right');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }

    */


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
        
        items[active - 1 >= 0 ? active - 1 : items.length-1].style.transform = `none`;
        items[active - 1 >= 0 ? active - 1 : items.length-1].style.zIndex = 1;
        items[active - 1 >= 0 ? active - 1 : items.length-1].style.filter = 'none';
        items[active - 1 >= 0 ? active - 1 : items.length-1].style.opacity = 1;
        items[active - 1 >= 0 ? active - 1 : items.length-1].style.zIndex = 15;
        items[active - 1 >= 0 ? active - 1 : items.length-1].style.left = '5vw';
        items[active - 1 >= 0 ? active - 1 : items.length-1].style.transform = `translate(-100%)`;

        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        items[active].style.left = '10vw';
        items[active].style.zIndex = 15;

        items[active + 1 < items.length ? active + 1 : 0].style.transform = `none`;
        items[active + 1 < items.length ? active + 1 : 0].style.zIndex = 1;
        items[active + 1 < items.length ? active + 1 : 0].style.filter = 'none';
        items[active + 1 < items.length ? active + 1 : 0].style.opacity = 1;
        items[active + 1 < items.length ? active + 1 : 0].style.zIndex = 15;
        items[active + 1 < items.length ? active + 1 : 0].style.left = '95vw';
        
      


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

    