const menus=document.querySelector('.nav ul');
const header= document.querySelector('header');
const menuBtn= document.querySelector('.menu-btn');
const closeBTN = document.querySelector('.close-btn');


// add funtionality of menu button
menuBtn.addEventListener('click',()=>{
  menus.classList.add("display")
});

closeBTN.addEventListener('click',()=>{
  menus.classList.remove("closeBTN")
});


 /*===== scroll sticky navbar start====*/
window.addEventListener('scroll',()=>{
  if (document.documentElement.scrollTop>20) {
    header.classList.add('sticky');

  }else {
    header.classList.remove('sticky')
  }
})
/*====== scroll sticky navbar close=====*/

/*====== static====counteres numbers===start=====*/

const counterEl= document.querySelectorAll('.numbers');
counterEl.forEach((counters)=>{
  counters.textContent=0;
  incrementCounters();
  function  incrementCounters(){
    let currentNum= +counters.textContent;

    const dataCeil= counters.getAttribute("data-ceil");
    const increament= dataCeil / 25;
    currentNum=Math.ceil(currentNum + increament);
    if (currentNum < dataCeil) {
      counters.textContent=currentNum;
      setTimeout(incrementCounters, 70);
    } else{
      counters.textContent=dataCeil;
    }
  }
})
/*====== static====counteres numbers===close=====*/


