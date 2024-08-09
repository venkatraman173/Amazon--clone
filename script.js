const imgs = document.querySelectorAll('.header-slider u1 img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
    for(let i=0; i < imgs.length;i++) {
        imgs[i].style.display ='none';
    }
    imgs[n].style.display ='block';
}
changeSlide();

prev_btn.addEventListener('click', (e) => {
    n = n > 0 ? n - 1 : imgs.length - 1;
    changeSlide();
  });
  
  next_btn.addEventListener('click', (e) => {
    n = (n + 1) % imgs.length;
    changeSlide();
  });
  
  const scrollContainer = document.querySelectorAll('.products');
  for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
      evt.preventDefault();
      item.scrollLeft += evt.deltaY;
    })
  }