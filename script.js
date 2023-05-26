const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

// if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
// }

const close=document.getElementById('close');

  close.addEventListener('click',()=>{
    nav.classList.remove('active');
  })