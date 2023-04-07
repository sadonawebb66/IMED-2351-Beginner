const shadesFace=document.querySelector('.closed');
const pukeFace=document.querySelector('.open');
//add event listener
shadesFace.addEventListener('click', ()=>{
    if(pukeFace.classList.contains('open')){
        pukeFace.classList.add('active');
        shadesFace.classList.remove('active');
        
    }
});
pukeFace.addEventListener('click',()=>{
    if(shadesFace.classList.contains('closed')){
        shadesFace.classList.add('active');
        pukeFace.classList.remove('active');

    }
});