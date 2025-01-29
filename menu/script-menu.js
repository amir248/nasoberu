window.addEventListener('scroll', menU);
window.addEventListener('DOMContentLoaded',menU);
function menU(){
  if(document.querySelector('.burg')){
    var count = +0;
    document.querySelector('.burg').addEventListener('click',opMenu);
    
    function opMenu(){
            count++;
            // console.log(count);
            document.getElementsByTagName('body')[0].style.cssText=`overflow:auto`;
        if(count==1){
            document.querySelector("#offmenu").classList.add("openmenu");
            document.getElementsByTagName('body')[0].style.cssText=`overflow:hidden`;
          document.querySelector('#offmenu').style.cssText=`
            width:0;
            transition: ease 2s;
            `;
          setTimeout(()=>{
            document.querySelector('#offmenu').style.cssText=`
            width:100%;
            opacity:1;
            font-size:20px;
            transition: ease 2s;
            `;
          },100);
        }else{
              // console.log(count + " else !!!!");
              
          document.querySelector('#offmenu').style.cssText=`
            width:0%;
            opacity:0;
            font-size:0px;
            transition: ease 2s;
            `;
            // setTimeout(()=>{
            //   closeMenuoK();
            //   document.querySelector("#offmenu").classList.remove('openmenu');
            // },1000);
            count =0;
            // console.log("Menu close!");
        }
    }
  }else{
    // console.log('burgeraNet');
    console.log(count);
  }
}
function CloseBurger(){
  document.querySelector('#offmenu').style.cssText=`
            width:00%;
            opacity:0;
            font-size:0px;
            transition: ease 2s;
            `;
  document.querySelector("#offmenu").classList.remove('openmenu');
  document.getElementsByTagName('body')[0].style.cssText=`overflow:auto`;
  count=0;
}
function closeMenuoK(){
  document.querySelector('#offmenu').style.cssText=`
    width:0;
    transition: ease 2s;
  `;
  setTimeout(()=>{
    document.querySelector("#offmenu").classList.remove('openmenu');
    count=0;
},300);
}
// if(document.querySelector('.burg')){
//   document.querySelector('.burg').addEventListener('dblclick', function(){
//     window.location.href = 'https://nasobe.ru';
//   });
//
// }else{
//   console.log('Бургера нет!');
// }
document.querySelector('#offmenu').addEventListener('click',opMenu);