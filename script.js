const showAllBtn = document.querySelector('.show_all');
const showImg = document.querySelector('.show_img');


const swiper = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },

  
  });

showAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('hide');
        
    });
    if (!document.querySelectorAll('.target')[0].classList.contains('hide')){
        showAllBtn.innerHTML = 'Скрыть';
        showImg.style.transform = 'rotate(180deg)';

    }
    else{
        showAllBtn.innerHTML = 'Показать все';
        showImg.style.transform = 'rotate(0deg)';
    }
    
});