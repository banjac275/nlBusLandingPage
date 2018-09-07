let c = false;
document.querySelector('.select__show').addEventListener('click', () => {
  console.log('k')
  let drop = document.querySelector('.select__child')
  switch(c) {
    case false: 
      drop.style.display = 'block';
      c = true;
      break;
    case true:
      drop.style.display = 'none';
      c = false;
      break;
  }
})