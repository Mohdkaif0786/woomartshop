let menueBar=document.querySelector('.mobile-menue .menue');
let overlayElm=document.querySelector('.overlay');
let menue_sidebarElm=document.querySelector('.menue-container');
let item=document.querySelectorAll('.item');

console.log(menue_sidebarElm);

function menueBarHandler(){
  overlayElm.classList.add('d-block');
   menue_sidebarElm.style="left:0px;";
   menue_sidebarElm.style.position="fixed";
   document.body.style="overlay-y:hidden";
   console.log(item);
}

function hideMenueSlideHander(){
    overlayElm.classList.remove('d-block');
   menue_sidebarElm.style="left:-360px;";
   document.body.style="overlay-y:hidden";
}

function itemContentHide(){
    let item_contentsElm=document.querySelectorAll('.item-content');
    item_contentsElm.forEach(itemCont=>{
        itemCont.classList.add('d-none');

    })
}

function itemsActiveRemove(){
    item.forEach(item=>{
        item.firstElementChild.classList.remove('active-item');
        console.log(item.firstElementChild);
    })
}


item.forEach(item=>{
    item.addEventListener('click',(e)=>{
        itemContentHide();
        itemsActiveRemove();
        // return;
        if(e.target.innerHTML=="categories"){
            e.target.nextElementSibling.classList.remove('d-none');
            e.target.nextElementSibling.classList.add('d-block');
            e.target.classList.add('active-item');
        }
        else{
            e.target.nextElementSibling.classList.remove('d-none');
            e.target.nextElementSibling.classList.add('d-block');
            e.target.classList.add('active-item');
        }
    })


})


menueBar.addEventListener('click',menueBarHandler);
overlayElm.addEventListener('click',hideMenueSlideHander);